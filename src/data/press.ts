// Press coverage — articles, interviews and broadcasts that featured Kuijpers
// Kip Research Field. The "In the press" section on the home page renders this
// list; newest first is the usual order.
//
// TO ADD A REAL ARTICLE: copy one of the entries below, fill in the real outlet,
// headline, date and URL, and DELETE the `example: true` line.
//
// The `example: true` entries below exist only so the section can be previewed
// while the real links are gathered. They are shown by `npm run dev` and are
// LEFT OUT of `npm run build`, so no invented coverage can reach the live site.
// Once every entry is real, the section appears in production automatically.

export interface PressItem {
	/** Publication, programme or site that published the piece. */
	outlet: string;
	/** Headline, as published. */
	title: string;
	/** One or two sentences in your own words: what the piece was about. */
	summary: string;
	/** Publication date, ISO format: "2026-05-14". Shown as e.g. 14 May 2026. */
	date: string;
	/** Link to the article. Opens in a new tab. */
	url: string;
	/** Optional language badge for the article itself, e.g. "NL", "EN". */
	language?: string;
	/** Placeholder marker — dev preview only, never built into the live site. */
	example?: boolean;
}

export const PRESS: PressItem[] = [
	{
		outlet: "Nieuwe Oogst",
		title: "Studenten maken dierenwelzijn in pluimveehouderij meetbaar",
		summary:
			"Students from HAS green academy built a dashboard that scores broiler welfare objectively, using Mellor's five-domain model applied to data already collected on the farm. They developed and tested it on the Kuijpers Kip site in Grubbenvorst, so management decisions can be judged on measured welfare rather than impressions.",
		date: "2026-07-29",
		url: "https://www.nieuweoogst.nl/nieuws/2026/07/29/studenten-maken-dierenwelzijn-in-pluimveehouderij-meetbaar",
		language: "NL",
	},
	{
		outlet: "Example outlet — replace with the real one",
		title: "Headline of the article goes here",
		summary:
			"A sentence or two describing what the article covered — for instance the digital twin, an emission result, or a visit to the research field.",
		date: "2026-06-18",
		url: "https://example.com/article",
		language: "NL",
		example: true,
	},
	{
		outlet: "Example outlet — replace with the real one",
		title: "Second article headline goes here",
		summary:
			"Keep these summaries short: readers scan them. Say what the piece was about and why it matters, not the whole story.",
		date: "2026-03-05",
		url: "https://example.com/article-2",
		language: "EN",
		example: true,
	},
	{
		outlet: "Example outlet — replace with the real one",
		title: "Third article headline goes here",
		summary:
			"Three to six items works best. Beyond that the section is worth splitting onto its own page.",
		date: "2025-11-21",
		url: "https://example.com/article-3",
		language: "NL",
		example: true,
	},
];
