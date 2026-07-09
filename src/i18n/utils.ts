import { ui, defaultLang, type Lang } from "./ui";

// Which top-level routes have a translated version (so the language switcher
// doesn't link to a page that doesn't exist yet). Add routes here as pages get
// translated. "" = the home page.
export const TRANSLATED_ROUTES = new Set<string>(["", "about", "services", "research", "innovations", "contact", "privacy", "cookies"]);

export function getLangFromUrl(url: URL): Lang {
	const [, seg] = url.pathname.split("/");
	if (seg === "nl" || seg === "de") return seg;
	return defaultLang;
}

/** Returns a t(key) function for the given language, falling back to English. */
export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)["en"]): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

/** Prefix a root-relative path with the locale (English stays unprefixed). */
export function localizePath(path: string, lang: Lang): string {
	if (lang === defaultLang) return path;
	if (path === "/") return `/${lang}/`;
	return `/${lang}${path}`;
}

/**
 * Nav href: use the localized path only if that page has a translated version;
 * otherwise fall back to the English (unprefixed) page so links never 404 while
 * pages are being translated.
 */
export function localizedHref(path: string, lang: Lang): string {
	const key = path.replace(/^\/|\/$/g, "");
	if (lang === defaultLang || !TRANSLATED_ROUTES.has(key)) return path;
	return localizePath(path, lang);
}

/** Strip any locale prefix from a path, giving the canonical English path. */
export function stripLocale(pathname: string): string {
	const m = pathname.match(/^\/(nl|de)(\/.*)?$/);
	const rest = m ? m[2] ?? "/" : pathname;
	return rest;
}

/**
 * Where the language switcher should point for a target language: the same page
 * in that language if it's translated, otherwise that language's home.
 */
export function switchLangPath(url: URL, target: Lang): string {
	const base = stripLocale(url.pathname);
	const key = base.replace(/^\/|\/$/g, ""); // "" for home, "about" for /about
	// Innovation detail pages exist in every language, so keep the same page.
	if (TRANSLATED_ROUTES.has(key) || /^innovations\/.+/.test(key)) return localizePath(base, target);
	return localizePath("/", target);
}
