import type { Route } from "./+types/diensten._index.js";
import Banner from "../components/Banner.js";
import ServiceCard from "../components/ServiceCard.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Diensten - Yezidi Security" },
        { name: "description", content: "Ontdek de professionele en betrouwbare beveiligingsdiensten van Yezidi Security. Maatwerk voor organisaties, evenementen en particuliere projecten." },
    ];
}

export default function DienstenIndex() {
    const services = [
        {
            slug: "bouwbeveiliging",
            title: "Bouwbeveiliging",
            excerpt: "Bescherming voor bouwplaatsen tegen diefstal, vandalisme en ongeautoriseerde toegang. Yezidi Security levert zichtbare aanwezigheid, toegangscontrole en heldere rapportage zodat bouwprojecten ongestoord kunnen doorgaan.",
            image: "/bouw.jpg",
        },
        {
            slug: "evenementenbeveiliging",
            title: "Evenementenbeveiliging",
            excerpt: "Veilige en efficiënte beveiliging voor evenementen, beurzen en publieksbijeenkomsten. Van toegangscontrole en identificatie tot crowd management en acute interventie — professioneel en gastvrij.",
            image: "/evenement.jpg",
        },
        {
            slug: "mobilesurveillance",
            title: "Mobiele Surveillance",
            excerpt: "Mobiele patrouilles en surveillance-oplossingen voor tijdelijk of continu toezicht. Snel inzetbaar, zichtbaar aanwezig en gericht op vroegtijdige detectie en rapportage van risico's.",
            image: "/surveilance.jpg",
        },
        {
            slug: "objectbeveiliging",
            title: "Objectbeveiliging",
            excerpt: "Op maat gemaakte beveiliging voor bedrijfspanden, kantoren en objecten. Yezidi Security combineert toezichthoudende diensten met technische oplossingen voor volledige gemoedsrust.",
            image: "/object.jpg",
        },
        {
            slug: "opvangbeveiliging",
            title: "Opvangbeveiliging",
            excerpt: "Veilige, respectvolle en discrete beveiliging voor opvang- en zorglocaties. Onze medewerkers werken met empathie en trainen in specifieke procedures voor kwetsbare doelgroepen.",
            image: "/opvang.jpg",
        },
        {
            slug: "schoolbeveiliging",
            title: "Schoolbeveiliging",
            excerpt: "Toezicht en preventie op schoolterreinen en tijdens schooltijden. We ondersteunen scholen met zichtbare aanwezigheid, toegangscontrole en samenwerking met personeel en ouders.",
            image: "/school.jpg",
        },
        {
            slug: "toezichtservice",
            title: "Toezichtservice",
            excerpt: "Professionele toezichtsdiensten voor binnen- en buitenlocaties, met duidelijke rapportage en snelle opvolging. Beschikbaar in dag- en nachtdiensten op maat van uw organisatie.",
            image: "/service.jpg",
        },
        {
            slug: "transportbeveiliging",
            title: "Transportbeveiliging",
            excerpt: "Beveiligde transport- en escortdiensten voor waardevolle zendingen. Discrete, goed getrainde teams en protocollen voor minimalisering van risico tijdens vervoer.",
            image: "/transport.jpg",
        },
        {
            slug: "logistiek",
            title: "Logistieke beveiliging",
            excerpt: "Beveiliging voor distributiecentra en logistieke hubs: toegangscontrole, bewaking en risicomanagement.",
            image: "/logisitek.jpg",
        },
        {
            slug: "winkelsurveillance",
            title: "Winkelsurveillance",
            excerpt: "Preventieve en klantgerichte beveiliging voor retailomgevingen. Onze medewerkers verminderen derving en zorgen tegelijkertijd voor een prettig winkelklimaat voor klanten en personeel.",
            image: "/winkel.jpg",
        },
        {
            slug: "zorgbeveiliging",
            title: "Zorgbeveiliging",
            excerpt: "Specialistische beveiliging voor zorginstellingen met aandacht voor de-escalatie en samenwerking met zorgteams. Gericht op veiligheid en het welzijn van bewoners en personeel.",
            image: "/zorg.jpg",
        },
    ];

    const variantPattern = [
        "col-span-2",
        "col-span-1",
        "col-span-1",
        "col-span-2",
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-light)' }}>
            <Banner
                title="ONZE DIENSTEN"
                subtitle="YEZIDI SECURITY"
                backgroundImage="/service.jpg"
                showButtons={false}
                cardTitle="Onze diensten"
                cardText="Ontdek onze beveiligingsoplossingen op maat voor organisaties, evenementen en projecten."
            />

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-6 underline" style={{ color: 'var(--color-accent)' }}>Onze Beveiligingsdiensten</h2>


                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
                        {services.map((s, i) => {
                            const variant = variantPattern[i % variantPattern.length];
                            const cardClass = `${variant} `;
                            return (
                                <div key={s.slug} className={cardClass}>
                                    <ServiceCard
                                        title={s.title}
                                        excerpt={s.excerpt}
                                        image={s.image}
                                        to={`/diensten/${s.slug}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}