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

	// --- research project body paragraphs (dense technical text — review recommended) ---
	"Carbon accounting in poultry production has historically relied on annualized estimates and emission factors derived from generic models. While useful for high-level reporting, this approach is poorly suited to evaluating the real-time impact of operational decisions or assessing the effectiveness of specific mitigation interventions.": {
		nl: "Koolstofboekhouding in de pluimveeproductie steunde historisch op gejaarlijkte schattingen en emissiefactoren afgeleid van generieke modellen. Hoewel nuttig voor rapportage op hoofdlijnen, is deze aanpak slecht geschikt om de realtime impact van operationele beslissingen te evalueren of de effectiviteit van specifieke reductiemaatregelen te beoordelen.",
		de: "Die CO₂-Bilanzierung in der Geflügelproduktion stützte sich historisch auf jährliche Schätzungen und Emissionsfaktoren aus generischen Modellen. Für die Berichterstattung auf hoher Ebene nützlich, eignet sich dieser Ansatz jedoch schlecht, um die Echtzeitwirkung betrieblicher Entscheidungen zu bewerten oder die Wirksamkeit spezifischer Minderungsmaßnahmen zu beurteilen.",
	},
	"This project implements continuous CO₂ measurement infrastructure across each stage of the broiler production chain, from breeder operations through grow-out, transport, and processing. Direct measurement is combined with activity-based modeling to attribute emissions to specific operational variables — feed sourcing, energy use, housing conditions, and logistics.": {
		nl: "Dit project implementeert een infrastructuur voor continue CO₂-meting in elke fase van de vleeskuikenketen, van vermeerdering via opfok tot transport en verwerking. Directe meting wordt gecombineerd met activiteitsgebaseerde modellering om emissies toe te wijzen aan specifieke operationele variabelen — voerinkoop, energieverbruik, huisvestingsomstandigheden en logistiek.",
		de: "Dieses Projekt implementiert eine Infrastruktur zur kontinuierlichen CO₂-Messung über jede Stufe der Broiler-Produktionskette hinweg, von der Elterntierhaltung über die Mast bis zu Transport und Verarbeitung. Die Direktmessung wird mit aktivitätsbasierter Modellierung kombiniert, um Emissionen spezifischen betrieblichen Variablen zuzuordnen — Futterbezug, Energieverbrauch, Haltungsbedingungen und Logistik.",
	},
	"The data layer generated supports both granular intervention impact assessment and aggregated chain-level reporting aligned with CSRD, GHG Protocol, and SBTi frameworks. Project outputs will contribute to refining emission factors used across the European poultry sector.": {
		nl: "De gegenereerde datalaag ondersteunt zowel een gedetailleerde beoordeling van de impact van ingrepen als geaggregeerde rapportage op ketenniveau in lijn met CSRD-, GHG Protocol- en SBTi-kaders. De projectresultaten dragen bij aan het verfijnen van emissiefactoren die in de Europese pluimveesector worden gebruikt.",
		de: "Die erzeugte Datenschicht unterstützt sowohl die granulare Bewertung der Wirkung von Maßnahmen als auch die aggregierte Berichterstattung auf Kettenebene im Einklang mit CSRD, GHG Protocol und SBTi-Rahmenwerken. Die Projektergebnisse tragen zur Verfeinerung der im europäischen Geflügelsektor verwendeten Emissionsfaktoren bei.",
	},
	"The pace of innovation in poultry production — feed additives, precision housing technologies, alternative protein sources, welfare-oriented management practices — has accelerated significantly. However, the gap between promising laboratory results and validated commercial performance remains a barrier to adoption, particularly where multiple performance dimensions must be evaluated simultaneously.": {
		nl: "Het innovatietempo in de pluimveeproductie — voeradditieven, precisiehuisvestingstechnologieën, alternatieve eiwitbronnen, welzijnsgerichte managementpraktijken — is aanzienlijk versneld. De kloof tussen veelbelovende laboratoriumresultaten en gevalideerde commerciële prestaties blijft echter een drempel voor adoptie, vooral wanneer meerdere prestatiedimensies tegelijk moeten worden geëvalueerd.",
		de: "Das Innovationstempo in der Geflügelproduktion — Futterzusatzstoffe, Präzisionshaltungstechnologien, alternative Proteinquellen, tierwohlorientierte Managementpraktiken — hat sich erheblich beschleunigt. Die Lücke zwischen vielversprechenden Laborergebnissen und validierter kommerzieller Leistung bleibt jedoch ein Hindernis für die Einführung, insbesondere wenn mehrere Leistungsdimensionen gleichzeitig bewertet werden müssen.",
	},
	"This project provides a standardized intervention testing environment in which new technologies and practices are evaluated under commercial-scale production conditions, with parallel measurement of production performance, animal welfare indicators, emission profiles, and economic outcomes. Trial design follows established protocols for controlled comparison, with independent validation of methodology and results.": {
		nl: "Dit project biedt een gestandaardiseerde testomgeving voor ingrepen waarin nieuwe technologieën en werkwijzen worden geëvalueerd onder productieomstandigheden op commerciële schaal, met parallelle meting van productieprestaties, dierenwelzijnsindicatoren, emissieprofielen en economische uitkomsten. De proefopzet volgt gevestigde protocollen voor gecontroleerde vergelijking, met onafhankelijke validatie van methodologie en resultaten.",
		de: "Dieses Projekt bietet eine standardisierte Testumgebung für Maßnahmen, in der neue Technologien und Praktiken unter Produktionsbedingungen in kommerziellem Maßstab bewertet werden, mit paralleler Messung von Produktionsleistung, Tierwohlindikatoren, Emissionsprofilen und wirtschaftlichen Ergebnissen. Das Versuchsdesign folgt etablierten Protokollen für den kontrollierten Vergleich, mit unabhängiger Validierung von Methodik und Ergebnissen.",
	},
	"Outputs support evidence-based adoption decisions by producers, integrators, retailers, and regulatory bodies, and provide innovators with market-ready validation packages aligned with EU regulatory and commercial requirements.": {
		nl: "De resultaten ondersteunen op bewijs gebaseerde adoptiebeslissingen door producenten, integrators, retailers en toezichthouders, en bieden innovators marktklare validatiepakketten die aansluiten op EU-regelgeving en commerciële eisen.",
		de: "Die Ergebnisse unterstützen evidenzbasierte Einführungsentscheidungen von Produzenten, Integratoren, Handel und Regulierungsbehörden und liefern Innovatoren marktreife Validierungspakete im Einklang mit EU-regulatorischen und kommerziellen Anforderungen.",
	},
	"Operational efficiency in poultry production is shaped by hundreds of interacting variables — genetics, feed composition, housing, climate management, flock health, and processing conditions. Most efficiency studies isolate one or two of these factors, leaving the systemic interactions unmeasured and the resulting benchmarks incomplete.": {
		nl: "Operationele efficiëntie in de pluimveeproductie wordt bepaald door honderden op elkaar inwerkende variabelen — genetica, voersamenstelling, huisvesting, klimaatbeheer, koppelgezondheid en verwerkingsomstandigheden. De meeste efficiëntiestudies isoleren een of twee van deze factoren, waardoor de systemische interacties ongemeten blijven en de resulterende benchmarks onvolledig zijn.",
		de: "Die betriebliche Effizienz in der Geflügelproduktion wird von Hunderten zusammenwirkenden Variablen geprägt — Genetik, Futterzusammensetzung, Haltung, Klimamanagement, Herdengesundheit und Verarbeitungsbedingungen. Die meisten Effizienzstudien isolieren einen oder zwei dieser Faktoren, sodass die systemischen Wechselwirkungen ungemessen bleiben und die resultierenden Benchmarks unvollständig sind.",
	},
	"This project establishes a full-chain efficiency framework by capturing continuous performance data across breeder, grow-out, transport, and processing stages. Feed conversion ratios, daily weight gain, mortality patterns, uniformity, and processing yields are measured under standardized conditions, with each data point traceable to its production context.": {
		nl: "Dit project brengt een efficiëntiekader voor de hele keten tot stand door continue prestatiegegevens vast te leggen over de fasen vermeerdering, opfok, transport en verwerking. Voederconversies, dagelijkse groei, uitvalpatronen, uniformiteit en verwerkingsrendementen worden onder gestandaardiseerde omstandigheden gemeten, waarbij elk datapunt herleidbaar is tot de productiecontext.",
		de: "Dieses Projekt etabliert ein Effizienzrahmenwerk für die gesamte Kette, indem kontinuierliche Leistungsdaten über die Stufen Elterntierhaltung, Mast, Transport und Verarbeitung erfasst werden. Futterverwertung, tägliche Gewichtszunahme, Mortalitätsmuster, Uniformität und Verarbeitungsausbeuten werden unter standardisierten Bedingungen gemessen, wobei jeder Datenpunkt auf seinen Produktionskontext zurückführbar ist.",
	},
	"The outcome is a set of validated efficiency benchmarks that account for the full production system, providing reference values for producers, integrators, and policy bodies working on sustainable intensification of poultry production.": {
		nl: "Het resultaat is een set gevalideerde efficiëntiebenchmarks die rekening houden met het volledige productiesysteem en referentiewaarden bieden voor producenten, integrators en beleidsinstanties die werken aan duurzame intensivering van de pluimveeproductie.",
		de: "Das Ergebnis ist ein Satz validierter Effizienz-Benchmarks, die das gesamte Produktionssystem berücksichtigen und Referenzwerte für Produzenten, Integratoren und politische Gremien liefern, die an einer nachhaltigen Intensivierung der Geflügelproduktion arbeiten.",
	},
	"Ammonia emissions from poultry housing remain one of the most regulated and contested environmental impacts of the sector. Compliance with the EU National Emission Ceilings Directive, national emission policies, and Best Available Techniques (BAT) reference documents requires accurate, defensible measurement — yet many operations still rely on estimated values derived from outdated emission factors.": {
		nl: "Ammoniakemissies uit pluimveestallen blijven een van de meest gereguleerde en betwiste milieu-impacts van de sector. Naleving van de EU-richtlijn nationale emissieplafonds, nationaal emissiebeleid en referentiedocumenten voor Beste Beschikbare Technieken (BBT) vereist nauwkeurige, verdedigbare meting — toch steunen veel bedrijven nog op geschatte waarden afgeleid van verouderde emissiefactoren.",
		de: "Ammoniakemissionen aus der Geflügelhaltung bleiben eine der am stärksten regulierten und umstrittensten Umweltwirkungen der Branche. Die Einhaltung der EU-Richtlinie über nationale Emissionshöchstmengen, nationaler Emissionsvorschriften und der Referenzdokumente zu den besten verfügbaren Techniken (BVT) erfordert genaue, belastbare Messungen — doch viele Betriebe stützen sich noch auf Schätzwerte aus veralteten Emissionsfaktoren.",
	},
	"This project applies advanced ammonia measurement systems across multiple housing configurations and management practices, quantifying NH₃ emission patterns under varying ventilation, litter, feed, and stocking conditions. The methodology supports both research-grade emission characterization and operational guidance for producers seeking compliance with regulatory frameworks.": {
		nl: "Dit project past geavanceerde ammoniakmeetsystemen toe op meerdere huisvestingsconfiguraties en managementpraktijken en kwantificeert NH₃-emissiepatronen onder wisselende ventilatie-, strooisel-, voer- en bezettingsomstandigheden. De methodologie ondersteunt zowel emissiekarakterisering op onderzoeksniveau als operationele richtlijnen voor producenten die willen voldoen aan regelgevende kaders.",
		de: "Dieses Projekt setzt fortschrittliche Ammoniakmesssysteme über mehrere Haltungskonfigurationen und Managementpraktiken hinweg ein und quantifiziert NH₃-Emissionsmuster unter wechselnden Lüftungs-, Einstreu-, Futter- und Besatzbedingungen. Die Methodik unterstützt sowohl die Emissionscharakterisierung auf Forschungsniveau als auch operative Leitlinien für Produzenten, die die Einhaltung regulatorischer Rahmenwerke anstreben.",
	},
	"Intervention effectiveness is evaluated through controlled comparative trials, generating evidence on mitigation technologies, feed adjustments, and management practices that deliver verifiable NH₃ reductions without compromising animal welfare or production performance.": {
		nl: "De effectiviteit van ingrepen wordt geëvalueerd via gecontroleerde vergelijkende proeven, die bewijs opleveren over reductietechnologieën, voeraanpassingen en managementpraktijken die verifieerbare NH₃-reducties opleveren zonder afbreuk te doen aan dierenwelzijn of productieprestaties.",
		de: "Die Wirksamkeit der Maßnahmen wird durch kontrollierte Vergleichsversuche bewertet, die Belege zu Minderungstechnologien, Futteranpassungen und Managementpraktiken liefern, die überprüfbare NH₃-Reduktionen erzielen, ohne Tierwohl oder Produktionsleistung zu beeinträchtigen.",
	},
};

/** Translate a CMS string via the overlay; returns the original if untranslated. */
export function translateCms(text: string | null | undefined, lang: Lang): string {
	if (!text) return text ?? "";
	if (lang === "en") return text;
	return cmsTranslations[text.trim()]?.[lang] ?? text;
}
