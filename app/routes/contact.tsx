import type { Route } from "./+types/contact.js";
import Banner from "../components/Banner.js";
import ContactForm from "../components/ContactForm.js";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact - yezidi Security" },
        { name: "description", content: "Neem contact op met yezidi Security voor al uw beveiligingsvragen." },
    ];
}

export default function Contact() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-light)' }}>
            <Banner
                title="CONTACT"
                subtitle="YEZIDI SECURITY"
                backgroundImage="/service.jpg"
                showButtons={false}
                cardTitle="Neem contact op"
                cardText="Bel, mail of vul het formulier in voor advies, een offerte of directe ondersteuning."
            />

            <section className="py-16" style={{ backgroundColor: 'var(--color-light)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <ContactForm />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            {/* Contact Information */}
                            <div className="bg-white rounded-2xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>Contactgegevens</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-4" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>Adres</p>
                                            <p style={{ color: '#1f2937' }}>Gaffel 19, 6641 WV Beuningen</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-4" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>E-mail</p>
                                            <p style={{ color: '#1f2937' }}>info@yezidisecurity.nl</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-4" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>Telefoon</p>
                                            <p style={{ color: '#1f2937' }}>06-14741104</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="bg-white rounded-2xl p-2 shadow-2xl">
                                <iframe
                                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=nl&amp;q=Gaffel%2019,%206641%20WV%20Beuningen&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="yezidi Security Locatie"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Complaint Form Download Section */}
            <section className="py-8" style={{ backgroundColor: 'var(--color-light)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="flex items-center space-x-4">
                            <svg className="w-8 h-8" style={{ color: '#6E9FC1' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>Klachtenformulier</h3>
                                <p className="text-gray-700 mb-3">
                                    Heeft u een klacht over onze dienstverlening? Download ons klachtenformulier en stuur het ingevuld naar ons retour. Wij nemen uw feedback serieus en zorgen voor een snelle afhandeling.
                                </p>
                                <a
                                    href="/YezidiKlachtenFormulier.pdf"
                                    download="YezidiKlachtenFormulier.pdf"
                                    aria-label="Download klachtenformulier (PDF)"
                                    className="inline-flex items-center px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200"
                                    style={{ backgroundColor: 'var(--color-primary)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Klachtenformulier downloaden (PDF)
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}