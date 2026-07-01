import type { Route } from "./+types/diensten.toezichtservice._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Toezicht Service - Yezidi Security" },
        { name: "description", content: "Professionele toezichtservice van Yezidi Security." },
    ];
}

export default function ToezichtService() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
            <Banner
                title="TOEZICHT SERVICE"
                subtitle="Yezidi SECURITY"
                backgroundImage="/service.jpg"
                showButtons={false}
                cardTitle="Toezichtservice"
                cardText="Professioneel toezicht met servicegerichte medewerkers en heldere rapportage."
            />
            <ServiceLayout
                title="Toezichtservice"
                subtitle="Toezicht & servicemedewerkers"
                intro={
                    'Onze toezichtservice levert gastvrije toezichthouders, BHV’ers en servicemedewerkers die zowel veiligheid als service bieden. Ideaal voor locaties waar service en veiligheid hand in hand gaan.'
                }
                bullets={[
                    'Gastvrije en professionele toezichthouders.',
                    'BHV en eerste hulp op locatie wanneer nodig.',
                    'Ondersteuning bij facilitaire taken en bezoekerssturing.',
                    'Heldere rapportage en korte communicatielijnen.'
                ]}
                imageSrc="/service.jpg"
                ctaText="Meer weten over onze toezichtservice?"
                ctaLink="/contact"
            />
        </div>
    );
}