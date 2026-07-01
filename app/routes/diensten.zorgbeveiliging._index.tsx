import type { Route } from "./+types/diensten.zorgbeveiliging._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Zorg Beveiliging - Yezidi Security" },
        { name: "description", content: "Professionele zorgbeveiliging van Yezidi Security voor zorginstellingen." },
    ];
}

export default function ZorgBeveiliging() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-light)' }}>
            <Banner
                title="ZORG BEVEILIGING"
                subtitle="Yezidi SECURITY"
                backgroundImage="/zorg.jpg"
                showButtons={false}
                cardTitle="Zorgbeveiliging"
                cardText="Respectvolle beveiliging voor zorginstellingen met aandacht voor de-escalatie en privacy."
            />
            <ServiceLayout
                title="Zorgbeveiliging"
                subtitle="Respectvolle en professionele beveiliging"
                intro={
                    'In de zorgsector staat respect en rust voorop. Onze beveiligers zijn getraind in de-escalatie en werken samen met zorgteams om zowel patiënten als personeel te beschermen, zonder onnodige overlast.'
                }
                bullets={[
                    'Samenwerking met zorgpersoneel en management.',
                    'Training in de-escalatie en omgang met kwetsbare personen.',
                    'Bescherming van patiënten, bezoekers en medewerkers.',
                    '24/7 beschikbaarheid en discrete inzet.'
                ]}
                imageSrc="/zorg.jpg"
                ctaText="Meer weten over zorgbeveiliging?"
                ctaLink="/contact"
            />
        </div>
    );
}