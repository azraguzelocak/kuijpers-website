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

		// services page
		"svc.meta.title": "Our Services — Kuijpers Research Field",
		"svc.meta.desc":
			"Digital twin services for poultry production — from trial design and real-time monitoring to independent validation — and why teams choose Kuijpers Research Field.",
		"svc.audience.default":
			"Researchers, suppliers and producers working to improve poultry production.",
		"svc.audience.suppliers": "Suppliers and innovation partners",
		"svc.audience.processors": "Processors and purchasers",
		"svc.audience.academia": "Researchers and academia",
		"svc.step.discovery.title": "Discovery",
		"svc.step.discovery.body":
			"We start by understanding your question, constraints and success criteria — mapping what you want to learn or validate before any sensors are placed.",
		"svc.step.design.title": "Design",
		"svc.step.design.body":
			"We design the trial and its digital twin together: housing, instrumentation, data pipelines and the analysis plan that will produce defensible results.",
		"svc.step.impl.title": "Implementation",
		"svc.step.impl.body":
			"We run the intervention in our instrumented research field, capturing real-time data while the digital twin mirrors conditions throughout the cycle.",
		"svc.step.monitor.title": "Monitoring",
		"svc.step.monitor.body":
			"We continuously monitor, validate and report — turning raw signals into clear, independently verifiable insight you can act on with confidence.",
		"svc.stat.1": "Lower feed conversion ratio.",
		"svc.stat.2": "Continuous real-time monitoring.",
		"svc.stat.3": "Independently validated results.",
		"svc.stat.4": "Faster intervention testing.",
		"svc.cmp.evidence.aspect": "Evidence",
		"svc.cmp.evidence.trad": "Opinion and benchmarks from elsewhere",
		"svc.cmp.evidence.kui": "Data measured in a controlled research field",
		"svc.cmp.validation.aspect": "Validation",
		"svc.cmp.validation.trad": "Recommendations rarely tested before rollout",
		"svc.cmp.validation.kui": "Interventions validated in a digital twin first",
		"svc.cmp.risk.aspect": "Risk",
		"svc.cmp.risk.trad": "Trial and error in your live flock",
		"svc.cmp.risk.kui": "Trial in our barn — your flock stays protected",
		"svc.cmp.monitoring.aspect": "Monitoring",
		"svc.cmp.monitoring.trad": "Periodic site visits and snapshots",
		"svc.cmp.monitoring.kui": "Continuous, real-time sensor data 24/7",
		"svc.cmp.transparency.aspect": "Transparency",
		"svc.cmp.transparency.trad": "Black-box conclusions",
		"svc.cmp.transparency.kui": "Open methods and independently verifiable results",
		"svc.cmp.speed.aspect": "Speed",
		"svc.cmp.speed.trad": "Months to see results in the field",
		"svc.cmp.speed.kui": "Faster cycles through parallel digital testing",
		"svc.hero.title": "Our Services",
		"svc.hero.subA":
			"From trial design to real-time monitoring, we help you test and validate interventions in a controlled, data-rich environment — pairing a fully instrumented research field with a ",
		"svc.hero.subHl": "digital twin",
		"svc.hero.subB": " that mirrors it live.",
		"svc.intro.eyebrow": "What We Do",
		"svc.intro.titleA": "Built for ",
		"svc.intro.titleHl": "the questions",
		"svc.intro.titleB": " you can't ask a live barn.",
		"svc.intro.subtitle":
			"Whether you're validating a feed innovation, optimizing a supply chain, or designing a multi-year research program, we run the full process inside the research field — from first hypothesis to publication-grade proof.",
		"svc.cards.who": "Who it's for",
		"svc.cards.empty":
			"Service details are coming soon — get in touch and we'll walk you through what we offer.",
		"svc.process.eyebrow": "How We Work",
		"svc.process.title": "From question to validated insight",
		"svc.why.eyebrow": "Why Kuijpers Research Field",
		"svc.why.title": "Evidence you can act on",
		"svc.diff.eyebrow": "The Difference",
		"svc.diff.title": "Traditional consulting vs. the Kuijpers approach",
		"svc.diff.trad": "Traditional consulting",
		"svc.diff.ourApproach": "Our approach",
		"svc.diff.kuijpers": "The Kuijpers approach",
		"svc.ref.eyebrow": "Referrals",
		"svc.ref.title": "What our partners say",
		"svc.ref.quote1":
			"Working with Kuijpers Kip Research Field helped us to gain the necessary insights to move to emission-free poultry production.",
		"svc.ref.quote2": "Vision and implementation power makes all the difference.",
		"svc.cta.title": "Discuss your project",
		"svc.cta.text":
			"Tell us what you want to learn or validate, and we'll show you how digital twin technology can get you there.",
		"svc.cta.button": "Get in Touch",

		// research index page
		"res.meta.title": "Research Projects — Kuijpers Research Field",
		"res.meta.desc":
			"Explore our research projects in poultry production — from emission monitoring to efficiency measurement — across ongoing, completed and planned work.",
		"res.hero.title": "Research Projects",
		"res.hero.bodyA":
			"From real-time emission monitoring to efficiency measurement, our research turns data from a controlled, sensor-rich environment into ",
		"res.hero.bodyHl": "validated insight",
		"res.hero.bodyB":
			" the whole value chain can trust. Browse our ongoing, completed and planned projects below.",
		"res.intro.eyebrow": "Our Work",
		"res.intro.titleA": "The projects behind the ",
		"res.intro.titleHl": "proof",
		"res.intro.titleB": ".",
		"res.intro.body":
			"Every claim we make about poultry production is backed by a live research project — ongoing, completed, or in design. Browse the work shaping welfare standards, emission targets, and efficiency benchmarks across the sector.",
		"res.status.ongoing": "Ongoing",
		"res.status.completed": "Completed",
		"res.status.planned": "Planned",
		"res.stat.inDesign": "In Design",
		"res.filter.all": "All",
		"res.card.teamOne": "team member",
		"res.card.teamMany": "team members",
		"res.card.view": "View project",
		"res.filter.empty": "No projects match this filter yet — check back soon.",
		"res.empty": "Research projects are coming soon — check back shortly.",
		"res.cta.title": "Have a research question?",
		"res.cta.body":
			"Tell us what you want to learn or validate, and we'll show you how our research field and digital twin can get you there.",
		"res.cta.button": "Get in Touch",
		"res.detail.crumb": "Research",
		"res.detail.overviewSoon": "An overview for this project is coming soon.",
		"res.detail.funding": "Funding:",
		"res.detail.related": "Related projects",
		"res.detail.viewAll": "View all",

		// innovations page
		"inn.meta.title": "Innovations — Kuijpers Research Field",
		"inn.meta.desc": "From research to real-world impact — 21 interconnected innovations across emissions, production, health and safety, and the measurable impact of each.",
		"inn.hero.titleA": "From research to ",
		"inn.hero.titleHl": "real-world impact",
		"inn.hero.subtitle": "The breakthroughs coming out of the Kuijpers Research Field — and the connected system that turns careful science into measurable results on the farm.",
		"inn.explore.eyebrow": "Explore the site",
		"inn.explore.title": "From outside to inside",
		"inn.explore.subtitle": "The model turns on its own — switch to the inside to see the barns, the birds and the egg rows, and how far the farm has been taken.",
		"inn.section.eyebrow": "Interconnected",
		"inn.section.title": "One vision, not a list",
		"inn.section.subtitle": "Our innovations don't work in isolation — each one supports and strengthens the others. Rotate the network to see how they link up, then open any one for its full story and its real impact on CO₂, ammonia, energy, water and nutrients.",
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

		"svc.meta.title": "Onze diensten — Kuijpers Research Field",
		"svc.meta.desc":
			"Digital-twin-diensten voor de pluimveehouderij — van proefopzet en realtime monitoring tot onafhankelijke validatie — en waarom teams voor Kuijpers Research Field kiezen.",
		"svc.audience.default":
			"Onderzoekers, leveranciers en producenten die de pluimveeproductie willen verbeteren.",
		"svc.audience.suppliers": "Leveranciers en innovatiepartners",
		"svc.audience.processors": "Verwerkers en inkopers",
		"svc.audience.academia": "Onderzoekers en wetenschap",
		"svc.step.discovery.title": "Verkenning",
		"svc.step.discovery.body":
			"We beginnen met het begrijpen van uw vraag, randvoorwaarden en succescriteria — we brengen in kaart wat u wilt leren of valideren voordat er sensoren worden geplaatst.",
		"svc.step.design.title": "Ontwerp",
		"svc.step.design.body":
			"We ontwerpen de proef en de bijbehorende digital twin samen: huisvesting, instrumentatie, datastromen en het analyseplan dat verdedigbare resultaten oplevert.",
		"svc.step.impl.title": "Uitvoering",
		"svc.step.impl.body":
			"We voeren de ingreep uit in ons uitgeruste onderzoeksveld en leggen realtime data vast, terwijl de digital twin de omstandigheden gedurende de hele cyclus weerspiegelt.",
		"svc.step.monitor.title": "Monitoring",
		"svc.step.monitor.body":
			"We monitoren, valideren en rapporteren continu — en zetten ruwe signalen om in heldere, onafhankelijk verifieerbare inzichten waar u met vertrouwen naar kunt handelen.",
		"svc.stat.1": "Lagere voederconversie.",
		"svc.stat.2": "Continue realtime monitoring.",
		"svc.stat.3": "Onafhankelijk gevalideerde resultaten.",
		"svc.stat.4": "Sneller ingrepen testen.",
		"svc.cmp.evidence.aspect": "Bewijs",
		"svc.cmp.evidence.trad": "Meningen en benchmarks van elders",
		"svc.cmp.evidence.kui": "Data gemeten in een gecontroleerd onderzoeksveld",
		"svc.cmp.validation.aspect": "Validatie",
		"svc.cmp.validation.trad": "Aanbevelingen die zelden worden getest vóór uitrol",
		"svc.cmp.validation.kui": "Ingrepen eerst gevalideerd in een digital twin",
		"svc.cmp.risk.aspect": "Risico",
		"svc.cmp.risk.trad": "Trial-and-error in uw eigen koppel",
		"svc.cmp.risk.kui": "Proef in onze stal — uw koppel blijft beschermd",
		"svc.cmp.monitoring.aspect": "Monitoring",
		"svc.cmp.monitoring.trad": "Periodieke bezoeken en momentopnames",
		"svc.cmp.monitoring.kui": "Continue realtime sensordata, 24/7",
		"svc.cmp.transparency.aspect": "Transparantie",
		"svc.cmp.transparency.trad": "Blackbox-conclusies",
		"svc.cmp.transparency.kui": "Open methoden en onafhankelijk verifieerbare resultaten",
		"svc.cmp.speed.aspect": "Snelheid",
		"svc.cmp.speed.trad": "Maanden wachten op resultaten in het veld",
		"svc.cmp.speed.kui": "Snellere cycli door parallel digitaal testen",
		"svc.hero.title": "Onze diensten",
		"svc.hero.subA":
			"Van proefopzet tot realtime monitoring: we helpen u ingrepen te testen en valideren in een gecontroleerde, datarijke omgeving — waarbij we een volledig uitgerust onderzoeksveld koppelen aan een ",
		"svc.hero.subHl": "digital twin",
		"svc.hero.subB": " die het live weerspiegelt.",
		"svc.intro.eyebrow": "Wat we doen",
		"svc.intro.titleA": "Gebouwd voor ",
		"svc.intro.titleHl": "de vragen",
		"svc.intro.titleB": " die u niet aan een echte stal kunt stellen.",
		"svc.intro.subtitle":
			"Of u nu een voerinnovatie valideert, een toeleveringsketen optimaliseert of een meerjarig onderzoeksprogramma opzet — we doorlopen het hele proces binnen het onderzoeksveld, van eerste hypothese tot publicatiewaardig bewijs.",
		"svc.cards.who": "Voor wie",
		"svc.cards.empty":
			"Details over de diensten volgen binnenkort — neem contact op en we lichten graag toe wat we bieden.",
		"svc.process.eyebrow": "Hoe we werken",
		"svc.process.title": "Van vraag naar gevalideerd inzicht",
		"svc.why.eyebrow": "Waarom Kuijpers Research Field",
		"svc.why.title": "Bewijs waar u naar kunt handelen",
		"svc.diff.eyebrow": "Het verschil",
		"svc.diff.title": "Traditioneel advies vs. de Kuijpers-aanpak",
		"svc.diff.trad": "Traditioneel advies",
		"svc.diff.ourApproach": "Onze aanpak",
		"svc.diff.kuijpers": "De Kuijpers-aanpak",
		"svc.ref.eyebrow": "Referenties",
		"svc.ref.title": "Wat onze partners zeggen",
		"svc.ref.quote1":
			"De samenwerking met Kuijpers Kip Research Field hielp ons de nodige inzichten te verkrijgen om over te stappen op emissievrije pluimveeproductie.",
		"svc.ref.quote2": "Visie en uitvoeringskracht maken het verschil.",
		"svc.cta.title": "Bespreek uw project",
		"svc.cta.text":
			"Vertel ons wat u wilt leren of valideren, en we laten u zien hoe digital-twin-technologie u daar kan brengen.",
		"svc.cta.button": "Neem contact op",

		"res.meta.title": "Onderzoeksprojecten — Kuijpers Research Field",
		"res.meta.desc":
			"Ontdek onze onderzoeksprojecten in de pluimveehouderij — van emissiemonitoring tot efficiëntiemeting — voor lopend, afgerond en gepland werk.",
		"res.hero.title": "Onderzoeksprojecten",
		"res.hero.bodyA":
			"Van realtime emissiemonitoring tot efficiëntiemeting: ons onderzoek zet data uit een gecontroleerde, sensorrijke omgeving om in ",
		"res.hero.bodyHl": "gevalideerd inzicht",
		"res.hero.bodyB":
			" dat de hele keten kan vertrouwen. Bekijk hieronder onze lopende, afgeronde en geplande projecten.",
		"res.intro.eyebrow": "Ons werk",
		"res.intro.titleA": "De projecten achter het ",
		"res.intro.titleHl": "bewijs",
		"res.intro.titleB": ".",
		"res.intro.body":
			"Elke claim die we over pluimveeproductie maken, wordt onderbouwd door een lopend onderzoeksproject — lopend, afgerond of in ontwerp. Bekijk het werk dat welzijnsnormen, emissiedoelen en efficiëntiebenchmarks in de sector vormgeeft.",
		"res.status.ongoing": "Lopend",
		"res.status.completed": "Afgerond",
		"res.status.planned": "Gepland",
		"res.stat.inDesign": "In ontwerp",
		"res.filter.all": "Alle",
		"res.card.teamOne": "teamlid",
		"res.card.teamMany": "teamleden",
		"res.card.view": "Bekijk project",
		"res.filter.empty": "Geen projecten voldoen aan dit filter — kom binnenkort terug.",
		"res.empty": "Onderzoeksprojecten volgen binnenkort — kom snel terug.",
		"res.cta.title": "Heeft u een onderzoeksvraag?",
		"res.cta.body":
			"Vertel ons wat u wilt leren of valideren, en we laten u zien hoe ons onderzoeksveld en digital twin u daar kunnen brengen.",
		"res.cta.button": "Neem contact op",
		"res.detail.crumb": "Onderzoek",
		"res.detail.overviewSoon": "Een overzicht van dit project volgt binnenkort.",
		"res.detail.funding": "Financiering:",
		"res.detail.related": "Gerelateerde projecten",
		"res.detail.viewAll": "Bekijk alle",

		"inn.meta.title": "Innovaties — Kuijpers Research Field",
		"inn.meta.desc": "Van onderzoek naar impact in de praktijk — 21 met elkaar verbonden innovaties op het gebied van emissies, productie, gezondheid en veiligheid, en de meetbare impact van elk.",
		"inn.hero.titleA": "Van onderzoek naar ",
		"inn.hero.titleHl": "impact in de praktijk",
		"inn.hero.subtitle": "De doorbraken uit het Kuijpers Research Field — en het verbonden systeem dat zorgvuldige wetenschap omzet in meetbare resultaten op het bedrijf.",
		"inn.explore.eyebrow": "Ontdek de locatie",
		"inn.explore.title": "Van buiten naar binnen",
		"inn.explore.subtitle": "Het model draait vanzelf — schakel naar binnen om de stallen, de dieren en de eierrijen te zien, en hoe ver het bedrijf is doorontwikkeld.",
		"inn.section.eyebrow": "Verbonden",
		"inn.section.title": "Eén visie, geen lijst",
		"inn.section.subtitle": "Onze innovaties werken niet los van elkaar — elke innovatie ondersteunt en versterkt de andere. Draai het netwerk om te zien hoe ze samenhangen, en open er een voor het volledige verhaal en de echte impact op CO₂, ammoniak, energie, water en nutriënten.",
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

		"svc.meta.title": "Unsere Leistungen — Kuijpers Research Field",
		"svc.meta.desc":
			"Digital-Twin-Leistungen für die Geflügelproduktion — von der Versuchsplanung über Echtzeit-Monitoring bis zur unabhängigen Validierung — und warum Teams sich für Kuijpers Research Field entscheiden.",
		"svc.audience.default":
			"Forscher, Lieferanten und Produzenten, die die Geflügelproduktion verbessern wollen.",
		"svc.audience.suppliers": "Lieferanten und Innovationspartner",
		"svc.audience.processors": "Verarbeiter und Einkäufer",
		"svc.audience.academia": "Forscher und Wissenschaft",
		"svc.step.discovery.title": "Erkundung",
		"svc.step.discovery.body":
			"Wir beginnen damit, Ihre Frage, Rahmenbedingungen und Erfolgskriterien zu verstehen — und halten fest, was Sie lernen oder validieren möchten, bevor Sensoren platziert werden.",
		"svc.step.design.title": "Konzeption",
		"svc.step.design.body":
			"Wir gestalten den Versuch und seinen digitalen Zwilling gemeinsam: Haltung, Instrumentierung, Datenpipelines und den Analyseplan, der belastbare Ergebnisse liefert.",
		"svc.step.impl.title": "Umsetzung",
		"svc.step.impl.body":
			"Wir führen die Maßnahme in unserem instrumentierten Forschungsfeld durch und erfassen Echtzeitdaten, während der digitale Zwilling die Bedingungen über den gesamten Zyklus abbildet.",
		"svc.step.monitor.title": "Monitoring",
		"svc.step.monitor.body":
			"Wir überwachen, validieren und berichten kontinuierlich — und verwandeln Rohsignale in klare, unabhängig überprüfbare Erkenntnisse, auf die Sie mit Zuversicht bauen können.",
		"svc.stat.1": "Niedrigere Futterverwertung.",
		"svc.stat.2": "Kontinuierliches Echtzeit-Monitoring.",
		"svc.stat.3": "Unabhängig validierte Ergebnisse.",
		"svc.stat.4": "Schnelleres Testen von Maßnahmen.",
		"svc.cmp.evidence.aspect": "Belege",
		"svc.cmp.evidence.trad": "Meinungen und Benchmarks von anderswo",
		"svc.cmp.evidence.kui": "In einem kontrollierten Forschungsfeld gemessene Daten",
		"svc.cmp.validation.aspect": "Validierung",
		"svc.cmp.validation.trad": "Empfehlungen, die vor der Einführung selten getestet werden",
		"svc.cmp.validation.kui": "Maßnahmen zuerst in einem digitalen Zwilling validiert",
		"svc.cmp.risk.aspect": "Risiko",
		"svc.cmp.risk.trad": "Versuch und Irrtum an Ihrer eigenen Herde",
		"svc.cmp.risk.kui": "Versuch in unserem Stall — Ihre Herde bleibt geschützt",
		"svc.cmp.monitoring.aspect": "Monitoring",
		"svc.cmp.monitoring.trad": "Periodische Besuche und Momentaufnahmen",
		"svc.cmp.monitoring.kui": "Kontinuierliche Echtzeit-Sensordaten, rund um die Uhr",
		"svc.cmp.transparency.aspect": "Transparenz",
		"svc.cmp.transparency.trad": "Blackbox-Schlussfolgerungen",
		"svc.cmp.transparency.kui": "Offene Methoden und unabhängig überprüfbare Ergebnisse",
		"svc.cmp.speed.aspect": "Geschwindigkeit",
		"svc.cmp.speed.trad": "Monate bis zu Ergebnissen im Feld",
		"svc.cmp.speed.kui": "Schnellere Zyklen durch paralleles digitales Testen",
		"svc.hero.title": "Unsere Leistungen",
		"svc.hero.subA":
			"Von der Versuchsplanung bis zum Echtzeit-Monitoring helfen wir Ihnen, Maßnahmen in einer kontrollierten, datenreichen Umgebung zu testen und zu validieren — und koppeln ein vollständig instrumentiertes Forschungsfeld mit einem ",
		"svc.hero.subHl": "digitalen Zwilling",
		"svc.hero.subB": ", der es live abbildet.",
		"svc.intro.eyebrow": "Was wir tun",
		"svc.intro.titleA": "Gebaut für ",
		"svc.intro.titleHl": "die Fragen",
		"svc.intro.titleB": ", die Sie einem echten Stall nicht stellen können.",
		"svc.intro.subtitle":
			"Ob Sie eine Futterinnovation validieren, eine Lieferkette optimieren oder ein mehrjähriges Forschungsprogramm gestalten — wir durchlaufen den gesamten Prozess im Forschungsfeld, von der ersten Hypothese bis zum publikationsreifen Nachweis.",
		"svc.cards.who": "Für wen",
		"svc.cards.empty":
			"Details zu den Leistungen folgen in Kürze — nehmen Sie Kontakt auf und wir erläutern Ihnen gern, was wir bieten.",
		"svc.process.eyebrow": "Wie wir arbeiten",
		"svc.process.title": "Von der Frage zur validierten Erkenntnis",
		"svc.why.eyebrow": "Warum Kuijpers Research Field",
		"svc.why.title": "Belege, auf die Sie bauen können",
		"svc.diff.eyebrow": "Der Unterschied",
		"svc.diff.title": "Klassische Beratung vs. der Kuijpers-Ansatz",
		"svc.diff.trad": "Klassische Beratung",
		"svc.diff.ourApproach": "Unser Ansatz",
		"svc.diff.kuijpers": "Der Kuijpers-Ansatz",
		"svc.ref.eyebrow": "Referenzen",
		"svc.ref.title": "Was unsere Partner sagen",
		"svc.ref.quote1":
			"Die Zusammenarbeit mit Kuijpers Kip Research Field half uns, die nötigen Erkenntnisse zu gewinnen, um auf eine emissionsfreie Geflügelproduktion umzustellen.",
		"svc.ref.quote2": "Vision und Umsetzungskraft machen den Unterschied.",
		"svc.cta.title": "Besprechen Sie Ihr Projekt",
		"svc.cta.text":
			"Sagen Sie uns, was Sie lernen oder validieren möchten, und wir zeigen Ihnen, wie die Digital-Twin-Technologie Sie dorthin bringt.",
		"svc.cta.button": "Kontakt aufnehmen",

		"res.meta.title": "Forschungsprojekte — Kuijpers Research Field",
		"res.meta.desc":
			"Entdecken Sie unsere Forschungsprojekte in der Geflügelproduktion — von der Emissionsüberwachung bis zur Effizienzmessung — für laufende, abgeschlossene und geplante Arbeiten.",
		"res.hero.title": "Forschungsprojekte",
		"res.hero.bodyA":
			"Vom Echtzeit-Emissionsmonitoring bis zur Effizienzmessung: Unsere Forschung verwandelt Daten aus einer kontrollierten, sensorreichen Umgebung in ",
		"res.hero.bodyHl": "validierte Erkenntnisse",
		"res.hero.bodyB":
			", denen die gesamte Kette vertrauen kann. Durchsuchen Sie unten unsere laufenden, abgeschlossenen und geplanten Projekte.",
		"res.intro.eyebrow": "Unsere Arbeit",
		"res.intro.titleA": "Die Projekte hinter dem ",
		"res.intro.titleHl": "Nachweis",
		"res.intro.titleB": ".",
		"res.intro.body":
			"Jede Aussage, die wir über die Geflügelproduktion treffen, wird durch ein laufendes Forschungsprojekt gestützt — laufend, abgeschlossen oder in Planung. Entdecken Sie die Arbeit, die Tierwohlstandards, Emissionsziele und Effizienz-Benchmarks in der Branche prägt.",
		"res.status.ongoing": "Laufend",
		"res.status.completed": "Abgeschlossen",
		"res.status.planned": "Geplant",
		"res.stat.inDesign": "In Planung",
		"res.filter.all": "Alle",
		"res.card.teamOne": "Teammitglied",
		"res.card.teamMany": "Teammitglieder",
		"res.card.view": "Projekt ansehen",
		"res.filter.empty": "Keine Projekte entsprechen diesem Filter — schauen Sie bald wieder vorbei.",
		"res.empty": "Forschungsprojekte folgen in Kürze — schauen Sie bald wieder vorbei.",
		"res.cta.title": "Haben Sie eine Forschungsfrage?",
		"res.cta.body":
			"Sagen Sie uns, was Sie lernen oder validieren möchten, und wir zeigen Ihnen, wie unser Forschungsfeld und der digitale Zwilling Sie dorthin bringen.",
		"res.cta.button": "Kontakt aufnehmen",
		"res.detail.crumb": "Forschung",
		"res.detail.overviewSoon": "Eine Übersicht zu diesem Projekt folgt in Kürze.",
		"res.detail.funding": "Förderung:",
		"res.detail.related": "Verwandte Projekte",
		"res.detail.viewAll": "Alle ansehen",

		"inn.meta.title": "Innovationen — Kuijpers Research Field",
		"inn.meta.desc": "Von der Forschung zur Wirkung in der Praxis — 21 miteinander verbundene Innovationen in den Bereichen Emissionen, Produktion, Gesundheit und Sicherheit, samt der messbaren Wirkung jeder einzelnen.",
		"inn.hero.titleA": "Von der Forschung zur ",
		"inn.hero.titleHl": "Wirkung in der Praxis",
		"inn.hero.subtitle": "Die Durchbrüche aus dem Kuijpers Research Field — und das vernetzte System, das sorgfältige Wissenschaft in messbare Ergebnisse auf dem Betrieb verwandelt.",
		"inn.explore.eyebrow": "Entdecken Sie den Standort",
		"inn.explore.title": "Von außen nach innen",
		"inn.explore.subtitle": "Das Modell dreht sich von selbst — wechseln Sie nach innen, um die Ställe, die Tiere und die Eierreihen zu sehen und wie weit der Betrieb entwickelt ist.",
		"inn.section.eyebrow": "Vernetzt",
		"inn.section.title": "Eine Vision, keine Liste",
		"inn.section.subtitle": "Unsere Innovationen wirken nicht isoliert — jede unterstützt und verstärkt die anderen. Drehen Sie das Netzwerk, um zu sehen, wie sie zusammenhängen, und öffnen Sie eine für ihre ganze Geschichte und ihre tatsächliche Wirkung auf CO₂, Ammoniak, Energie, Wasser und Nährstoffe.",
	},
} as const;
