import type { Lang } from "./ui";

// Translation overlay for CMS (Sanity) content that is authored in English.
// Keyed by the trimmed English source string. This is an interim measure until
// the CMS itself is localized; keep entries in sync if the Sanity text changes.
// Draft NL/DE — please review.
export const cmsTranslations: Record<string, { nl: string; de: string }> = {
	// --- service titles ---
	"Integrated Innovation Trials": {
		nl: "Geïntegreerde innovatieproeven",
		de: "Integrierte Innovationsversuche",
	},
	"Supply Chain Optimization & Emission Reduction": {
		nl: "Optimalisatie van de toeleveringsketen & emissiereductie",
		de: "Lieferkettenoptimierung & Emissionsreduktion",
	},
	"Digital Twin Research Platform": {
		nl: "Digital-twin-onderzoeksplatform",
		de: "Digital-Twin-Forschungsplattform",
	},
	// --- service short descriptions ---
	"Validate feed innovations, emission-reduction technologies, and efficiency solutions inside a fully integrated, commercial-scale poultry chain. Generate the third-party validated evidence your customers and regulators require.": {
		nl: "Valideer voerinnovaties, emissiereducerende technologieën en efficiëntieoplossingen binnen een volledig geïntegreerde pluimveeketen op commerciële schaal. Genereer het door derden gevalideerde bewijs dat uw klanten en toezichthouders vereisen.",
		de: "Validieren Sie Futterinnovationen, emissionsmindernde Technologien und Effizienzlösungen in einer vollständig integrierten Geflügelkette in kommerziellem Maßstab. Erzeugen Sie die von Dritten validierten Belege, die Ihre Kunden und Behörden verlangen.",
	},
	"Optimize your upstream supply chain to reduce total cost of purchase while simultaneously lowering CO₂ and NH₃ emissions. Decision-ready insights aligned with CSRD, Scope 3, and retailer reporting requirements.": {
		nl: "Optimaliseer uw upstream-toeleveringsketen om de totale inkoopkosten te verlagen en tegelijkertijd de CO₂- en NH₃-uitstoot te verminderen. Beslissingsklare inzichten die aansluiten op CSRD, Scope 3 en de rapportage-eisen van retailers.",
		de: "Optimieren Sie Ihre vorgelagerte Lieferkette, um die Gesamtbeschaffungskosten zu senken und gleichzeitig die CO₂- und NH₃-Emissionen zu reduzieren. Entscheidungsreife Erkenntnisse im Einklang mit CSRD, Scope 3 und den Berichtsanforderungen des Handels.",
	},
	"A fully instrumented digital twin of the complete poultry production chain, designed for academic and applied research on production efficiency, animal welfare, and sustainability.": {
		nl: "Een volledig uitgeruste digital twin van de complete pluimveeproductieketen, ontworpen voor academisch en toegepast onderzoek naar productie-efficiëntie, dierenwelzijn en duurzaamheid.",
		de: "Ein vollständig instrumentierter digitaler Zwilling der gesamten Geflügelproduktionskette, konzipiert für akademische und angewandte Forschung zu Produktionseffizienz, Tierwohl und Nachhaltigkeit.",
	},
	// --- service features ---
	"Controlled trials in a commercial-scale production environment": {
		nl: "Gecontroleerde proeven in een productieomgeving op commerciële schaal",
		de: "Kontrollierte Versuche in einer Produktionsumgebung in kommerziellem Maßstab",
	},
	"Full-cycle data capture across feed, health, emissions, and performance": {
		nl: "Dataregistratie over de hele cyclus voor voer, gezondheid, emissies en prestaties",
		de: "Datenerfassung über den gesamten Zyklus für Futter, Gesundheit, Emissionen und Leistung",
	},
	"Independent third-party validation of results": {
		nl: "Onafhankelijke validatie van resultaten door derden",
		de: "Unabhängige Validierung der Ergebnisse durch Dritte",
	},
	"Benchmarking against established industry baselines": {
		nl: "Benchmarking ten opzichte van gevestigde branchenormen",
		de: "Benchmarking gegenüber etablierten Branchen-Benchmarks",
	},
	"Structured pathway from pilot validation to commercial deployment": {
		nl: "Gestructureerd traject van pilotvalidatie tot commerciële uitrol",
		de: "Strukturierter Weg von der Pilotvalidierung bis zum kommerziellen Einsatz",
	},
	"End-to-end upstream supply chain mapping": {
		nl: "End-to-end in kaart brengen van de upstream-toeleveringsketen",
		de: "End-to-End-Kartierung der vorgelagerten Lieferkette",
	},
	"Scenario modeling for cost, CO₂, and NH₃ outcomes": {
		nl: "Scenariomodellering voor kosten-, CO₂- en NH₃-uitkomsten",
		de: "Szenariomodellierung für Kosten-, CO₂- und NH₃-Ergebnisse",
	},
	"Quantified emission footprints per supplier and production stage": {
		nl: "Gekwantificeerde emissievoetafdrukken per leverancier en productiefase",
		de: "Quantifizierte Emissions-Fußabdrücke pro Lieferant und Produktionsstufe",
	},
	"Alignment with CSRD, GHG Protocol, and SBTi frameworks": {
		nl: "Afstemming op CSRD-, GHG Protocol- en SBTi-kaders",
		de: "Ausrichtung an CSRD, GHG Protocol und SBTi-Rahmenwerken",
	},
	"Strategic sourcing and procurement recommendations": {
		nl: "Strategische sourcing- en inkoopaanbevelingen",
		de: "Strategische Beschaffungs- und Einkaufsempfehlungen",
	},
	"Continuous data access across the full production chain": {
		nl: "Continue datatoegang over de hele productieketen",
		de: "Kontinuierlicher Datenzugriff über die gesamte Produktionskette",
	},
	"Real-time monitoring with comprehensive historical archives": {
		nl: "Realtime monitoring met uitgebreide historische archieven",
		de: "Echtzeit-Monitoring mit umfassenden historischen Archiven",
	},
	"Support for multi-stage and longitudinal study designs": {
		nl: "Ondersteuning voor meerfasige en longitudinale onderzoeksopzetten",
		de: "Unterstützung für mehrstufige und longitudinale Studiendesigns",
	},
	"Publication-ready datasets with documented methodology": {
		nl: "Publicatieklare datasets met gedocumenteerde methodologie",
		de: "Publikationsreife Datensätze mit dokumentierter Methodik",
	},
	"Open science principles and reproducibility standards": {
		nl: "Open-science-principes en reproduceerbaarheidsnormen",
		de: "Open-Science-Prinzipien und Reproduzierbarkeitsstandards",
	},
	// --- advantage (why-us stat) titles ---
	"Conplete broiler value chain integration": {
		nl: "Volledige integratie van de vleeskuikenketen",
		de: "Vollständige Integration der Broiler-Wertschöpfungskette",
	},
	"Independent third party validation": {
		nl: "Onafhankelijke validatie door derden",
		de: "Unabhängige Validierung durch Dritte",
	},
	"Digital twin technology": {
		nl: "Digital-twin-technologie",
		de: "Digital-Twin-Technologie",
	},
	"Real-time data analysis": {
		nl: "Realtime data-analyse",
		de: "Echtzeit-Datenanalyse",
	},
	// --- research project titles ---
	"Controlled Intervention Trials for Feed Additives, Housing Technologies, and Management Practices": {
		nl: "Gecontroleerde interventieproeven voor voeradditieven, huisvestingstechnologieën en managementpraktijken",
		de: "Kontrollierte Interventionsversuche für Futterzusatzstoffe, Haltungstechnologien und Managementpraktiken",
	},
	"Full-Chain Efficiency Benchmarking in Commercial Broiler Production": {
		nl: "Efficiëntiebenchmarking van de hele keten in de commerciële vleeskuikenproductie",
		de: "Effizienz-Benchmarking der gesamten Kette in der kommerziellen Broilerproduktion",
	},
	"Carbon Footprint Measurement Across the Broiler Production Chain": {
		nl: "Meting van de CO₂-voetafdruk in de vleeskuikenproductieketen",
		de: "Messung des CO₂-Fußabdrucks entlang der Broiler-Produktionskette",
	},
	"NH3 Emission Quantification and Mitigation in Broiler Housing Systems": {
		nl: "Kwantificering en reductie van NH₃-emissies in vleeskuikenstalsystemen",
		de: "Quantifizierung und Minderung von NH₃-Emissionen in Broiler-Haltungssystemen",
	},
	// --- research project summaries ---
	"A structured trial environment for evaluating the performance, welfare, and environmental impact of new feed additives, housing technologies, and management practices under commercial-scale production conditions.": {
		nl: "Een gestructureerde proefomgeving voor het evalueren van de prestaties, het welzijn en de milieu-impact van nieuwe voeradditieven, huisvestingstechnologieën en managementpraktijken onder productieomstandigheden op commerciële schaal.",
		de: "Eine strukturierte Versuchsumgebung zur Bewertung von Leistung, Tierwohl und Umweltwirkung neuer Futterzusatzstoffe, Haltungstechnologien und Managementpraktiken unter Produktionsbedingungen in kommerziellem Maßstab.",
	},
	"A comprehensive analysis of feed conversion ratios, growth performance, mortality, and operational efficiency across all stages of commercial broiler production, establishing validated benchmarks for the European poultry sector.": {
		nl: "Een uitgebreide analyse van voederconversies, groeiprestaties, uitval en operationele efficiëntie in alle fasen van de commerciële vleeskuikenproductie, met gevalideerde benchmarks voor de Europese pluimveesector.",
		de: "Eine umfassende Analyse von Futterverwertung, Wachstumsleistung, Mortalität und betrieblicher Effizienz über alle Stufen der kommerziellen Broilerproduktion, die validierte Benchmarks für den europäischen Geflügelsektor schafft.",
	},
	"Precise, continuous measurement of carbon emissions from breeding through processing, combined with impact assessment of targeted interventions on the total chain footprint.": {
		nl: "Nauwkeurige, continue meting van koolstofemissies van broederij tot verwerking, gecombineerd met een impactbeoordeling van gerichte ingrepen op de totale voetafdruk van de keten.",
		de: "Präzise, kontinuierliche Messung der Kohlenstoffemissionen von der Brüterei bis zur Verarbeitung, kombiniert mit einer Wirkungsbewertung gezielter Maßnahmen auf den Gesamt-Fußabdruck der Kette.",
	},
	"Advanced measurement of ammonia emissions across housing systems and management practices, supporting intervention effectiveness evaluation and compliance with NEC Directive and BBT/BAT requirements.": {
		nl: "Geavanceerde meting van ammoniakemissies over huisvestingssystemen en managementpraktijken, ter ondersteuning van de evaluatie van de effectiviteit van ingrepen en naleving van de NEC-richtlijn en BBT/BAT-eisen.",
		de: "Fortschrittliche Messung von Ammoniakemissionen über Haltungssysteme und Managementpraktiken hinweg, zur Bewertung der Wirksamkeit von Maßnahmen und zur Einhaltung der NEC-Richtlinie und der BVT/BAT-Anforderungen.",
	},
};

/** Translate a CMS string via the overlay; returns the original if untranslated. */
export function translateCms(text: string | null | undefined, lang: Lang): string {
	if (!text) return text ?? "";
	if (lang === "en") return text;
	return cmsTranslations[text.trim()]?.[lang] ?? text;
}
