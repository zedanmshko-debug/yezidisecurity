import type { Route } from "./+types/diensten.mobilesurveillance._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Mobile Surveillance - Yezidi Security" },
        { name: "description", content: "Professionele mobile surveillance van Yezidi Security voor uw veiligheid." },
    ];
}

export default function MobileSurveillance() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
            <Banner
                title="Mobiele SURVEILLANCE"
                subtitle="Yezidi SECURITY"
                backgroundImage="/surveilance.jpg"
                showButtons={false}
                cardTitle="Mobiele surveillance"
                cardText="Patrouilles en snelle interventie voor zichtbaarheid en preventie op locaties met verhoogd risico."
            />
            <ServiceLayout
                title="Mobiele Surveillance"
                subtitle="Flexibele surveillance-eenheden"
                intro={
                    'Onze mobiele surveillance-eenheden rijden gerichte ronden om zichtbaarheid te bieden en risico’s vroeg te signaleren. Ideaal als tijdelijke of aanvullende oplossing bij locaties met verhoogd risico.'
                }
                bullets={[
                    'Flexibele inzet op maat van jouw locatie.',
                    'Snelle interventie bij incidenten en alarmen.',
                    'Zichtbare afschrikking om schade en diefstal te voorkomen.',
                    'Duidelijke rapportage en opvolging na elke ronde.'
                ]}
                imageSrc="/surveilance.jpg"
                ctaText="Meer weten over mobiele surveillance?"
                ctaLink="/contact"
            />
        </div>
    );
}