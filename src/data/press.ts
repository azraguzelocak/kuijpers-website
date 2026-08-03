// Press coverage — articles, interviews and broadcasts that featured Kuijpers
// Kip Research Field. The "In the press" section on the home page renders this
// list; newest first is the usual order.
//
// TO ADD A REAL ARTICLE: copy an entry, fill in the real outlet, headline, date
// and URL, and DELETE the `example: true` line.
//
// WRITING THE SUMMARY: one or two short sentences IN YOUR OWN WORDS — what the
// piece was about and why it matters to us. Do not paste sentences from the
// article itself; that is the publisher's text, and the card is only a pointer
// to it. Keep it under ~110 characters or the card will clamp it to three lines.
//
// The `example: true` entries are shown by `npm run dev` and LEFT OUT of
// `npm run build`, so placeholder coverage can never reach the live site. The
// section appears in production as soon as one real entry exists.

export interface PressItem {
	/** Publication, programme or site that published the piece. */
	outlet: string;
	/** Headline in English. Per-language versions live in src/i18n/cms.ts —
	 *  keep the original published wording as the entry for its own language. */
	title: string;
	/** Our own one-line description of the piece. Keep it short. */
	summary: string;
	/** Publication date, ISO format: "2026-07-29". Shown as e.g. July 2026. */
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
		title: "Students make broiler welfare measurable",
		summary:
			"HAS students turned broiler welfare into measurable scores, using farm data from our site in Grubbenvorst.",
		date: "2026-07-29",
		url: "https://www.nieuweoogst.nl/nieuws/2026/07/29/studenten-maken-dierenwelzijn-in-pluimveehouderij-meetbaar",
		language: "NL",
	},
	{
		outlet: "Example magazine",
		title: "Add the published headline here, in its own language",
		summary:
			"One line in your own words: what the piece covered and why it matters.",
		date: "2026-06-18",
		url: "https://example.com/article",
		language: "NL",
		example: true,
	},
	{
		outlet: "Example newspaper",
		title: "A second headline, to show how two lines look",
		summary:
			"Keep it under about 110 characters so the card never has to cut it off.",
		date: "2026-03-05",
		url: "https://example.com/article-2",
		language: "EN",
		example: true,
	},
	{
		outlet: "Example broadcast",
		title: "A third headline, for a radio or television item",
		summary:
			"Four to eight items suit this row; past that, give press its own page.",
		date: "2025-11-21",
		url: "https://example.com/article-3",
		language: "NL",
		example: true,
	},
];
