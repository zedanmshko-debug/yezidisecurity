import type { Route } from "./+types/overOns.js";
import Banner from "../components/Banner.js";
import { useState } from "react";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Over Ons - yezidi Security" },
        { name: "description", content: "Maak kennis met yezidi Security: onze missie, waarden en het team dat veiligheid levert met discipline en zorg." },
    ];
}

export default function OverOns() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    function Accordion({ index, title, children }: { index: number; title: string; children: any }) {
        const open = openIndex === index;
        const contentRefId = `accordion-content-${index}`;

        return (
            <div className="rounded-lg overflow-hidden mb-3 bg-white shadow-sm" style={{ border: '1px solid #E6E6E6' }}>
                <button
                    aria-expanded={open}
                    aria-controls={contentRefId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="w-full flex items-center justify-between px-4 py-3 focus:outline-none transition-colors"
                    style={{ backgroundColor: open ? '#F3F6F8' : 'transparent' }}
                    onMouseOver={(e) => !open && (e.currentTarget.style.backgroundColor = '#F3F6F8')}
                    onMouseOut={(e) => !open && (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                    <span className="text-left font-semibold" style={{ color: 'var(--color-primary)' }}>{title}</span>
                    <svg className={`h-5 w-5 transform transition-transform ${open ? "rotate-180" : ""}`} style={{ color: 'var(--color-accent)' }} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
                    </svg>
                </button>

                {open && (
                    <div id={contentRefId} role="region" className="px-4 pb-4">
                        <div className="pt-2 text-sm" style={{ color: '#1f2937' }}>{children}</div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
            <Banner
                title="Over ons"
                subtitle="yezidi Security"
                backgroundImage="/service.jpg"
                showButtons={false}
                cardTitle="Gecertificeerd team"
                cardText="Ons team is professioneel getraind en werkt volgens strikte protocollen voor maximale veiligheid."
            />

            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start bg-white p-6 rounded-lg shadow-lg">
                        {/* Left narrow column: quick facts / vertical feel */}
                        <div className="hidden lg:flex flex-col gap-6">
                            <div className="rounded-lg p-4 shadow-sm" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                                <div className="text-sm font-semibold">Snel</div>
                                <div className="text-xl font-bold mt-1">30 min</div>
                                <div className="text-xs mt-1" style={{ opacity: 0.9 }}>Reactietijd</div>
                            </div>

                            <div className="rounded-lg p-4 shadow-sm" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                                <div className="text-sm font-semibold">Certificaat</div>
                                <div className="text-xl font-bold mt-1">100%</div>
                                <div className="text-xs mt-1" style={{ opacity: 0.9 }}>Gecertificeerd</div>
                            </div>
                        </div>

                        {/* Middle: main intro + image */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                            <div className="order-2 md:order-1">
                                <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>yezidi Security — Beveiliging met discipline</h2>
                                <p className="leading-relaxed" style={{ color: '#1f2937' }}>
                                    Wij combineren discipline met zorgvuldigheid. Of het nu gaat om objectbeveiliging, evenementenbeveiliging of preventief toezicht,
                                    we leveren maatwerk met een professioneel team.
                                </p>

                                <div className="mt-4 flex gap-3">
                                    <Link to="/diensten" className="inline-block text-white px-4 py-2 rounded-md shadow transition" style={{ backgroundColor: 'var(--color-primary)' }} onMouseOver={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'} onMouseOut={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-primary)'}>Onze diensten</Link>
                                    <Link to="/contact" className="inline-block px-4 py-2 rounded-md transition" style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }} onMouseOver={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = '#F3F6F8'} onMouseOut={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}>Contact</Link>
                                </div>
                            </div>

                            <div className="order-1 md:order-2 self-center">
                                <div className="rounded-lg overflow-hidden shadow-md md:-ml-6 transform transition-transform hover:-translate-y-1">
                                    <img src="/zorg.jpg" alt="Team yezidi Security" className="w-full h-56 object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8" style={{ backgroundColor: '#E9ECEE' }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Onze kernpunten</h3>
                            <p className="mb-4" style={{ color: '#1f2937' }}>
                                yezidi Security staat voor betrouwbaarheid, discipline en respect. We trainen ons team intensief, werken volgens protocollen en houden korte communicatielijnen met onze opdrachtgevers.
                            </p>

                            <div className="space-y-3">
                                <Accordion index={0} title="Missie">
                                    Beschermen met respect: het waarborgen van veiligheid zonder onnodige overlast — altijd professioneel en doelgericht.
                                </Accordion>

                                <Accordion index={1} title="Visie">
                                    Een samenleving waarin mensen en organisaties vertrouwen hebben dat hun veiligheid serieus wordt genomen en deskundig wordt uitgevoerd.
                                </Accordion>

                                <Accordion index={2} title="Aanpak">
                                    Risico-inventarisatie, duidelijke afspraken, getraind personeel en regelmatige rapportage — afgestemd op jouw situatie.
                                </Accordion>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 mt-6 md:mt-10 lg:mt-20">
                            <div className="rounded-lg p-6 shadow-lg bg-white border" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                                <h4 className="font-semibold text-lg" style={{ color: '#1f2937' }}>Ons team</h4>
                                <p className="text-sm mt-2" style={{ color: '#6b7280' }}>Een mix van ervaren beveiligers, coördinatoren en operationele planners met oog voor detail en service.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="rounded-lg p-4 shadow-lg transform transition-transform hover:-translate-y-1" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                                    <h4 className="font-semibold">Gecertificeerd</h4>
                                    <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.92)' }}>We voldoen aan alle wettelijke eisen en blijven trainen.</p>
                                </div>
                                <div className="rounded-lg p-4 shadow-lg transform transition-transform hover:-translate-y-1" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                                    <h4 className="font-semibold">Snel inzetbaar</h4>
                                    <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.92)' }}>Korte reactietijden en flexibele planning voor acute en structurele beveiliging.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>Wil je weten wat we voor jou kunnen betekenen?</h3>
                            <p className="mt-2" style={{ color: '#1f2937' }}>Vraag vrijblijvend een veiligheidsadvies aan of plan een kennismaking met ons operationeel team.</p>
                        </div>

                        <div className="shrink-0">
                            <Link to="/contact" className="inline-block text-white px-5 py-3 rounded-md shadow transition" style={{ backgroundColor: 'var(--color-primary)' }} onMouseOver={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'} onMouseOut={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-primary)'}>Contact opnemen</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}