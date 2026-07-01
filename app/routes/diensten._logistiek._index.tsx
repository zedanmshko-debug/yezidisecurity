import type { Route } from "./+types/diensten._logistiek._index.js";
import Banner from "../components/Banner.js";
import ServiceLayout from "../components/ServiceLayout.js";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Logistieke beveiliging - Yezidi Security" },
        { name: "description", content: "Beveiliging voor distributiecentra, magazijnen en logistieke hubs: toegangscontrole, bewaking, inventarisbescherming en risicomanagement." },
    ];
}

export default function LogistiekeBeveiliging() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-light)' }}>
            <Banner
                title="LOGISTIEKE BEVEILIGING"
                subtitle="YEZIDI SECURITY"
                backgroundImage="/logisitek.jpg"
                showButtons={false}
                cardTitle="Logistieke beveiliging"
                cardText="Toegespitst op distributiecentra en magazijnen: toegangscontrole, surveillance en voorraadbescherming."
            />
            <ServiceLayout
                title="Logistieke beveiliging"
                subtitle="Beveiliging voor logistieke operaties"
                intro={
                    'Wij beschermen jouw logistieke processen met op maat gemaakte beveiligingsoplossingen. Van toegangscontrole tot CCTV-integratie en nachtelijke patrouilles — onze aanpak minimaliseert risico, voorkomt voorraadverlies en zorgt voor continuïteit in jouw supply chain.'
                }
                bullets={[
                    'Toegangsbeheer en identiteitscontrole bij docks en ingangen.',
                    '24/7 CCTV-monitoring en remote surveillance.',
                    'Mobiele patrouilles en nachtelijke bewaking.',
                    'Voorraadbescherming en anti-diefstal protocollen.',
                    'Incident response en samenwerking met logistieke teams.',
                    'Risicoanalyses en op maat gemaakte beveiligingsplannen.'
                ]}
                imageSrc="/logisitek.jpg"
                ctaText="Vraag een beveiligingsadvies aan"
                ctaLink="/contact"
            />
        </div>
    );
}