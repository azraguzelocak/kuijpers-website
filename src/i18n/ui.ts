// Translation strings for the static UI. Keys fall back to English when a
// language is missing a value (see useTranslations in ./utils).
// Draft NL/DE translations — please review the wording (esp. industry terms).

export const languages = { en: "EN", nl: "NL", de: "DE" } as const;
export const languageNames = {
	en: "English",
	nl: "Nederlands",
	de: "Deutsch",
} as const;
export const defaultLang = "en";
export type Lang = "en" | "nl" | "de";

export const ui = {
	en: {
		// nav / footer
		"nav.home": "Home",
		"nav.about": "About",
		"nav.services": "Services",
		"nav.research": "Research",
		"nav.innovations": "Innovations",
		"nav.contact": "Contact",
		"footer.tagline":
			"Advancing poultry production through digital twin technology and data-driven research. Bridging science and practice for a more sustainable, efficient future.",
		"footer.navHeading": "Navigation",
		"footer.contactHeading": "Contact",
		"footer.rights": "All rights reserved.",
		"footer.privacy": "Privacy Policy",
		"footer.cookies": "Cookies",
		"lang.switch": "Language",

		// home — meta
		"home.meta.title":
			"Kuijpers Research Field — Digital Twins for Poultry Production",
		"home.meta.desc":
			"Digital twin technology for smarter, healthier and more sustainable poultry production.",
		// home — hero
		"home.hero.titleA": "Two barns. One real. One digital. Both telling ",
		"home.hero.titleHl": "the truth",
		"home.hero.subtitle":
			"We test feed, housing, climate, and welfare interventions inside a fully instrumented research field — paired with a digital twin that captures every variable in real time. By the time an idea leaves us, it's already proven.",
		"home.hero.cta1": "See How It Works",
		"home.hero.cta2": "Start a Project",
		"home.hero.liveLabel": "Live:",
		"home.hero.liveText": "47 variables measured · Updated 12 seconds ago",
		// home — mission
		"home.mission.eyebrow": "Our Mission",
		"home.mission.title":
			"Turning data into decisions the whole chain can trust.",
		"home.mission.text":
			"We advance animal welfare, production efficiency, and environmental sustainability by transforming real-time data from the poultry chain into validated, actionable insight — insight that producers, suppliers, and policymakers can act on with confidence.",
		// home — services
		"home.services.eyebrow": "What We Offer",
		"home.services.title": "Our services",
		"home.services.learnMore": "Learn more",
		"home.services.seeAll": "See all services",
		// home — research
		"home.research.eyebrow": "Featured Research",
		"home.research.title": "Recent projects",
		"home.research.readMore": "Read more",
		// home — partners
		"home.partners.trusted": "Trusted by",
		// home — innovations
		"home.innov.eyebrow": "Latest Innovations",
		"home.innov.title": "The validated science",
		"home.innov.view": "View innovation",
		"home.innov.seeAll": "See all innovations",
		// home — cta
		"home.cta.title": "Interested in working with us?",
		"home.cta.text":
			"Whether you're a researcher, supplier or producer, we'd love to explore how digital twin technology can advance your work.",
		"home.cta.button": "Contact Us",
	},

	nl: {
		"nav.home": "Home",
		"nav.about": "Over ons",
		"nav.services": "Diensten",
		"nav.research": "Onderzoek",
		"nav.innovations": "Innovaties",
		"nav.contact": "Contact",
		"footer.tagline":
			"Wij verbeteren de pluimveeproductie met digital-twin-technologie en datagedreven onderzoek. We verbinden wetenschap en praktijk voor een duurzamere, efficiëntere toekomst.",
		"footer.navHeading": "Navigatie",
		"footer.contactHeading": "Contact",
		"footer.rights": "Alle rechten voorbehouden.",
		"footer.privacy": "Privacybeleid",
		"footer.cookies": "Cookies",
		"lang.switch": "Taal",

		"home.meta.title":
			"Kuijpers Research Field — Digital twins voor pluimveeproductie",
		"home.meta.desc":
			"Digital-twin-technologie voor slimmere, gezondere en duurzamere pluimveeproductie.",
		"home.hero.titleA": "Twee stallen. Eén echt. Eén digitaal. Beide vertellen ",
		"home.hero.titleHl": "de waarheid",
		"home.hero.subtitle":
			"We testen ingrepen op het gebied van voer, huisvesting, klimaat en welzijn in een volledig uitgerust onderzoeksveld — gekoppeld aan een digital twin die elke variabele in realtime vastlegt. Tegen de tijd dat een idee ons verlaat, is het al bewezen.",
		"home.hero.cta1": "Bekijk hoe het werkt",
		"home.hero.cta2": "Start een project",
		"home.hero.liveLabel": "Live:",
		"home.hero.liveText": "47 variabelen gemeten · 12 seconden geleden bijgewerkt",
		"home.mission.eyebrow": "Onze missie",
		"home.mission.title":
			"Data omzetten in beslissingen die de hele keten kan vertrouwen.",
		"home.mission.text":
			"We bevorderen dierenwelzijn, productie-efficiëntie en milieuduurzaamheid door realtime data uit de pluimveeketen om te zetten in gevalideerde, bruikbare inzichten — inzichten waar producenten, leveranciers en beleidsmakers met vertrouwen naar kunnen handelen.",
		"home.services.eyebrow": "Wat we bieden",
		"home.services.title": "Onze diensten",
		"home.services.learnMore": "Meer informatie",
		"home.services.seeAll": "Bekijk alle diensten",
		"home.research.eyebrow": "Uitgelicht onderzoek",
		"home.research.title": "Recente projecten",
		"home.research.readMore": "Lees meer",
		"home.partners.trusted": "Vertrouwd door",
		"home.innov.eyebrow": "Nieuwste innovaties",
		"home.innov.title": "De gevalideerde wetenschap",
		"home.innov.view": "Bekijk innovatie",
		"home.innov.seeAll": "Bekijk alle innovaties",
		"home.cta.title": "Interesse in samenwerking?",
		"home.cta.text":
			"Of u nu onderzoeker, leverancier of producent bent — we verkennen graag hoe digital-twin-technologie uw werk vooruit kan helpen.",
		"home.cta.button": "Neem contact op",
	},

	de: {
		"nav.home": "Home",
		"nav.about": "Über uns",
		"nav.services": "Leistungen",
		"nav.research": "Forschung",
		"nav.innovations": "Innovationen",
		"nav.contact": "Kontakt",
		"footer.tagline":
			"Wir bringen die Geflügelproduktion mit Digital-Twin-Technologie und datengetriebener Forschung voran. Wir verbinden Wissenschaft und Praxis für eine nachhaltigere, effizientere Zukunft.",
		"footer.navHeading": "Navigation",
		"footer.contactHeading": "Kontakt",
		"footer.rights": "Alle Rechte vorbehalten.",
		"footer.privacy": "Datenschutz",
		"footer.cookies": "Cookies",
		"lang.switch": "Sprache",

		"home.meta.title":
			"Kuijpers Research Field — Digitale Zwillinge für die Geflügelproduktion",
		"home.meta.desc":
			"Digital-Twin-Technologie für eine smartere, gesündere und nachhaltigere Geflügelproduktion.",
		"home.hero.titleA": "Zwei Ställe. Einer real. Einer digital. Beide sagen ",
		"home.hero.titleHl": "die Wahrheit",
		"home.hero.subtitle":
			"Wir testen Maßnahmen zu Futter, Haltung, Klima und Tierwohl in einem vollständig instrumentierten Forschungsfeld — gekoppelt mit einem digitalen Zwilling, der jede Variable in Echtzeit erfasst. Wenn eine Idee uns verlässt, ist sie bereits bewiesen.",
		"home.hero.cta1": "So funktioniert es",
		"home.hero.cta2": "Projekt starten",
		"home.hero.liveLabel": "Live:",
		"home.hero.liveText": "47 Variablen gemessen · vor 12 Sekunden aktualisiert",
		"home.mission.eyebrow": "Unsere Mission",
		"home.mission.title":
			"Daten in Entscheidungen verwandeln, denen die gesamte Kette vertrauen kann.",
		"home.mission.text":
			"Wir fördern Tierwohl, Produktionseffizienz und ökologische Nachhaltigkeit, indem wir Echtzeitdaten aus der Geflügelkette in validierte, umsetzbare Erkenntnisse verwandeln — Erkenntnisse, auf die Produzenten, Lieferanten und Entscheidungsträger mit Zuversicht bauen können.",
		"home.services.eyebrow": "Was wir bieten",
		"home.services.title": "Unsere Leistungen",
		"home.services.learnMore": "Mehr erfahren",
		"home.services.seeAll": "Alle Leistungen ansehen",
		"home.research.eyebrow": "Ausgewählte Forschung",
		"home.research.title": "Aktuelle Projekte",
		"home.research.readMore": "Mehr lesen",
		"home.partners.trusted": "Vertraut von",
		"home.innov.eyebrow": "Neueste Innovationen",
		"home.innov.title": "Die validierte Wissenschaft",
		"home.innov.view": "Innovation ansehen",
		"home.innov.seeAll": "Alle Innovationen ansehen",
		"home.cta.title": "Interesse an einer Zusammenarbeit?",
		"home.cta.text":
			"Ob Forscher, Lieferant oder Produzent — wir erkunden gern, wie die Digital-Twin-Technologie Ihre Arbeit voranbringen kann.",
		"home.cta.button": "Kontakt aufnehmen",
	},
} as const;
