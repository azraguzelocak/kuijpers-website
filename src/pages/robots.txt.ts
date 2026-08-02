import type { APIRoute } from "astro";

// Built once at build time (static output). The sitemap URL is derived from
// `site` in astro.config.mjs, so it always matches the deployed domain.
export const GET: APIRoute = ({ site }) => {
	const sitemap = new URL("sitemap-index.xml", site).href;
	const body = [
		"User-agent: *",
		"Allow: /",
		"",
		`Sitemap: ${sitemap}`,
		"",
	].join("\n");

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
