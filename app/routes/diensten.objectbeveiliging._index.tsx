import type { Route } from "./+types/diensten.objectbeveiliging._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Object Beveiliging - Yezidi Security" },
        { name: "description", content: "Professionele objectbeveiliging van Yezidi Security voor uw bedrijfspand." },
    ];
}

export default function ObjectBeveiliging() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
            <Banner
                title="OBJECT BEVEILIGING"
                subtitle="Yezidi SECURITY"
                backgroundImage="/object.jpg"
                showButtons={false}
                cardTitle="Objectbeveiliging"
                cardText="Maatwerkbeveiliging voor gebouwen en bedrijfsterreinen — preventief, zichtbaar en betrouwbaar."
            />
            <ServiceLayout
                title="Objectbeveiliging"
                subtitle="Preventief tegen vandalisme en diefstal"
                intro={
                    'Bij CAZA Security begrijpen we dat elk object uniek is en daarom specifieke beveiligingsbehoeften heeft. Wat die behoeften ook zijn: wij zorgen voor een veilige omgeving.\n\nHoe? Met constante bewaking en preventieve maatregelen. Deze passen we aan bij het karakter van jouw locatie. Of het nu gaat om kantoren, magazijnen of andere bedrijfsruimtes; we garanderen jouw rust en veiligheid.'
                }
                bullets={[
                    'Preventie van vandalisme en diefstal door controle van bezoekers en het beveiligen van gebouwen.',
                    'Risicobeheer: we voeren frequente controlerondes uit om potentiële gevaren te identificeren en te onderscheppen.',
                    'Objectbeveiliging helpt jou kosten te besparen door het voorkomen van gestolen of beschadigde goederen.',
                    '24/7 betrouwbare veiligheid: we staan dag en nacht paraat.'
                ]}
                imageSrc="/object.jpg"
                ctaText="Meer weten over objectbeveiliging?"
                ctaLink="/contact"
            >
                <p className="mt-4" style={{ color: '#1f2937' }}>Heb jij een object dat beveiligd moet worden? Bij ons vind je de beveiligingsoplossing die bij je past. Wil je meer informatie over objectbeveiliging? Wij zijn er voor je!</p>
            </ServiceLayout>
        </div>
    );
}