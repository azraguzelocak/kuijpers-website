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

		// contact page
		"contact.meta.title": "Contact — Kuijpers Research Field",
		"contact.meta.desc":
			"Get in touch with Kuijpers Research Field. Send us a message and our team will get back to you about research, partnerships or digital twin technology.",
		"contact.hero.eyebrow": "Work With Us",
		"contact.hero.titleA": "Let's ",
		"contact.hero.titleHl": "prove",
		"contact.hero.titleB": " it together.",
		"contact.hero.subtitle":
			"Whether you're testing a new innovation, sourcing independent evidence, or shaping a research program, we'd like to hear what you're trying to find out. Tell us about it — and we'll tell you whether the research field can help.",
		"contact.hero.emailUs": "Email us",
		"contact.hero.visit": "Visit the research field",
		"contact.form.heading": "Send us a message",
		"contact.form.sub":
			"Fill out the form below and we'll get back to you as soon as we can.",
		"contact.form.reply": "We reply within two working days.",
		"contact.info.heading": "Contact information",
		"contact.info.sub": "Prefer to reach us directly? Here's how to find us.",
		"contact.info.email": "Email",
		"contact.info.phone": "Phone",
		"contact.info.address": "Address",
		"contact.team": "— The Kuijpers Research Field team",
		// contact form (React island)
		"form.name": "Name",
		"form.email": "Email",
		"form.company": "Company",
		"form.subject": "Subject",
		"form.message": "Message",
		"form.optional": "(optional)",
		"form.placeholder": "How can we help?",
		"form.send": "Send message",
		"form.sending": "Sending…",
		"form.err.name": "Please enter your name.",
		"form.err.email": "Please enter your email.",
		"form.err.emailValid": "Please enter a valid email address.",
		"form.err.subject": "Please enter a subject.",
		"form.err.message": "Please enter a message.",
		"form.success.title": "Thanks for reaching out!",
		"form.success.text":
			"Your message has been sent. We'll get back to you as soon as we can.",
		"form.success.again": "Send another message",
		"form.error.generic": "Something went wrong. Please try again.",
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

		"contact.meta.title": "Contact — Kuijpers Research Field",
		"contact.meta.desc":
			"Neem contact op met Kuijpers Research Field. Stuur ons een bericht en ons team neemt contact met u op over onderzoek, samenwerkingen of digital-twin-technologie.",
		"contact.hero.eyebrow": "Werk met ons samen",
		"contact.hero.titleA": "Laten we het samen ",
		"contact.hero.titleHl": "bewijzen",
		"contact.hero.titleB": ".",
		"contact.hero.subtitle":
			"Of u nu een nieuwe innovatie test, onafhankelijk bewijs zoekt of een onderzoeksprogramma opzet — we horen graag wat u wilt uitzoeken. Vertel het ons, en wij vertellen u of het onderzoeksveld kan helpen.",
		"contact.hero.emailUs": "Mail ons",
		"contact.hero.visit": "Bezoek het onderzoeksveld",
		"contact.form.heading": "Stuur ons een bericht",
		"contact.form.sub":
			"Vul het formulier hieronder in en we nemen zo snel mogelijk contact met u op.",
		"contact.form.reply": "We reageren binnen twee werkdagen.",
		"contact.info.heading": "Contactgegevens",
		"contact.info.sub": "Liever direct contact? Zo bereikt u ons.",
		"contact.info.email": "E-mail",
		"contact.info.phone": "Telefoon",
		"contact.info.address": "Adres",
		"contact.team": "— Het team van Kuijpers Research Field",
		"form.name": "Naam",
		"form.email": "E-mail",
		"form.company": "Bedrijf",
		"form.subject": "Onderwerp",
		"form.message": "Bericht",
		"form.optional": "(optioneel)",
		"form.placeholder": "Waarmee kunnen we u helpen?",
		"form.send": "Bericht versturen",
		"form.sending": "Versturen…",
		"form.err.name": "Voer uw naam in.",
		"form.err.email": "Voer uw e-mailadres in.",
		"form.err.emailValid": "Voer een geldig e-mailadres in.",
		"form.err.subject": "Voer een onderwerp in.",
		"form.err.message": "Voer een bericht in.",
		"form.success.title": "Bedankt voor uw bericht!",
		"form.success.text":
			"Uw bericht is verzonden. We nemen zo snel mogelijk contact met u op.",
		"form.success.again": "Nog een bericht versturen",
		"form.error.generic": "Er is iets misgegaan. Probeer het opnieuw.",
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

		"contact.meta.title": "Kontakt — Kuijpers Research Field",
		"contact.meta.desc":
			"Nehmen Sie Kontakt mit Kuijpers Research Field auf. Schreiben Sie uns eine Nachricht und unser Team meldet sich zu Forschung, Partnerschaften oder Digital-Twin-Technologie bei Ihnen.",
		"contact.hero.eyebrow": "Arbeiten Sie mit uns",
		"contact.hero.titleA": "Lassen Sie es uns gemeinsam ",
		"contact.hero.titleHl": "beweisen",
		"contact.hero.titleB": ".",
		"contact.hero.subtitle":
			"Ob Sie eine neue Innovation testen, unabhängige Belege suchen oder ein Forschungsprogramm gestalten — wir hören gern, was Sie herausfinden möchten. Erzählen Sie es uns, und wir sagen Ihnen, ob das Forschungsfeld helfen kann.",
		"contact.hero.emailUs": "Schreiben Sie uns",
		"contact.hero.visit": "Besuchen Sie das Forschungsfeld",
		"contact.form.heading": "Schreiben Sie uns eine Nachricht",
		"contact.form.sub":
			"Füllen Sie das Formular unten aus und wir melden uns so schnell wie möglich bei Ihnen.",
		"contact.form.reply": "Wir antworten innerhalb von zwei Werktagen.",
		"contact.info.heading": "Kontaktinformationen",
		"contact.info.sub": "Lieber direkt Kontakt aufnehmen? So erreichen Sie uns.",
		"contact.info.email": "E-Mail",
		"contact.info.phone": "Telefon",
		"contact.info.address": "Adresse",
		"contact.team": "— Das Team von Kuijpers Research Field",
		"form.name": "Name",
		"form.email": "E-Mail",
		"form.company": "Unternehmen",
		"form.subject": "Betreff",
		"form.message": "Nachricht",
		"form.optional": "(optional)",
		"form.placeholder": "Wie können wir helfen?",
		"form.send": "Nachricht senden",
		"form.sending": "Senden…",
		"form.err.name": "Bitte geben Sie Ihren Namen ein.",
		"form.err.email": "Bitte geben Sie Ihre E-Mail-Adresse ein.",
		"form.err.emailValid": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
		"form.err.subject": "Bitte geben Sie einen Betreff ein.",
		"form.err.message": "Bitte geben Sie eine Nachricht ein.",
		"form.success.title": "Danke für Ihre Nachricht!",
		"form.success.text":
			"Ihre Nachricht wurde gesendet. Wir melden uns so schnell wie möglich bei Ihnen.",
		"form.success.again": "Weitere Nachricht senden",
		"form.error.generic": "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
	},
} as const;
