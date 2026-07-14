// -----------------------------------------------------------------------------
// Innovation dataset — Kuijpers Kip Research Field (broiler)
// -----------------------------------------------------------------------------
// Source of truth: the "Innovatiekaart" cross-table prepared internally
// (visulization/INNOVA~3.HTM.html). Names translated to English; the impact
// figures, categories and relationships are taken verbatim from that file.
//
// The 2026-07-10 revision (visulization/"Kopie van 20260706 Innovatiekaart …
// (MK).xlsx", sheet "Tabel") adds four innovations: dt, broed, patio, veranda.
// Its cross-table sheet is unchanged, so those four have no verified links and
// no impact figures in these units yet — see the note above their RELATIONS.
//
// Impact values are stored as YEARLY totals for the reference operation
// (256,000 places x 7 cycles/year -> SLAUGHTER_KG kg live weight / year).
// SIGN CONVENTION: positive = a saving (reduction / retention / on-site
// generation, shown green); negative = extra consumption or discharge (red).
// Values are indicative and meant to be replaced by measured data.
//
// `scene` = pin position (percentage) over the real site photo
// public/images/farm-map.jpg (barn/silos band ~65-80%, field ~85-95%).
// -----------------------------------------------------------------------------

export type Category = "emissions" | "production" | "health" | "safety";

export interface Impact {
	co2: number; // ton CO2 / year
	nh3: number; // kg NH3 / year
	gas: number; // m3 natural gas / year
	electricity: number; // kWh / year
	water: number; // m3 water discharge / year
	nutrient: number; // kg N retained / year
}

export interface Innovation {
	id: string;
	name: string; // full name
	short: string; // short label for nodes/pins
	category: Category;
	description: string; // one-line summary
	details: string; // longer explanation for the detail page
	impact: Impact;
	/** Pin position on the farm photo, as a percentage of the image (0-100). */
	scene: { x: number; y: number };
}

export interface Relation {
	a: string;
	b: string;
	/** 1 = required, 2 = enhancing */
	type: 1 | 2;
}

/** Live weight slaughtered per year for the reference operation (kg). */
export const SLAUGHTER_KG = 2_924_544;

export const CATEGORY_META: Record<
	Category,
	{ label: string; color: string }
> = {
	emissions: { label: "Emissions", color: "#1D9E75" },
	production: { label: "Production", color: "#EF9F27" },
	health: { label: "Health & Welfare", color: "#7F77DD" },
	safety: { label: "Safety", color: "#378ADD" },
};

export const RELATION_META: Record<1 | 2, { label: string; color: string }> = {
	1: { label: "required", color: "#054c9c" },
	2: { label: "enhancing", color: "#f49f3c" },
};

export interface Metric {
	key: keyof Impact;
	label: string;
	perKgUnit: string;
	yearUnit: string;
	perKg: (rawYearly: number) => number;
	decimals: number;
}

// Per-kg conversions mirror the original file exactly.
export const METRICS: Metric[] = [
	{ key: "co2", label: "CO₂", perKgUnit: "kg/kg", yearUnit: "t/yr", perKg: (r) => (r * 1000) / SLAUGHTER_KG, decimals: 3 },
	{ key: "nh3", label: "NH₃", perKgUnit: "g/kg", yearUnit: "kg/yr", perKg: (r) => (r * 1000) / SLAUGHTER_KG, decimals: 2 },
	{ key: "gas", label: "Gas", perKgUnit: "m³/kg", yearUnit: "m³/yr", perKg: (r) => r / SLAUGHTER_KG, decimals: 4 },
	{ key: "electricity", label: "Electricity", perKgUnit: "kWh/kg", yearUnit: "kWh/yr", perKg: (r) => r / SLAUGHTER_KG, decimals: 4 },
	{ key: "water", label: "Water discharge", perKgUnit: "L/kg", yearUnit: "m³/yr", perKg: (r) => (r * 1000) / SLAUGHTER_KG, decimals: 2 },
	{ key: "nutrient", label: "Nutrient retention", perKgUnit: "g N/kg", yearUnit: "kg N/yr", perKg: (r) => (r * 1000) / SLAUGHTER_KG, decimals: 2 },
];

const impact = (
	co2: number,
	nh3: number,
	gas: number,
	electricity: number,
	water: number,
	nutrient: number,
): Impact => ({ co2, nh3, gas, electricity, water, nutrient });

export const INNOVATIONS: Innovation[] = [
	{
		id: "fam",
		name: "Family heat / heat recovery",
		short: "Family heat",
		category: "emissions",
		description:
			"Recovers residual heat to warm the houses, cutting natural-gas use and CO₂.",
		details:
			"Broiler houses need a great deal of heat, especially early in each cycle when young chicks cannot yet regulate their own body temperature. Rather than burning gas for it, this system recovers residual heat from the on-site bioenergy plant and surrounding processes and feeds it back into the houses. Heat that would otherwise be wasted becomes the primary source of warmth for the flock, delivering a large and measurable reduction in natural-gas use and the associated CO₂. Because heating is one of the biggest energy demands in poultry production, closing this loop turns a running cost into an efficiency gain — and every cubic metre of gas left unburned is emissions that never reach the atmosphere.",
		impact: impact(489.3, 0, 274907, 0, 0, 0),
		scene: { x: 42, y: 72 },
	},
	{
		id: "ren",
		name: "Bioenergy plant — Renure production",
		short: "Renure",
		category: "emissions",
		description:
			"Refines digestate into a renewable fertiliser, recovering nitrogen and displacing fossil products.",
		details:
			"Digestate from the bioenergy plant still holds valuable nitrogen, which is normally lost or becomes an emission problem. Instead of treating it as waste, the Renure process refines it into a renewable mineral fertiliser that can replace fossil-based products. This keeps nutrients circulating within the system, recovers nitrogen that would otherwise escape, and reduces the operation's dependence on externally produced fertiliser. It is a clear example of the site's circular thinking: an output stream from one process becomes a valuable input for another, cutting both waste and purchased inputs at the same time.",
		impact: impact(35.8, 0, 0, -42991, 0, 30000),
		scene: { x: 65, y: 68 },
	},
	{
		id: "voer",
		name: "Own feed program",
		short: "Own feed",
		category: "production",
		description:
			"An in-house feed programme giving full control over ingredients, quality and traceability.",
		details:
			"A tailored, in-house feed programme gives full control over what the birds eat — ingredients, quality, and traceability from source to trough. Because feed drives growth, gut condition and overall health, this programme is the foundation many other innovations rely on, from antibiotic-free rearing to the welfare data captured elsewhere in the system. Owning the recipe means the operation can respond quickly to what the flock actually needs, rather than accepting a fixed off-the-shelf formulation. It is one of the most connected innovations on the site precisely because everything downstream — health, welfare, food safety — starts with the bird's diet.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 56, y: 76 },
	},
	{
		id: "vac",
		name: "Vaccine development",
		short: "Vaccine",
		category: "health",
		description:
			"Vaccines tailored to the flock's real disease pressure, reducing medical intervention.",
		details:
			"Developing vaccines matched to the flock's actual disease pressure means birds are protected against the threats that matter on this specific site, rather than a generic national profile. Better-targeted immunity keeps birds healthier through the cycle and reduces the need for medical intervention later. It is a cornerstone of raising birds without routine antibiotics: if the flock is well protected from the start, the whole chain of health and food-safety measures becomes achievable. This work feeds directly into vaccination-method development and the welfare dashboard, so protection and monitoring advance together.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 84, y: 70 },
	},
	{
		id: "zon",
		name: "Solar panels on the production site",
		short: "Solar panels",
		category: "emissions",
		description:
			"On-site solar covering much of the operation's electricity, displacing grid power.",
		details:
			"A large on-site solar array generates a substantial share of the electricity the operation consumes, directly displacing grid power and its emissions. Combined with the bioenergy plant, it moves the site toward producing more of its own clean energy than it draws from outside. Self-generated power also cushions the operation against volatile energy prices and grid constraints, which is increasingly important for energy-intensive facilities. The electricity it provides is what makes power-hungry innovations such as the air scrubber and water treatment viable without simply shifting emissions onto the grid.",
		impact: impact(170.2, 0, 0, 515890, 0, 0),
		scene: { x: 28, y: 64 },
	},
	{
		id: "kkt",
		name: "Short chain — avoided transport kilometres",
		short: "Short-chain transport",
		category: "production",
		description:
			"Production, processing and feed kept close together to avoid transport kilometres.",
		details:
			"By keeping production, processing, and feed supply physically close together, the operation avoids a significant number of transport kilometres. Fewer kilometres means lower road emissions, lower cost per bird, and less handling — a simple structural choice with benefits that compound across the whole system. Short transport distances also mean birds and products spend less time in transit, which supports both welfare and quality. It is a decision made once at the level of how the site is organised, but it pays off in every single cycle thereafter.",
		impact: impact(150, 0, 0, 0, 0, 0),
		scene: { x: 50, y: 78 },
	},
	{
		id: "licht",
		name: "Light recipe",
		short: "Light recipe",
		category: "health",
		description:
			"A researched lighting schedule matched to the birds' biology to support welfare.",
		details:
			"Light has a profound effect on how broilers rest, feed, and behave. A researched lighting schedule — intensity, colour, and timing tuned to the birds' biology — supports natural day-night rhythms, calmer behaviour, and better welfare. Well-rested, low-stress birds are healthier and more resilient, which reduces the risk of problems that would otherwise call for intervention. The lighting programme works hand in hand with the behaviour-recognition AI and the welfare dashboard: the light shapes behaviour, and the monitoring confirms the flock is responding as intended.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 12, y: 70 },
	},
	{
		id: "gg",
		name: "Bioenergy plant — green gas production",
		short: "Green gas",
		category: "emissions",
		description:
			"Upgrades biogas to grid-quality green gas, turning manure streams into renewable energy.",
		details:
			"The bioenergy plant digests manure and organic streams and upgrades the resulting biogas to grid-quality green gas. This turns a waste and emissions problem into renewable energy, displacing a large volume of fossil gas and delivering the single largest CO₂ reduction in the whole system. Because it sits at the heart of the site's circular design, the plant also feeds several other innovations: its residual heat warms the houses, its digestate becomes fertiliser, and its nitrogen is recovered rather than emitted. In other words, green gas is not just an energy product — it is the engine that makes much of the site's resource recovery possible.",
		impact: impact(1473.3, 0, 687268, 0, 0, 0),
		scene: { x: 60, y: 70 },
	},
	{
		id: "lw",
		name: "Air scrubber",
		short: "Air scrubber",
		category: "emissions",
		description:
			"Scrubs house exhaust air of ammonia, dust and odour before it leaves the site.",
		details:
			"Air scrubbers treat the air leaving the houses, capturing ammonia, fine dust, and odour before it reaches the surroundings. Cleaner exhaust air comes at the cost of some extra electricity, but it removes a large mass of ammonia each year and is central to being a good neighbour to the area around the site. The nitrogen captured by the scrubber is not simply discarded — it links into the digestate and nitrogen-recovery systems, so a pollutant becomes a recoverable resource. This is why the scrubber shows a small energy cost in red but strong reductions in ammonia and retained nutrients in green: it trades a little power for a large environmental gain.",
		impact: impact(-48.2, 13921, 0, -146169, -877, 11464),
		scene: { x: 53, y: 66 },
	},
	{
		id: "kkb",
		name: "Short chain — avoided cross-contamination risk",
		short: "Short-chain biosecurity",
		category: "production",
		description:
			"A short, controlled chain that minimises cross-contamination risk between farms.",
		details:
			"A short, tightly controlled chain minimises the number of contact points where disease can enter or spread between farms. Fewer transfers and less mixing means lower cross-contamination risk — a structural biosecurity advantage that directly supports antibiotic-free production. Every additional link in a supply chain is another opportunity for pathogens to move; by keeping the chain short and under its own control, the operation removes many of those opportunities entirely. This makes the health and food-safety goals far more achievable, because prevention at the structural level is always more reliable than treatment after the fact.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 88, y: 78 },
	},
	{
		id: "vet",
		name: "Veterinary analysis development",
		short: "Vet. analysis",
		category: "health",
		description:
			"In-house veterinary diagnostics that catch health signals early.",
		details:
			"In-house veterinary diagnostics turn health monitoring from reactive to proactive. Early, on-site analysis catches emerging issues before they spread, and the findings feed directly into the welfare and health dashboard for faster, better-informed decisions. Having diagnostic capability on the site rather than waiting on external labs shortens the time between a first signal and a response — and in a live flock, that time matters. Combined with the behaviour AI and vaccination programme, it forms a layered health system where problems are anticipated rather than simply managed.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 96, y: 72 },
	},
	{
		id: "ws",
		name: "WaterSafe",
		short: "WaterSafe",
		category: "emissions",
		description:
			"Water treatment that keeps drinking lines clean and cuts contaminated discharge.",
		details:
			"WaterSafe keeps drinking-water lines clean and biologically stable, which protects bird health, and it reduces the volume of contaminated water discharged from the site. Clean drinking water is a basic but often underrated pillar of flock health: contaminated lines can undermine every other health measure. On the environmental side, treating water so that less of it leaves the site as polluted discharge reduces the operation's footprint on the surrounding land and waterways. It integrates closely with the bioenergy plant's water systems, so water management and energy production reinforce one another rather than competing.",
		impact: impact(-28.4, 0, 0, -85982, 1755, 0),
		scene: { x: 36, y: 90 },
	},
	{
		id: "brand",
		name: "Fire-suppression technology",
		short: "Fire suppression",
		category: "safety",
		description:
			"Advanced fire-detection and suppression protecting birds, staff and buildings.",
		details:
			"Advanced fire-detection and suppression technology protects the most vulnerable part of any livestock operation: large numbers of animals housed together under one roof. Early detection and rapid response safeguard birds, staff, and buildings, and underpin the site's overall safety case. Fire is one of the highest-consequence risks in intensive housing, so investing in prevention and fast suppression is as much an animal-welfare measure as it is an asset-protection one. It sits alongside the environmental-safety systems as part of the operation's commitment to running a safe, responsible site.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 46, y: 65 },
	},
	{
		id: "ai",
		name: "AI-driven broiler behaviour recognition",
		short: "AI behaviour",
		category: "health",
		description:
			"Computer-vision AI that reads broiler behaviour to flag stress and illness early.",
		details:
			"Computer-vision AI watches the flock continuously, reading posture, movement, and distribution to spot the early signals of stress, illness, or welfare problems — often before they are visible to the human eye. It is the sensing layer that powers the welfare dashboard and much of the health system, turning thousands of subtle behavioural cues into actionable alerts. Unlike periodic manual checks, the AI never looks away, so subtle changes across the whole flock are caught the moment they begin. This early warning is what lets staff intervene gently and early, supporting welfare and reducing the need for heavier interventions later.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 22, y: 71 },
	},
	{
		id: "n2",
		name: "Bioenergy plant — NH₃ stripper (digestate)",
		short: "NH₃ stripper",
		category: "emissions",
		description:
			"Recovers ammonia-nitrogen from digestate as a usable product instead of an emission.",
		details:
			"A nitrogen stripper on the bioenergy plant pulls ammonia-nitrogen out of the digestate and captures it as a usable product. Nitrogen that would otherwise escape as an emission is recovered instead, cutting ammonia and keeping valuable nutrients in productive use. Nitrogen management is one of the defining environmental challenges in livestock farming, and recovering it at source is far more effective than trying to deal with it once it has dispersed. The stripped nitrogen connects into the Renure and fertiliser streams, so a potential pollutant is transformed into a marketable, renewable input.",
		impact: impact(-14.2, 1740, 0, -42991, 526, 25000),
		scene: { x: 70, y: 71 },
	},
	{
		id: "bws",
		name: "Bioenergy plant — WaterSafe",
		short: "Bio-WaterSafe",
		category: "emissions",
		description:
			"WaterSafe integrated with the bioenergy plant, cleaning process water and recovering resources.",
		details:
			"Integrating WaterSafe treatment with the bioenergy plant cleans process water and recovers resources within the same loop. It reduces discharge and strengthens the circular link between water management and energy production on the site. By handling water treatment where the energy and nutrient streams already come together, the operation avoids duplicating infrastructure and captures value that would otherwise be lost. It is a good illustration of how tightly the site's emissions innovations are woven together: energy, water, and nutrients are managed as one connected system rather than separate problems.",
		impact: impact(-22.7, 0, 0, -68785, 702, 0),
		scene: { x: 48, y: 81 },
	},
	{
		id: "vacm",
		name: "Vaccination method development",
		short: "Vacc. method",
		category: "health",
		description:
			"More precise, lower-stress ways of administering vaccines to the birds.",
		details:
			"Beyond which vaccines are used, how they are administered matters. Developing more precise, lower-stress vaccination methods improves protection while reducing handling stress on the birds — another building block of antibiotic-free rearing. Poor administration can waste a good vaccine or stress the flock unnecessarily, so refining the method protects both the investment and the bird. This work advances alongside vaccine development and the light programme, so that immunity is delivered in a way that fits the birds' welfare rather than working against it.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 90, y: 73 },
	},
	{
		id: "anti",
		name: "Food safety — zero antibiotics use",
		short: "Zero antibiotics",
		category: "safety",
		description:
			"Raising the flock with zero routine antibiotics — the top of the system.",
		details:
			"Raising a flock with zero routine antibiotics is only possible when everything else is right. This food-safety programme sits at the top of the system, depending on feed, biosecurity, vaccination, welfare monitoring, and light management all working together — which is why it connects to more innovations than any other. It is less a single technology than the outcome of the whole system functioning as designed: keep birds healthy by prevention, and the need for routine medication disappears. Achieving it is a strong signal of both animal welfare and food safety, and it is precisely the interconnection shown in this map that makes it realistic rather than aspirational.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 20, y: 90 },
	},
	{
		id: "dash",
		name: "Welfare & health dashboard",
		short: "Welfare dashboard",
		category: "health",
		description:
			"A live dashboard pulling every sensor and analysis into one welfare picture.",
		details:
			"The welfare and health dashboard brings every signal — AI behaviour analysis, veterinary findings, environmental readings — into a single, live picture. It turns scattered data into fast, informed decisions and is the hub that ties the health and welfare innovations together. Rather than asking staff to watch many separate systems, it presents one coherent view of how the flock is doing right now and where attention is needed. As the connecting point for the health cluster, it is what allows the operation to act on the whole picture, not just isolated readings — the difference between collecting data and actually managing welfare.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 74, y: 71 },
	},
	{
		id: "omg",
		name: "Environmental safety — NH₃ / particulates / odour",
		short: "Environmental NH₃",
		category: "safety",
		description:
			"Managing ammonia, dust and odour at the site boundary to protect the surroundings.",
		details:
			"Managing ammonia, fine dust, and odour at the site boundary keeps the operation compatible with its surroundings and compliant with environmental limits. It links tightly to the air scrubber, the bioenergy plant, and the short-chain choices that reduce emissions at source. Being a responsible neighbour is not only a regulatory requirement but also part of maintaining a long-term licence to operate in the region. By combining reduction at source with capture at the boundary, the operation addresses environmental impact from both directions rather than relying on a single line of defence.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 68, y: 90 },
	},
	{
		id: "haan",
		name: "Rooster management",
		short: "Rooster mgmt",
		category: "health",
		description:
			"Careful rooster management supporting flock balance, behaviour and welfare.",
		details:
			"Careful rooster management supports the balance, behaviour, and welfare of the flock as a whole. It works alongside light management and the broader welfare system to keep birds calm and healthy. Getting this balance right influences group dynamics and stress levels across the entire house, which in turn affects health outcomes. Though it is an indirect innovation with no standalone impact figure, it contributes to the calm, well-managed flock on which many of the health and food-safety goals quietly depend.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 32, y: 73 },
	},
	{
		id: "dt",
		name: "Digital twin — Kuijpers Kip Research Field",
		short: "Digital twin",
		category: "health",
		description:
			"A dashboard linking every stage of the chain, for in-line steering and third-party research.",
		details:
			"A digital twin of the whole operation: a dashboard that links every stage of the chain — parent stock, hatchery, broilers and the systems around them — so management parameters can be steered in-line during a cycle as well as reviewed after it. It answers two needs at once. Internally, it puts all chain information in one place, closing long-standing traceability gaps and raising the quality of everyday decisions. Externally, it opens the site up to partners: as research facilities in the Netherlands decline, there is growing demand for somewhere innovations can be tested at genuine commercial scale, and the twin is what makes that testable and measurable. Its effects are indirect but wide — health, welfare, emission steering and efficiency all improve once the people running the farm can finally see the whole picture at once.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 50, y: 60 },
	},
	{
		id: "broed",
		name: "Own hatching-egg production — hatching in the house",
		short: "In-house hatching",
		category: "health",
		description:
			"Chicks hatch in the house itself, at the right temperature and with feed and water from the first minute.",
		details:
			"Conventionally, chicks hatch in a hatchery and are then transported to the farm — arriving hours old, without food or water, and having already been exposed to other flocks along the way. Here the eggs are moved to the house while they are still eggs, and the chicks hatch in place: at the right temperature, with feed and water immediately within reach. The start of life becomes something optimal rather than something to recover from. Maternal immunity is preserved, cross-contamination between flocks is avoided, and the flock comes up more uniform. Reported effects include a 1–3% higher hatch rate, one animal transport removed from the chain altogether, and no need for cooling in the hatcher. Because every step stays in-house, traceability is complete.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 38, y: 66 },
	},
	{
		id: "patio",
		name: "Patio system",
		short: "Patio",
		category: "health",
		description:
			"An all-round housing system where chicks hatch and grow on in the same place — reported NH₃ down ~70%.",
		details:
			"The Patio system is the housing that makes in-house hatching possible: an all-round system in which chicks hatch and then grow on in the same place, without the handling, transport and cross-contamination that normally separate those two stages. Keeping the birds in one system from egg to slaughter weight improves the start of life, and the reported effects are substantial — around 70% lower ammonia emission, a better feed conversion ratio, and lower mortality. It also improves working conditions for the staff who care for the birds and for the catching crews. Combined with family heat for warmth and the site's own feed programme, it removes several of the traditional reasons a flock would ever need antibiotics.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 30, y: 70 },
	},
	{
		id: "veranda",
		name: "Veranda system (with Meggius)",
		short: "Veranda",
		category: "health",
		description:
			"Parent stock in small groups with scratching space and automatic egg collection — reported NH₃ down ~45%.",
		details:
			"The Veranda system houses the parent stock: hens and roosters live in small groups of around 600 birds, with roughly 30% scratching space and an automatic laying net, so no eggs end up on the floor. Roosters and hens are fed separately, which means each gets what it actually needs and the feed is used to its full value. The result is a better climate around the animals, closer control over the flock, and efficient use of raw materials — with a reported ~45% lower ammonia emission, a better feed conversion ratio, lower mortality and reduced feed use. Its real value shows in combination with the site's own hatchery and broiler houses: fewer losses anywhere in the chain, because every link sits under the same roof.",
		impact: impact(0, 0, 0, 0, 0, 0),
		scene: { x: 24, y: 64 },
	},
];

// Relationships from the cross-table. 1 = required, 2 = enhancing.
export const RELATIONS: Relation[] = [
	{ a: "ai", b: "anti", type: 2 }, { a: "ai", b: "dash", type: 1 }, { a: "ai", b: "licht", type: 2 }, { a: "ai", b: "omg", type: 2 }, { a: "ai", b: "voer", type: 2 },
	{ a: "anti", b: "brand", type: 2 }, { a: "anti", b: "dash", type: 1 }, { a: "anti", b: "haan", type: 2 }, { a: "anti", b: "kkb", type: 1 }, { a: "anti", b: "kkt", type: 1 },
	{ a: "anti", b: "licht", type: 1 }, { a: "anti", b: "lw", type: 2 }, { a: "anti", b: "omg", type: 1 }, { a: "anti", b: "vac", type: 1 }, { a: "anti", b: "vacm", type: 1 },
	{ a: "anti", b: "vet", type: 1 }, { a: "anti", b: "voer", type: 1 },
	{ a: "brand", b: "omg", type: 1 }, { a: "brand", b: "ws", type: 2 },
	{ a: "bws", b: "gg", type: 1 }, { a: "bws", b: "kkb", type: 2 }, { a: "bws", b: "kkt", type: 1 }, { a: "bws", b: "lw", type: 1 }, { a: "bws", b: "n2", type: 1 },
	{ a: "bws", b: "omg", type: 2 }, { a: "bws", b: "ren", type: 1 }, { a: "bws", b: "ws", type: 1 },
	{ a: "dash", b: "fam", type: 2 }, { a: "dash", b: "licht", type: 2 }, { a: "dash", b: "omg", type: 2 }, { a: "dash", b: "vac", type: 2 }, { a: "dash", b: "vacm", type: 2 },
	{ a: "dash", b: "vet", type: 2 }, { a: "dash", b: "voer", type: 2 },
	{ a: "fam", b: "gg", type: 2 }, { a: "fam", b: "lw", type: 1 }, { a: "fam", b: "ws", type: 2 }, { a: "fam", b: "zon", type: 2 },
	{ a: "gg", b: "kkb", type: 2 }, { a: "gg", b: "kkt", type: 1 }, { a: "gg", b: "n2", type: 1 }, { a: "gg", b: "ren", type: 1 }, { a: "gg", b: "voer", type: 2 }, { a: "gg", b: "ws", type: 2 },
	{ a: "haan", b: "licht", type: 2 }, { a: "haan", b: "omg", type: 2 },
	{ a: "kkb", b: "kkt", type: 1 }, { a: "kkb", b: "n2", type: 2 }, { a: "kkb", b: "omg", type: 1 }, { a: "kkb", b: "ren", type: 2 }, { a: "kkb", b: "voer", type: 2 },
	{ a: "kkt", b: "n2", type: 2 }, { a: "kkt", b: "omg", type: 1 }, { a: "kkt", b: "ren", type: 2 }, { a: "kkt", b: "voer", type: 2 },
	{ a: "licht", b: "omg", type: 2 }, { a: "licht", b: "vacm", type: 2 }, { a: "licht", b: "zon", type: 2 },
	{ a: "lw", b: "n2", type: 1 }, { a: "lw", b: "omg", type: 1 }, { a: "lw", b: "ren", type: 2 }, { a: "lw", b: "ws", type: 1 }, { a: "lw", b: "zon", type: 2 },
	{ a: "n2", b: "omg", type: 2 }, { a: "n2", b: "ren", type: 1 }, { a: "n2", b: "ws", type: 1 },
	{ a: "omg", b: "ren", type: 2 }, { a: "omg", b: "vac", type: 1 }, { a: "omg", b: "vacm", type: 1 }, { a: "omg", b: "vet", type: 2 }, { a: "omg", b: "voer", type: 2 }, { a: "omg", b: "ws", type: 2 },
	{ a: "ren", b: "ws", type: 1 },
	{ a: "vac", b: "vacm", type: 2 }, { a: "vac", b: "vet", type: 2 },
	{ a: "vacm", b: "vet", type: 2 },
	{ a: "ws", b: "zon", type: 2 },

	// ⚠️ PROVISIONAL — the four innovations below (dt, broed, patio, veranda) were added to the
	// "Tabel" sheet of the 2026-07-10 Innovatiekaart but NOT to its "Kruistabel voor visualisatie",
	// so no verified links exist for them. The links below are inferred from each row's own text
	// (e.g. Patio/Eigen broedei are both filed under the form name "Korte keten, vermeden
	// kruisbesmettingsrisico"; Veranda feeds roosters and hens separately). They still need MK's
	// confirmation — replace them once the cross-table is extended.
	{ a: "dt", b: "dash", type: 1 }, { a: "dt", b: "ai", type: 1 }, { a: "dt", b: "vet", type: 2 },
	{ a: "dt", b: "voer", type: 2 }, { a: "dt", b: "licht", type: 2 }, { a: "dt", b: "omg", type: 2 },
	{ a: "dt", b: "anti", type: 2 },
	{ a: "broed", b: "kkb", type: 1 }, { a: "broed", b: "patio", type: 1 }, { a: "broed", b: "kkt", type: 2 },
	{ a: "broed", b: "fam", type: 2 }, { a: "broed", b: "anti", type: 2 }, { a: "broed", b: "vac", type: 2 },
	{ a: "patio", b: "kkb", type: 1 }, { a: "patio", b: "omg", type: 2 }, { a: "patio", b: "lw", type: 2 },
	{ a: "patio", b: "anti", type: 2 }, { a: "patio", b: "licht", type: 2 }, { a: "patio", b: "dash", type: 2 },
	{ a: "patio", b: "fam", type: 2 },
	{ a: "veranda", b: "haan", type: 1 }, { a: "veranda", b: "broed", type: 1 }, { a: "veranda", b: "omg", type: 2 },
	{ a: "veranda", b: "voer", type: 2 }, { a: "veranda", b: "kkb", type: 2 }, { a: "veranda", b: "licht", type: 2 },
];

/** Is this a direct, quantified innovation (vs. an indirect one)? */
export function isDirect(inn: Innovation): boolean {
	const i = inn.impact;
	return Boolean(i.co2 || i.nh3 || i.gas || i.electricity || i.water || i.nutrient);
}

/** All relations touching a given innovation id. */
export function relationsFor(id: string): { other: string; type: 1 | 2 }[] {
	return RELATIONS.filter((r) => r.a === id || r.b === id).map((r) => ({
		other: r.a === id ? r.b : r.a,
		type: r.type,
	}));
}
