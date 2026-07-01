import type { Route } from "./+types/diensten.evenementenbeveiliging._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Evenementen Beveiliging - Yezidi Security" },
        { name: "description", content: "Professionele evenementenbeveiliging van Yezidi Security voor uw evenement." },
    ];
}

export default function EvenementenBeveiliging() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
            <Banner
                title="EVENEMENTEN BEVEILIGING"
                subtitle="Yezidi SECURITY"
                backgroundImage="/evenement.jpg"
                showButtons={false}
                cardTitle="Evenementenbeveiliging"
                cardText="Veiligheid voor evenementen: toegangscontrole, crowd management en snelle respons."
            />
            <ServiceLayout
                title="Evenementenbeveiliging"
                subtitle="Veiligheid voor elk evenement"
                intro={
                    'Van kleinschalige bijeenkomsten tot grote festivals: veiligheid vraagt maatwerk. Wij leveren getrainde teams voor toegangscontrole, crowd management en snelle incidentrespons, zodat jouw evenement soepel en veilig verloopt.'
                }
                bullets={[
                    'Toegangscontrole en entry-management.',
                    'Crowd management en risicobeheersing.',
                    'Coördinatie met hulpdiensten en medische teams.',
                    'Discrete en professionele dienstverlening.'
                ]}
                imageSrc="/evenement.jpg"
                ctaText="Meer weten over evenementenbeveiliging?"
                ctaLink="/contact"
            />
        </div>
    );
}