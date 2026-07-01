import type { Route } from "./+types/diensten.transportbeveiliging._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Transport Beveiliging - Yezidi Security" },
        { name: "description", content: "Professionele transportbeveiliging van Yezidi Security." },
    ];
}

export default function TransportBeveiliging() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-light)' }}>
            <Banner
                title="TRANSPORT BEVEILIGING"
                subtitle="Yezidi SECURITY"
                backgroundImage="/transport.jpg"
                showButtons={false}
                cardTitle="Transportbeveiliging"
                cardText="Begeleide transporten en beveiligingsprotocollen voor veilig vervoer van goederen."
            />
            <ServiceLayout
                title="Transportbeveiliging"
                subtitle="Bescherming tijdens transport"
                intro={
                    'Transportbeveiliging voorkomt verlies en schade tijdens vervoer van waardevolle goederen. Wij bieden escortediensten, veilige routeplanning en continue risicobeoordeling.'
                }
                bullets={[
                    'Begeleide transporten en escorte-oplossingen.',
                    'Veilige routeplanning en risicobeoordeling.',
                    'Beveiliging bij overnachting en tussenstops.',
                    'Discrete en professionele chauffeurs en begeleiders.'
                ]}
                imageSrc="/transport.jpg"
                ctaText="Meer weten over transportbeveiliging?"
                ctaLink="/contact"
            />
        </div>
    );
}