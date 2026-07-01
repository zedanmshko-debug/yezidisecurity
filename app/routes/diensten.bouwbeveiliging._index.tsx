import type { Route } from "./+types/diensten.bouwbeveiliging._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Bouw Beveiliging - Yezidi Security" },
        { name: "description", content: "Professionele bouwbeveiliging van Yezidi Security voor uw bouwproject." },
    ];
}

export default function BouwBeveiliging() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
            <Banner
                title="BOUW BEVEILIGING"
                subtitle="Yezidi SECURITY"
                backgroundImage="/bouw.jpg"
                showButtons={false}
                cardTitle="Bouwbeveiliging"
                cardText="Bescherming van bouwplaatsen tegen diefstal en vandalisme met toezicht en toegangscontrole."
            />
            <ServiceLayout
                title="Bouwbeveiliging"
                subtitle="Bescherming van bouwplaatsen"
                intro={
                    'Op bouwplaatsen is continu toezicht essentieel om materiaalverlies en vertraging te voorkomen. Onze beveiligers zorgen voor zichtbaarheid, gecontroleerde toegang en duidelijke rapportage — afgestemd op jouw bouwproject.'
                }
                bullets={[
                    'Zichtbare aanwezigheid en afschrikking tegen diefstal.',
                    'Toegangscontrole en registratie van personeel en leveranciers.',
                    'Nachtelijke patrouilles en toezicht tijdens niet-werktijden.',
                    'Duidelijke rapportages en samenwerking met projectleiding.'
                ]}
                imageSrc="/bouw.jpg"
                ctaText="Meer weten over bouwbeveiliging?"
                ctaLink="/contact"
            />
        </div>
    );
}