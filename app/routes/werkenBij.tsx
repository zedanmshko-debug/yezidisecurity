import React, { useState } from "react";
import type { Route } from "./+types/werkenBij.js";
import { Link } from "react-router";
import Banner from "../components/Banner.js";
import ContactForm from "../components/ContactForm.js";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Werken bij - Yezidi Security" },
        { name: "description", content: "Vacatures bij Yezidi Security: voor zowel zzp'ers als kandidaten in loondienst. Bekijk functies, voordelen en hoe je kunt solliciteren." },
    ];
}

export default function WerkenBij() {
    const [tab, setTab] = useState<"zzp" | "loondienst">("zzp");

    const zzpContent = (
        <>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>ZZP / Samenwerking als zelfstandige</h3>
            <p className="mb-4" style={{ color: '#1f2937' }}>Wij werken samen met zelfstandige professionals op basis van duidelijke opdrachten en professionele afspraken. Ben je flexibel, ervaren en klantgericht? Dan horen we graag van je.</p>

            <h4 className="text-lg font-semibold mt-4" style={{ color: 'var(--color-primary)' }}>Belangrijk in één oogopslag</h4>
            <ul className="list-disc list-inside mb-4" style={{ color: '#1f2937' }}>
                <li>Relevante diploma's/certificaten (bijv. Beveiliger 2)</li>
                <li>VOG op verzoek</li>
                <li>Aansprakelijkheidsverzekering waar van toepassing</li>
                <li>Eigen vervoer en bereikbaarheid</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4" style={{ color: 'var(--color-primary)' }}>Wat kun je verwachten?</h4>
            <ul className="list-disc list-inside mb-6" style={{ color: '#1f2937' }}>
                <li>Professionele samenwerking met duidelijke opdrachten</li>
                <li>Voorbereiding en ondersteuning vanuit kantoor</li>
                <li>Eerlijke vergoedingen en tijdige betaling</li>
                <li>Toegang tot relevante opleidingen en trainingen</li>
                <li>Gebruik van moderne plannings- en communicatie-tools</li>
            </ul>
        </>
    );

    const loondienstContent = (
        <>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Loondienst</h3>
            <p className="mb-4" style={{ color: '#1f2937' }}>Kort: we bieden vaste en flexibele contracten met begeleiding en opleidingsmogelijkheden. Geschikt als je graag onderdeel bent van een team en wilt doorgroeien.</p>

            <h4 className="text-lg font-semibold mt-4" style={{ color: 'var(--color-primary)' }}>Arbeidsvoorwaarden (kort)</h4>
            <ul className="list-disc list-inside mb-4" style={{ color: '#1f2937' }}>
                <li>Salaris en uren in overleg</li>
                <li>Arbeidsvoorwaarden conform Particuliere Beveiliging</li>
                <li>Reiskostenvergoeding waar relevant</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4" style={{ color: 'var(--color-primary)' }}>Vereisten (kort)</h4>
            <ul className="list-disc list-inside mb-6" style={{ color: '#1f2937' }}>
                <li>Relevante diploma's/certificaten</li>
                <li>VOG op verzoek</li>
                <li>Representatief en communicatief</li>
            </ul>
        </>
    );

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-light)' }}>
            <Banner
                title="WERKEN BIJ"
                subtitle="YEZIDI SECURITY"
                backgroundImage="/service.jpg"
                showButtons={false}
                cardTitle="Werken bij"
                cardText="Word onderdeel van ons team: training, begeleiding en doorgroeimogelijkheden in beveiliging."
            />

            <main className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Intro area */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--color-primary)' }}>Werken bij Yezidi Security</h1>
                            <p className="text-lg mb-6" style={{ color: '#1f2937' }}>
                                Wil jij bijdragen aan veilige omgevingen met vakmanschap en respect? Bij Yezidi Security zoeken we betrokken
                                beveiligers en zelfstandige professionals die integer, klantgericht en betrouwbaar werken. Hieronder vind je
                                een korte indruk van samenwerken met ons — voor actuele vacatures en details klik je op "Bekijk vacatures".
                            </p>

                            <div className="flex flex-wrap gap-3 items-center">
                                <Link to="/vacatureBeveiliger" className="inline-block text-white px-6 py-3 rounded-lg font-semibold transition-colors" style={{ backgroundColor: 'var(--color-primary)' }} onMouseOver={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'} onMouseOut={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-primary)'}>
                                    Bekijk vacatures
                                </Link>
                                <Link to="/werkenBij" className="text-sm underline" style={{ color: 'var(--color-gray)' }}>Algemene info</Link>
                            </div>
                        </div>

                        <div className="order-first lg:order-last">
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                <img src="/service.jpg" alt="Werken bij Yezidi Security" className="w-full h-64 object-cover" />
                            </div>
                        </div>
                    </section>

                    {/* Quick perks cards */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="p-6 rounded-xl shadow-sm bg-white">
                            <div className="text-3xl mb-2">💼</div>
                            <h5 className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>Duidelijke opdrachten</h5>
                            <p className="text-sm" style={{ color: 'var(--color-darkest)' }}>Transparante taken en verwachtingen voor elk project.</p>
                        </div>

                        <div className="p-6 rounded-xl shadow-sm bg-white">
                            <div className="text-3xl mb-2">🎓</div>
                            <h5 className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>Opleidingen</h5>
                            <p className="text-sm" style={{ color: 'var(--color-darkest)' }}>Toegang tot relevante trainingen en certificaten.</p>
                        </div>

                        <div className="p-6 rounded-xl shadow-sm bg-white">
                            <div className="text-3xl mb-2">🤝</div>
                            <h5 className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>Samenwerking</h5>
                            <p className="text-sm" style={{ color: 'var(--color-darkest)' }}>Professionele ondersteuning en heldere communicatie.</p>
                        </div>

                        <div className="p-6 rounded-xl shadow-sm bg-white">
                            <div className="text-3xl mb-2">⚖️</div>
                            <h5 className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>Fair vergoeding</h5>
                            <p className="text-sm" style={{ color: 'var(--color-darkest)' }}>Eerlijke betalingen en afspraken volgens de markt.</p>
                        </div>
                    </section>

                    {/* Tabbed ZZP / Loondienst */}
                    <section className="bg-transparent rounded-lg p-6 mb-12">
                        <div className="flex gap-3 mb-6">
                            <button
                                onClick={() => setTab('zzp')}
                                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${tab === 'zzp' ? 'text-white' : 'text-gray-700'}`}
                                style={{ backgroundColor: tab === 'zzp' ? 'var(--color-primary)' : 'transparent', border: tab === 'zzp' ? 'none' : '1px solid rgba(0,0,0,0.06)' }}
                                onMouseOver={(e) => {
                                    if (tab === 'zzp') (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)';
                                    else (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.04)';
                                }}
                                onMouseOut={(e) => {
                                    (e.currentTarget as HTMLElement).style.backgroundColor = tab === 'zzp' ? 'var(--color-primary)' : 'transparent';
                                }}
                            >
                                ZZP / Zelfstandige
                            </button>

                            <button
                                onClick={() => setTab('loondienst')}
                                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${tab === 'loondienst' ? 'text-white' : 'text-gray-700'}`}
                                style={{ backgroundColor: tab === 'loondienst' ? 'var(--color-primary)' : 'transparent', border: tab === 'loondienst' ? 'none' : '1px solid rgba(0,0,0,0.06)' }}
                                onMouseOver={(e) => {
                                    if (tab === 'loondienst') (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)';
                                    else (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.04)';
                                }}
                                onMouseOut={(e) => {
                                    (e.currentTarget as HTMLElement).style.backgroundColor = tab === 'loondienst' ? 'var(--color-primary)' : 'transparent';
                                }}
                            >
                                Loondienst
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-2 border-2 rounded-lg p-6 bg-white" style={{ borderColor: 'var(--color-primary)' }}>
                                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                                    {tab === 'zzp' ? zzpContent : loondienstContent}
                                </motion.div>
                            </div>

                            <aside className="rounded-2xl p-6 shadow-md self-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                                {tab === 'zzp' ? (
                                    <>
                                        <h5 className="font-semibold mb-3 text-white">Snel aanmelden</h5>
                                        <p className="mb-4" style={{ color: 'var(--color-secondary)' }}>Interesse als zzp'er? Stuur een korte motivatie, je cv en relevante certificaten via ons contactformulier of per e-mail.</p>
                                        <Link to="/vacatureBeveiliger" className="inline-block text-white px-4 py-2 rounded-lg font-semibold transition-colors" style={{ backgroundColor: 'var(--color-accent)' }} onMouseOver={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-secondary)'} onMouseOut={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'}>
                                            Naar vacature / aanmelden
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <h5 className="font-semibold mb-3 text-white">Direct solliciteren</h5>
                                        <p className="mb-4" style={{ color: 'var(--color-secondary)' }}>Interesse in een functie in loondienst? Bekijk onze openstaande vacatures en solliciteer direct.</p>
                                        <Link to="/vacatureBeveiliger" className="inline-block text-white px-4 py-2 rounded-lg font-semibold transition-colors" style={{ backgroundColor: 'var(--color-accent)' }} onMouseOver={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-secondary)'} onMouseOut={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'}>
                                            Naar vacatures
                                        </Link>
                                    </>
                                )}
                            </aside>
                        </div>
                    </section>

                    <section className="py-6" style={{ backgroundColor: 'var(--color-light)' }}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Welke diensten en rollen</h4>
                                <p className="mb-4" style={{ color: 'var(--color-darkest)' }}>We hebben regelmatig opdrachten in de volgende categorieën:</p>
                                <ul className="list-disc list-inside mb-6" style={{ color: 'var(--color-darkest)' }}>
                                    <li>Objectbeveiliging</li>
                                    <li>Opvangbeveiliging</li>
                                    <li>Bouwbeveiliging</li>
                                    <li>Evenementenbeveiliging</li>
                                    <li>Transportbeveiliging</li>
                                    <li>Zorgbeveiliging</li>
                                    <li>Mobiele en winkel surveillance</li>
                                </ul>

                                <div className="mt-6">
                                    <motion.img
                                        src="/service.jpg"
                                        alt="Diensten en rollen"
                                        className="w-full rounded-xl shadow-md object-cover h-48 sm:h-64"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--color-accent)' }}>Vragen of meer informatie</h4>
                                <p className="mb-4" style={{ color: 'var(--color-darkest)' }}>Voor vragen kun je direct contact opnemen met ons kantoor. We helpen je graag met details over specifieke functies, roosterwensen en opleidingsmogelijkheden.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </section>

                    <div className="pb-24"></div>
                </div>
            </main>
        </div>
    );
}