import { useEffect, useMemo, useRef, useState } from "react";
import {
	INNOVATIONS,
	RELATIONS,
	CATEGORY_META,
	RELATION_META,
	METRICS,
	isDirect,
	relationsFor,
	type Innovation,
	type Category,
} from "../../data/innovations";
import { ui, type Lang } from "../../i18n/ui";
import { translateCms } from "../../i18n/cms";

// UI-string translator (falls back to English). Data strings (innovation names,
// descriptions, category/metric/relation labels) go through translateCms().
const makeT =
	(lang: Lang) =>
	(key: string): string =>
		(ui[lang] as Record<string, string>)[key] ?? (ui.en as Record<string, string>)[key] ?? key;
const tc = (text: string, lang: Lang) => translateCms(text, lang);
const innHref = (id: string, lang: Lang) =>
	lang === "en" ? `/innovations/${id}` : `/${lang}/innovations/${id}`;

// -----------------------------------------------------------------------------
// Shared helpers
// -----------------------------------------------------------------------------

const BY_ID: Record<string, Innovation> = Object.fromEntries(
	INNOVATIONS.map((i) => [i.id, i]),
);

const clamp = (v: number, lo: number, hi: number) =>
	Math.max(lo, Math.min(hi, v));

function fmt(v: number, decimals: number): string {
	if (Math.abs(v) >= 1000) return Math.round(v).toLocaleString("en-GB");
	return v.toFixed(decimals);
}

// Per-metric maximum |per-kg| value, used to scale the impact bars.
const METRIC_MAX: Record<string, number> = (() => {
	const out: Record<string, number> = {};
	for (const m of METRICS) {
		let mx = 0;
		for (const inn of INNOVATIONS) mx = Math.max(mx, Math.abs(m.perKg(inn.impact[m.key])));
		out[m.key] = mx || 1;
	}
	return out;
})();

const POS = "#1D9E75";
const NEG = "#054c9c";
const ZERO = "#b4b2a9";

// -----------------------------------------------------------------------------
// Rotatable network ("living organism")
// -----------------------------------------------------------------------------

type Vec3 = { x: number; y: number; z: number };

// Fibonacci sphere — evenly distributes N points on a unit sphere.
function fibonacciSphere(n: number): Vec3[] {
	const pts: Vec3[] = [];
	const golden = Math.PI * (3 - Math.sqrt(5));
	for (let i = 0; i < n; i++) {
		const y = 1 - (i / (n - 1)) * 2; // 1 .. -1
		const r = Math.sqrt(1 - y * y);
		const theta = golden * i;
		pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
	}
	return pts;
}

function rotate(p: Vec3, rx: number, ry: number): Vec3 {
	const cosY = Math.cos(ry), sinY = Math.sin(ry);
	const x1 = p.x * cosY + p.z * sinY;
	const z1 = -p.x * sinY + p.z * cosY;
	const cosX = Math.cos(rx), sinX = Math.sin(rx);
	const y2 = p.y * cosX - z1 * sinX;
	const z2 = p.y * sinX + z1 * cosX;
	return { x: x1, y: y2, z: z2 };
}

function NetworkSphere({
	selectedId,
	onSelect,
	onDeselect,
	lang,
}: {
	selectedId: string | null;
	onSelect: (id: string) => void;
	onDeselect: () => void;
	lang: Lang;
}) {
	const t = makeT(lang);
	const base = useMemo(() => fibonacciSphere(INNOVATIONS.length), []);
	const [rot, setRot] = useState({ rx: -0.2, ry: 0.4 });
	const [spin, setSpin] = useState(true);
	const [hover, setHover] = useState<string | null>(null);
	const [phase, setPhase] = useState(0);
	// viewBox units per rendered CSS pixel — labels multiply by this so they stay
	// the same physical size on a phone as on a desktop.
	const [k, setK] = useState(1);
	const svgRef = useRef<SVGSVGElement | null>(null);
	const dragging = useRef(false);
	const moved = useRef(false);
	const last = useRef({ x: 0, y: 0 });
	const spinRef = useRef(spin);
	spinRef.current = spin;
	const hoverRef = useRef(hover);
	hoverRef.current = hover;
	const selRef = useRef(selectedId);
	selRef.current = selectedId;

	// Gently rotate only when idle — not while dragging, hovering, or focused.
	useEffect(() => {
		let prev = performance.now();
		let raf = 0;
		const loop = (t: number) => {
			const dt = t - prev;
			prev = t;
			setPhase((ph) => ph + dt);
				if (spinRef.current && !dragging.current && !hoverRef.current && !selRef.current) {
				setRot((r) => ({ ...r, ry: r.ry + dt * 0.00016 }));
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, []);

	// The focused node: a click-selected one wins, otherwise whatever is hovered.
	const activeId = selectedId ?? hover;
	const activeSet = useMemo(() => {
		if (!activeId) return null as Set<string> | null;
		const s = new Set(relationsFor(activeId).map((r) => r.other));
		s.add(activeId);
		return s;
	}, [activeId]);

	const W = 560, H = 500, CX = 280, CY = 250, R = 205;

	useEffect(() => {
		const el = svgRef.current;
		if (!el) return;
		const measure = () => {
			const r = el.getBoundingClientRect();
			if (r.width && r.height) setK(clamp(Math.max(W / r.width, H / r.height), 1, 1.9));
		};
		measure();
		if (typeof ResizeObserver === "undefined") {
			window.addEventListener("resize", measure);
			return () => window.removeEventListener("resize", measure);
		}
		const ro = new ResizeObserver(measure);
		ro.observe(el);
		return () => ro.disconnect();
	}, []);

	const nodes = useMemo(() => {
		return INNOVATIONS.map((inn, i) => {
			const p = rotate(base[i], rot.rx, rot.ry);
			const depth = (p.z + 1) / 2;
			return { inn, x: CX + p.x * R, y: CY - p.y * R, z: p.z, depth };
		}).sort((a, b) => a.z - b.z);
	}, [base, rot]);

	const posById = useMemo(() => {
		const m: Record<string, { x: number; y: number; depth: number }> = {};
		for (const n of nodes) m[n.inn.id] = { x: n.x, y: n.y, depth: n.depth };
		return m;
	}, [nodes]);

const ctrl = (a, b) => {
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  return { x: mx + (CX - mx) * 0.16, y: my + (CY - my) * 0.16 };
};
const qpath = (a, b) => {
  const k = ctrl(a, b);
  return "M " + a.x + " " + a.y + " Q " + k.x + " " + k.y + " " + b.x + " " + b.y;
};
const qpoint = (a, b, tt) => {
  const k = ctrl(a, b), u = 1 - tt;
  return { x: u * u * a.x + 2 * u * tt * k.x + tt * tt * b.x, y: u * u * a.y + 2 * u * tt * k.y + tt * tt * b.y };
};
const pulses = useMemo(() => {
  const arr = [];
  for (let i = 0; i < 16; i++) arr.push({ rel: RELATIONS[Math.floor((i / 16) * RELATIONS.length)], off: (i * 0.137) % 1, dur: 2400 + (i % 6) * 320 });
  return arr;
}, []);


	const onPointerDown = (e: React.PointerEvent) => {
		dragging.current = true;
		moved.current = false;
		last.current = { x: e.clientX, y: e.clientY };
		(e.target as Element).setPointerCapture?.(e.pointerId);
	};
	const onPointerMove = (e: React.PointerEvent) => {
		if (!dragging.current) return;
		const dx = e.clientX - last.current.x;
		const dy = e.clientY - last.current.y;
		if (Math.abs(dx) + Math.abs(dy) > 3) moved.current = true;
		last.current = { x: e.clientX, y: e.clientY };
		setRot((r) => ({ ry: r.ry + dx * 0.008, rx: clamp(r.rx + dy * 0.008, -1.2, 1.2) }));
	};
	const onPointerUp = () => { dragging.current = false; };

	// Lay out the connected-node name labels so they don't overlap: place each beside
	// its node, then push it down until it clears the labels already placed.
	const activeLabels: any[] = (() => {
		if (!activeSet) return [];
		const items: any[] = nodes
			.filter((n) => activeSet.has(n.inn.id))
			.map((n) => {
				const direct = isDirect(n.inn);
				const rr = (direct ? 9 : 6.5) * (0.65 + n.depth * 0.5) * (n.inn.id === selectedId ? 1.35 : 1);
				const short = tc(n.inn.short, lang);
				return { id: n.inn.id, short, isSel: n.inn.id === selectedId, nx: n.x, ny: n.y, rr, w: (short.length * 6.3 + 16) * k, px: 0, py: 0 };
			});
		for (const it of items) {
			let px = it.nx + it.rr + 5;
			if (px + it.w > W - 4) px = it.nx - it.rr - 5 - it.w;
			it.px = Math.max(4, Math.min(px, W - it.w - 4));
			it.py = it.ny;
		}
		items.sort((a, b) => a.ny - b.ny);
		const placed: any[] = [];
		const hit = (a: any, b: any) => a.px < b.px + b.w && a.px + a.w > b.px && a.py - 10 * k < b.py + 10 * k && a.py + 10 * k > b.py - 10 * k;
		for (const it of items) {
			let tries = 0;
			while (placed.some((q) => hit(it, q)) && tries < 70) { it.py += 5 * k; tries++; }
			// Keep clear of the Pause button sitting in the bottom strip.
			it.py = Math.max(14 * k, Math.min(it.py, H - 30 * k));
			placed.push(it);
		}
		return items;
	})();

	return (
		<div className="relative">
			<svg
				viewBox={`0 0 ${W} ${H}`}
				ref={svgRef}
				className="max-h-[270px] w-full touch-none select-none sm:max-h-none"
				style={{ cursor: dragging.current ? "grabbing" : "grab" }}
				onPointerDown={onPointerDown}
				onPointerMove={onPointerMove}
				onPointerUp={onPointerUp}
				onPointerLeave={onPointerUp}
				onClick={() => { if (!moved.current) onDeselect(); }}
			>
				<defs>
					<radialGradient id="sphere-glow" cx="50%" cy="45%" r="55%">
						<stop offset="0%" stopColor="#e6eefb" stopOpacity="0.95" />
						<stop offset="60%" stopColor="#e6eefb" stopOpacity="0.3" />
						<stop offset="100%" stopColor="#e6eefb" stopOpacity="0" />
					</radialGradient>
				</defs>
				<circle cx={CX} cy={CY} r={R + 30} fill="url(#sphere-glow)" />

				{/* Nerve fibres — a faint web of every link, brightening for the focused node */}
<g fill="none" strokeLinecap="round">
  {RELATIONS.map((rel, idx) => {
    const a = posById[rel.a];
    const b = posById[rel.b];
    if (!a || !b) return null;
    const connected = activeId != null && (rel.a === activeId || rel.b === activeId);
    const depth = (a.depth + b.depth) / 2;
    const stroke = connected ? RELATION_META[rel.type].color : "#8ea4c9";
    const opacity = connected ? 0.92 : activeId ? 0.05 : 0.08 + depth * 0.14;
    return <path key={idx} d={qpath(a, b)} stroke={stroke} strokeWidth={connected ? 2.2 : 1} opacity={opacity} />;
  })}
</g>

{/* Travelling signals along the fibres */}
<g>
  {pulses.map((pl, i) => {
    const a = posById[pl.rel.a];
    const b = posById[pl.rel.b];
    if (!a || !b) return null;
    const tt = (((phase / pl.dur) + pl.off) % 1 + 1) % 1;
    const pt = qpoint(a, b, tt);
    const depth = (a.depth + b.depth) / 2;
    const near = activeId == null || pl.rel.a === activeId || pl.rel.b === activeId;
    const op = (0.3 + depth * 0.6) * (near ? 1 : 0.2);
    return <circle key={"pulse" + i} cx={pt.x} cy={pt.y} r={2.4} fill="#cfe0ff" opacity={op} />;
  })}
</g>

				{/* Nodes */}
				<g>
					{nodes.map(({ inn, x, y, depth }) => {
						const direct = isDirect(inn);
						const isSel = inn.id === selectedId;
						const inActive = activeSet ? activeSet.has(inn.id) : false;
						const dim = selectedId != null && !inActive;
						const r = (direct ? 9 : 6.5) * (0.65 + depth * 0.5) * (isSel ? 1.35 : 1);
						const cat = CATEGORY_META[inn.category].color;
						return (
							<g
								key={inn.id}
								className="cursor-pointer"
								onPointerDown={(e) => e.stopPropagation()}
								onClick={(e) => { e.stopPropagation(); if (!moved.current) onSelect(inn.id); }}
								onMouseEnter={() => setHover(inn.id)}
								onMouseLeave={() => setHover(null)}
								opacity={dim ? 0.28 : 1}
							>
								<circle cx={x} cy={y} r={r * 2.2} fill={cat} opacity={0.09 + depth * 0.05} />
{isSel && (
									<circle cx={x} cy={y} r={r + 6} fill="none" stroke={cat} strokeWidth={2} opacity={0.6} />
								)}
								<circle
									cx={x} cy={y} r={r}
									fill={cat}
									opacity={0.78 + depth * 0.22}
									stroke="#fff"
									strokeWidth={isSel ? 2.4 : 1.6}
								/>
																{!activeSet && depth > 0.6 && (() => {
									// Flip the label to the left of the node when it would run off
									// the edge — at phone widths there is far less room to the right.
									const label = tc(inn.short, lang);
									const toRight = x + r + 4 + label.length * 6.3 * k <= W - 4;
									return (
										<text
											x={toRight ? x + r + 4 : x - r - 4} y={y + 4 * k}
											textAnchor={toRight ? "start" : "end"}
											fontSize={12 * k}
											fontWeight={500}
											fill="#1f2937"
											style={{ paintOrder: "stroke", stroke: "#eef2f8", strokeWidth: 3 * k, strokeLinejoin: "round" }}
										>
											{label}
										</text>
									);
								})()}
							</g>
						);
					})}
				</g>

				{/* Connected-node labels — de-collided, with leader lines */}
				<g>
					{activeLabels.map((it) => (
						<g key={"lbl-" + it.id}>
							<line x1={it.nx} y1={it.ny} x2={it.px < it.nx ? it.px + it.w : it.px} y2={it.py} stroke="#94a3b8" strokeWidth={1} opacity={0.75} />
							<rect x={it.px} y={it.py - 9 * k} width={it.w} height={18 * k} rx={9 * k} fill={it.isSel ? "#054c9c" : "#1c1917"} />
							<text x={it.px + 8 * k} y={it.py + 3.5 * k} fontSize={11 * k} fontWeight={600} fill="#fff">{it.short}</text>
						</g>
					))}
				</g>
			</svg>

			{/* Hint and play/pause share the bottom strip so neither sits over the nodes */}
			<div className="absolute inset-x-0 bottom-2 flex items-center justify-between gap-2 px-3">
				<span className="pointer-events-none min-w-0 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-stone-500 backdrop-blur">
					{selectedId ? t("exp.pill.selected") : t("exp.pill.hint")}
				</span>
				<button
					type="button"
					onClick={() => setSpin((s) => !s)}
					className="shrink-0 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-stone-600 backdrop-blur transition-colors hover:bg-white"
				>
					{spin ? `❚❚ ${t("exp.pause")}` : `▶ ${t("exp.spin")}`}
				</button>
			</div>
		</div>
	);
}

// -----------------------------------------------------------------------------
// Impact bars (shared)
// -----------------------------------------------------------------------------

function ImpactBars({ inn, lang }: { inn: Innovation; lang: Lang }) {
	return (
		<div className="space-y-2">
			{METRICS.map((m) => {
				const raw = inn.impact[m.key];
				const perKg = m.perKg(raw);
				const width = Math.min(100, (Math.abs(perKg) / METRIC_MAX[m.key]) * 100);
				const color = perKg === 0 ? ZERO : perKg > 0 ? POS : NEG;
				const perKgText = perKg === 0 ? "—" : `${fmt(perKg, m.decimals)} ${m.perKgUnit}`;
				const yearText = raw === 0 ? "" : `${fmt(raw, 1)} ${m.yearUnit}`;
				return (
					<div key={m.key} className="grid grid-cols-[92px_1fr_128px] items-center gap-2 text-xs">
						<span className="text-stone-500">{tc(m.label, lang)}</span>
						<span className="relative h-3 overflow-hidden rounded bg-stone-100">
							<span className="absolute left-0 top-0 h-full rounded" style={{ width: `${width}%`, background: color }} />
						</span>
						<span className="text-right tabular-nums text-stone-500">
							{perKgText}
							{yearText && <><br /><span className="text-[11px] text-stone-400">{yearText}</span></>}
						</span>
					</div>
				);
			})}
		</div>
	);
}

function RelationTags({ id, lang }: { id: string; lang: Lang }) {
	const t = makeT(lang);
	const rels = relationsFor(id);
	if (!rels.length) return null;
	return (
		<div className="mt-4 text-xs text-stone-500">
			<span className="font-semibold text-stone-700">{t("exp.connectedto")}</span>
			<div className="mt-2 flex flex-wrap gap-1.5">
				{rels.map((r, i) => {
					const meta = RELATION_META[r.type];
					const other = BY_ID[r.other];
					return (
						<span
							key={i}
							className="inline-block rounded-full px-2 py-0.5 text-[11px]"
							style={{ background: `${meta.color}22`, color: meta.color }}
						>
							{other ? tc(other.short, lang) : ""} · {tc(meta.label, lang)}
						</span>
					);
				})}
			</div>
		</div>
	);
}

// -----------------------------------------------------------------------------
// Detail panel (inline quick view)
// -----------------------------------------------------------------------------

function DetailPanel({ selectedId, lang }: { selectedId: string | null; lang: Lang }) {
	const t = makeT(lang);
	const inn = selectedId ? BY_ID[selectedId] : null;
	if (!inn) {
		return (
			<div className="hidden h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-8 text-center lg:flex">
				<p className="text-lg font-semibold text-stone-700">{t("exp.empty.title")}</p>
				<p className="mt-2 max-w-xs text-sm text-stone-500">
					{t("exp.empty.body")}
				</p>
			</div>
		);
	}
	const cat = CATEGORY_META[inn.category];
	const direct = isDirect(inn);
	return (
		<div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
			<span
				className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
				style={{ background: `${cat.color}1a`, color: cat.color }}
			>
				<span className="h-2 w-2 rounded-full" style={{ background: cat.color }} />
				{tc(cat.label, lang)}
			</span>
			<h3 className="mt-3 text-xl font-bold text-stone-900">{tc(inn.name, lang)}</h3>
			<p className="mt-2 text-sm leading-relaxed text-stone-600">{tc(inn.description, lang)}</p>
			<div className="mt-5 border-t border-stone-100 pt-4">
				<p className="mb-3 text-xs font-semibold uppercase tracking-wide text-stone-500">
					{direct ? t("exp.impact.direct") : t("exp.impact.indirect")}
				</p>
				<ImpactBars inn={inn} lang={lang} />
			</div>
			<RelationTags id={inn.id} lang={lang} />
			<a
				href={innHref(inn.id, lang)}
				className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
			>
				{t("exp.readmore")}
			</a>
		</div>
	);
}

// -----------------------------------------------------------------------------
// Cards grid (research-style) — each card links to its detail page
// -----------------------------------------------------------------------------

function CardsGrid({
	selectedId,
	filter,
	lang,
}: {
	selectedId: string | null;
	filter: Category | "all";
	lang: Lang;
}) {
	const t = makeT(lang);
	const list = INNOVATIONS.filter((i) => filter === "all" || i.category === filter);

	return (
		<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{list.map((inn) => {
				const cat = CATEGORY_META[inn.category];
				const isSel = inn.id === selectedId;
				const direct = isDirect(inn);
				return (
					<a
						key={inn.id}
						href={innHref(inn.id, lang)}
						className={`flex flex-col rounded-xl border bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
							isSel ? "" : "border-stone-200"
						}`}
						style={isSel ? { borderColor: cat.color, boxShadow: `0 0 0 2px ${cat.color}` } : undefined}
					>
						<div className="flex items-center justify-between gap-2">
							<span
								className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
								style={{ background: `${cat.color}1a`, color: cat.color }}
							>
								<span className="h-1.5 w-1.5 rounded-full" style={{ background: cat.color }} />
								{tc(cat.label, lang)}
							</span>
							<span className="text-[10px] font-medium uppercase tracking-wide text-stone-400">
								{direct ? t("exp.direct") : t("exp.indirect")}
							</span>
						</div>
						<h4 className="mt-3 text-base font-semibold text-stone-900">{tc(inn.name, lang)}</h4>
						<p className="mt-1.5 flex-1 text-sm leading-relaxed text-stone-600">{tc(inn.description, lang)}</p>
						<span className="mt-3 text-xs font-semibold" style={{ color: cat.color }}>
							{t("exp.readmore")}
						</span>
					</a>
				);
			})}
		</div>
	);
}

// -----------------------------------------------------------------------------
// Legend
// -----------------------------------------------------------------------------

function Legend({ lang }: { lang: Lang }) {
	return (
		<div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-500">
			{(Object.keys(CATEGORY_META) as Category[]).map((c) => (
				<span key={c} className="inline-flex items-center gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full" style={{ background: CATEGORY_META[c].color }} />
					{tc(CATEGORY_META[c].label, lang)}
				</span>
			))}
			<span className="ml-1 inline-flex items-center gap-1.5">
				<span className="inline-block h-0 w-4 border-t-2" style={{ borderColor: RELATION_META[1].color }} />
				{tc(RELATION_META[1].label, lang)}
			</span>
			<span className="inline-flex items-center gap-1.5">
				<span className="inline-block h-0 w-4 border-t-2" style={{ borderColor: RELATION_META[2].color }} />
				{tc(RELATION_META[2].label, lang)}
			</span>
		</div>
	);
}

// -----------------------------------------------------------------------------
// Main export
// -----------------------------------------------------------------------------

export default function InnovationExplorer({ lang = "en" }: { lang?: Lang }) {
	const t = makeT(lang);
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [filter, setFilter] = useState<Category | "all">("all");
	const vizRef = useRef<HTMLDivElement>(null);

	// When an innovation is selected (e.g. from a map marker), bring the network
	// + impact view into focus rather than scrolling down to the cards.
	useEffect(() => {
		if (selectedId && vizRef.current) {
			vizRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	}, [selectedId]);

	const filters: { value: Category | "all"; label: string }[] = [
		{ value: "all", label: t("exp.filter.all") },
		{ value: "emissions", label: tc("Emissions", lang) },
		{ value: "production", label: tc("Production", lang) },
		{ value: "health", label: tc("Health & Welfare", lang) },
		{ value: "safety", label: tc("Safety", lang) },
	];

	return (
		<div>
			{/* Legend */}
			<div className="mb-6">
				<Legend lang={lang} />
			</div>

			{/* Network + impact detail */}
			<div ref={vizRef} className="mt-12 grid scroll-mt-24 grid-cols-1 gap-6 lg:grid-cols-2">
				<div className="rounded-2xl border border-stone-200 bg-gradient-to-b from-stone-50 to-white p-2 shadow-sm">
					<div className="flex items-center justify-between px-3 pt-2">
						<span className="text-sm font-semibold uppercase tracking-wide text-stone-500">
							{t("exp.howconnect")}
						</span>
						{selectedId && (
							<button
								type="button"
								onClick={() => setSelectedId(null)}
								className="rounded-full px-2 py-0.5 text-xs font-medium text-stone-400 transition-colors hover:text-stone-600"
							>
								{t("exp.reset")} ✕
							</button>
						)}
					</div>
					<NetworkSphere selectedId={selectedId} onSelect={setSelectedId} onDeselect={() => setSelectedId(null)} lang={lang} />
				</div>
				<DetailPanel selectedId={selectedId} lang={lang} />
			</div>

			{/* 3. Cards */}
			<div className="mt-14">
				<div className="mb-5 flex flex-wrap items-center justify-between gap-3">
					<h3 className="text-2xl font-bold tracking-tight text-stone-900">{t("exp.every")}</h3>
					<div className="flex flex-wrap gap-2">
						{filters.map((f) => (
							<button
								key={f.value}
								type="button"
								onClick={() => setFilter(f.value)}
								className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
									filter === f.value
										? "border-brand-600 bg-brand-600 text-white"
										: "border-stone-200 text-stone-600 hover:bg-stone-50"
								}`}
							>
								{f.label}
							</button>
						))}
					</div>
				</div>
				<CardsGrid selectedId={selectedId} filter={filter} lang={lang} />
			</div>

		</div>
	);
}
