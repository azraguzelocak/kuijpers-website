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

		// about page
		"about.meta.title": "About — Kuijpers Research Field",
		"about.meta.desc":
			"Learn about Kuijpers Research Field: our mission, vision, values, story and the team behind digital twin technology for poultry production.",
		"about.pillar.mission.title": "Our Mission",
		"about.pillar.mission.tagline": "Turning data into decisions the whole chain can trust.",
		"about.pillar.mission.body":
			"We advance animal welfare, production efficiency, and environmental sustainability by transforming real-time data from the poultry chain into validated, actionable insight — insight that producers, suppliers, and policymakers can act on with confidence.",
		"about.pillar.vision.title": "Our Vision",
		"about.pillar.vision.tagline": "Every intervention proven before it reaches the barn.",
		"about.pillar.vision.body":
			"A food system where decisions are no longer made on assumption. Where every new feed, technology, or practice is tested in a controlled, data-rich environment first — making innovation faster, safer, and grounded in evidence the entire sector can rely on.",
		"about.pillar.values.title": "Our Values",
		"about.pillar.values.tagline": "Rigour. Transparency. Partnership.",
		"about.pillar.values.body":
			"We hold ourselves to the standards of independent science: we publish what we learn, validate our findings openly, and protect the integrity of our methods. We work shoulder to shoulder with researchers, suppliers, and producers — because real progress in poultry production is built on trust, not promises.",
		"about.hero.hl": "Science moves carefully. Industry moves fast.",
		"about.hero.p1":
			"The space between them is where most progress in poultry production gets lost.",
		"about.hero.p2":
			"Kuijpers Research Field exists in that space. We build digital twins of the broiler value chain — virtual replicas grounded in real-time data — that give researchers, suppliers, and producers a shared environment where evidence is generated quickly, rigorously, and at commercial scale.",
		"about.story.eyebrow": "Our Story",
		"about.story.title": "From the family farm to a research field",
		"about.story.p1":
			"Kuijpers Research Field grew out of generations of hands-on poultry expertise. Working day to day with producers, we kept running into the same question: how do you know whether a new feed, climate setting, or housing approach will actually work — before committing an entire flock to it?",
		"about.story.p2":
			"Trial and error in a live barn is slow, costly, and difficult to measure. So we built a different kind of barn.",
		"about.story.p3":
			"Today, our facility is a fully instrumented, sensor-rich research environment paired with a digital twin that mirrors it in real time. We partner with universities, suppliers, and producers to validate interventions independently, publish what we learn, and help the sector make decisions that improve welfare, reduce environmental impact, and strengthen the entire broiler value chain.",
		"about.story.fact1": "Founded by the Kuijpers family",
		"about.story.fact2": "Based in the Netherlands",
		"about.story.fact3": "Independent research partner",
		"about.team.eyebrow": "Our People",
		"about.team.title": "Meet the team",
		"about.team.empty": "Team profiles are coming soon — check back shortly.",
		"about.partners.eyebrow": "Our Partners",
		"about.partners.title": "Stronger together",
		"about.partners.body":
			"No single organisation can move poultry production forward alone. We work hand in hand with breeders, feed and equipment suppliers, animal-health companies, universities, and public partners — combining their expertise with our research field and digital twin so every innovation is tested and ready for the real world.",
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

		"about.meta.title": "Over ons — Kuijpers Research Field",
		"about.meta.desc":
			"Maak kennis met Kuijpers Research Field: onze missie, visie, waarden, verhaal en het team achter digital-twin-technologie voor de pluimveehouderij.",
		"about.pillar.mission.title": "Onze missie",
		"about.pillar.mission.tagline": "Data omzetten in beslissingen die de hele keten kan vertrouwen.",
		"about.pillar.mission.body":
			"We bevorderen dierenwelzijn, productie-efficiëntie en milieuduurzaamheid door realtime data uit de pluimveeketen om te zetten in gevalideerde, bruikbare inzichten — inzichten waar producenten, leveranciers en beleidsmakers met vertrouwen naar kunnen handelen.",
		"about.pillar.vision.title": "Onze visie",
		"about.pillar.vision.tagline": "Elke ingreep bewezen voordat hij de stal bereikt.",
		"about.pillar.vision.body":
			"Een voedselsysteem waarin beslissingen niet langer op aannames worden gebaseerd. Waarin elk nieuw voer, elke technologie of werkwijze eerst wordt getest in een gecontroleerde, datarijke omgeving — waardoor innovatie sneller, veiliger en onderbouwd is met bewijs waarop de hele sector kan bouwen.",
		"about.pillar.values.title": "Onze waarden",
		"about.pillar.values.tagline": "Nauwkeurigheid. Transparantie. Partnerschap.",
		"about.pillar.values.body":
			"We houden ons aan de normen van onafhankelijke wetenschap: we publiceren wat we leren, valideren onze bevindingen openlijk en waarborgen de integriteit van onze methoden. We werken schouder aan schouder met onderzoekers, leveranciers en producenten — want echte vooruitgang in de pluimveehouderij is gebouwd op vertrouwen, niet op beloften.",
		"about.hero.hl": "Wetenschap gaat zorgvuldig. De industrie gaat snel.",
		"about.hero.p1":
			"In de ruimte daartussen gaat de meeste vooruitgang in de pluimveehouderij verloren.",
		"about.hero.p2":
			"Kuijpers Research Field bestaat in die ruimte. We bouwen digital twins van de vleeskuikenketen — virtuele replica's op basis van realtime data — die onderzoekers, leveranciers en producenten een gedeelde omgeving bieden waar bewijs snel, nauwkeurig en op commerciële schaal wordt gegenereerd.",
		"about.story.eyebrow": "Ons verhaal",
		"about.story.title": "Van het familiebedrijf naar een onderzoeksveld",
		"about.story.p1":
			"Kuijpers Research Field is voortgekomen uit generaties praktische pluimvee-expertise. In het dagelijkse werk met producenten liepen we steeds tegen dezelfde vraag aan: hoe weet je of een nieuw voer, klimaatinstelling of huisvestingsaanpak echt werkt — voordat je er een hele koppel aan verbindt?",
		"about.story.p2":
			"Trial-and-error in een echte stal is traag, kostbaar en moeilijk te meten. Daarom bouwden we een ander soort stal.",
		"about.story.p3":
			"Vandaag is onze faciliteit een volledig uitgeruste, sensorrijke onderzoeksomgeving, gekoppeld aan een digital twin die deze in realtime weerspiegelt. We werken samen met universiteiten, leveranciers en producenten om ingrepen onafhankelijk te valideren, publiceren wat we leren en helpen de sector beslissingen te nemen die het welzijn verbeteren, de milieu-impact verminderen en de hele vleeskuikenketen versterken.",
		"about.story.fact1": "Opgericht door de familie Kuijpers",
		"about.story.fact2": "Gevestigd in Nederland",
		"about.story.fact3": "Onafhankelijke onderzoekspartner",
		"about.team.eyebrow": "Onze mensen",
		"about.team.title": "Maak kennis met het team",
		"about.team.empty": "Teamprofielen volgen binnenkort — kom snel terug.",
		"about.partners.eyebrow": "Onze partners",
		"about.partners.title": "Samen sterker",
		"about.partners.body":
			"Geen enkele organisatie kan de pluimveehouderij alleen vooruithelpen. We werken hand in hand met fokkerijen, voer- en apparatuurleveranciers, diergezondheidsbedrijven, universiteiten en publieke partners — en combineren hun expertise met ons onderzoeksveld en digital twin, zodat elke innovatie getest en klaar is voor de praktijk.",
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

		"about.meta.title": "Über uns — Kuijpers Research Field",
		"about.meta.desc":
			"Lernen Sie Kuijpers Research Field kennen: unsere Mission, Vision, Werte, Geschichte und das Team hinter der Digital-Twin-Technologie für die Geflügelproduktion.",
		"about.pillar.mission.title": "Unsere Mission",
		"about.pillar.mission.tagline": "Daten in Entscheidungen verwandeln, denen die gesamte Kette vertrauen kann.",
		"about.pillar.mission.body":
			"Wir fördern Tierwohl, Produktionseffizienz und ökologische Nachhaltigkeit, indem wir Echtzeitdaten aus der Geflügelkette in validierte, umsetzbare Erkenntnisse verwandeln — Erkenntnisse, auf die Produzenten, Lieferanten und Entscheidungsträger mit Zuversicht bauen können.",
		"about.pillar.vision.title": "Unsere Vision",
		"about.pillar.vision.tagline": "Jede Maßnahme bewiesen, bevor sie den Stall erreicht.",
		"about.pillar.vision.body":
			"Ein Lebensmittelsystem, in dem Entscheidungen nicht länger auf Annahmen beruhen. In dem jedes neue Futter, jede Technologie und jede Praxis zuerst in einer kontrollierten, datenreichen Umgebung getestet wird — damit Innovation schneller, sicherer und auf Belege gestützt ist, auf die sich die gesamte Branche verlassen kann.",
		"about.pillar.values.title": "Unsere Werte",
		"about.pillar.values.tagline": "Sorgfalt. Transparenz. Partnerschaft.",
		"about.pillar.values.body":
			"Wir halten uns an die Standards unabhängiger Wissenschaft: Wir veröffentlichen, was wir lernen, validieren unsere Ergebnisse offen und wahren die Integrität unserer Methoden. Wir arbeiten Schulter an Schulter mit Forschern, Lieferanten und Produzenten — denn echter Fortschritt in der Geflügelproduktion beruht auf Vertrauen, nicht auf Versprechen.",
		"about.hero.hl": "Wissenschaft geht sorgfältig vor. Die Industrie geht schnell.",
		"about.hero.p1":
			"Im Raum dazwischen geht der meiste Fortschritt in der Geflügelproduktion verloren.",
		"about.hero.p2":
			"Kuijpers Research Field existiert in diesem Raum. Wir bauen digitale Zwillinge der Broiler-Wertschöpfungskette — virtuelle Abbilder auf Basis von Echtzeitdaten — die Forschern, Lieferanten und Produzenten eine gemeinsame Umgebung bieten, in der Belege schnell, rigoros und in kommerziellem Maßstab entstehen.",
		"about.story.eyebrow": "Unsere Geschichte",
		"about.story.title": "Vom Familienbetrieb zum Forschungsfeld",
		"about.story.p1":
			"Kuijpers Research Field ist aus Generationen praktischer Geflügelexpertise entstanden. In der täglichen Arbeit mit Produzenten stießen wir immer wieder auf dieselbe Frage: Woher weiß man, ob ein neues Futter, eine Klimaeinstellung oder ein Haltungskonzept wirklich funktioniert — bevor man eine ganze Herde darauf festlegt?",
		"about.story.p2":
			"Versuch und Irrtum in einem echten Stall ist langsam, teuer und schwer messbar. Also bauten wir einen anderen Stall.",
		"about.story.p3":
			"Heute ist unsere Anlage eine vollständig instrumentierte, sensorreiche Forschungsumgebung, gekoppelt mit einem digitalen Zwilling, der sie in Echtzeit abbildet. Wir arbeiten mit Universitäten, Lieferanten und Produzenten zusammen, um Maßnahmen unabhängig zu validieren, veröffentlichen, was wir lernen, und helfen der Branche, Entscheidungen zu treffen, die das Tierwohl verbessern, die Umweltbelastung verringern und die gesamte Broiler-Wertschöpfungskette stärken.",
		"about.story.fact1": "Gegründet von der Familie Kuijpers",
		"about.story.fact2": "Ansässig in den Niederlanden",
		"about.story.fact3": "Unabhängiger Forschungspartner",
		"about.team.eyebrow": "Unsere Menschen",
		"about.team.title": "Lernen Sie das Team kennen",
		"about.team.empty": "Teamprofile folgen in Kürze — schauen Sie bald wieder vorbei.",
		"about.partners.eyebrow": "Unsere Partner",
		"about.partners.title": "Gemeinsam stärker",
		"about.partners.body":
			"Keine einzelne Organisation kann die Geflügelproduktion allein voranbringen. Wir arbeiten Hand in Hand mit Züchtern, Futter- und Ausrüstungslieferanten, Tiergesundheitsunternehmen, Universitäten und öffentlichen Partnern — und verbinden ihr Fachwissen mit unserem Forschungsfeld und digitalen Zwilling, sodass jede Innovation getestet und praxisreif ist.",
	},
} as const;
