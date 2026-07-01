import type { Route } from "./+types/diensten.opvangbeveiliging._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Opvang Beveiliging - Yezidi Security" },
        { name: "description", content: "Professionele opvangbeveiliging van Yezidi Security voor opvangcentra." },
    ];
}

export default function OpvangBeveiliging() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
            <Banner
                title="OPVANG BEVEILIGING"
                subtitle="Yezidi SECURITY"
                backgroundImage="/opvang.jpg"
                showButtons={false}
                cardTitle="Opvangbeveiliging"
                cardText="Respectvolle beveiliging afgestemd op opvanglocaties: de-escalatie en samenwerking met zorgteams."
            />
            <ServiceLayout
                title="Opvangbeveiliging"
                subtitle="Respectvolle beveiliging"
                intro={
                    'Bij opvanglocaties combineren we veiligheid met respect voor bewoners en medewerkers. Onze teams zijn getraind in de-escalatie en werken nauw samen met zorg- en hulpverleners.'
                }
                bullets={[
                    'Beschermende en respectvolle aanwezigheid.',
                    'Training in de-escalatie en omgang met kwetsbare groepen.',
                    'Samenwerking met hulpverleners en instanties.',
                    'Discretie en betrouwbare rapportage.'
                ]}
                imageSrc="/opvang.jpg"
                ctaText="Meer weten over opvangbeveiliging?"
                ctaLink="/contact"
            />
        </div>
    );
}