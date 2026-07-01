import type { Route } from "./+types/diensten.schoolbeveiliging._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "School Beveiliging - Yezidi Security" },
        { name: "description", content: "Professionele schoolbeveiliging van Yezidi Security voor onderwijsinstellingen." },
    ];
}

export default function SchoolBeveiliging() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
            <Banner
                title="SCHOOL BEVEILIGING"
                subtitle="Yezidi SECURITY"
                backgroundImage="/school.jpg"
                showButtons={false}
                cardTitle="Schoolbeveiliging"
                cardText="Veilige leeromgevingen met toezicht, toegangscontrole en samenwerking met personeel en ouders."
            />
            <ServiceLayout
                title="Schoolbeveiliging"
                subtitle="Veiligheid op school"
                intro={
                    'Wij creëren veilige leeromgevingen door toezicht op terreinen, veilige toegangscontrole en duidelijke procedures. Samen met schoolleiding en ouders werken we incidenten actief tegen.'
                }
                bullets={[
                    'Toezicht op schoolterreinen en gebouwen.',
                    'Veilige in- en uitgangen en bezoekerscontrole.',
                    'Preventie van incidenten en snelle interventie.',
                    'Samenwerking met schoolleiding en lokale partners.'
                ]}
                imageSrc="/school.jpg"
                ctaText="Meer weten over schoolbeveiliging?"
                ctaLink="/contact"
            />
        </div>
    );
}