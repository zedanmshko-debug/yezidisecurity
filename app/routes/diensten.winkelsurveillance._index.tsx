import type { Route } from "./+types/diensten.winkelsurveillance._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Winkel Surveillance - Yezidi Security" },
        { name: "description", content: "Professionele winkelsurveillance van Yezidi Security voor uw winkel." },
    ];
}

export default function WinkelSurveillance() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
            <Banner
                title="WINKEL SURVEILLANCE"
                subtitle="Yezidi SECURITY"
                backgroundImage="/winkel.jpg"
                showButtons={false}
                cardTitle="Winkelsurveillance"
                cardText="Preventief toezicht in retail: minder derving en een veilige winkelervaring voor klanten en personeel."
            />
            <ServiceLayout
                title="Winkelsurveillance"
                subtitle="Winkelbeveiliging en preventie"
                intro={
                    'In winkels draait het om klantveiligheid en verliespreventie. Onze medewerkers zijn klantvriendelijk en doelgericht: zichtbaar aanwezig, alert op verdachte situaties en gericht op het verminderen van incidenten.'
                }
                bullets={[
                    'Zichtbare en klantgerichte medewerkers.',
                    'Preventie van winkeldiefstal en fraude.',
                    'Samenwerking met winkelmanagement en CCTV-monitoring.',
                    'Rapportage en advies om incidenten te verminderen.'
                ]}
                imageSrc="/winkel.jpg"
                ctaText="Meer weten over winkelsurveillance?"
                ctaLink="/contact"
            />
        </div>
    );
}