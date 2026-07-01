import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!email || !message) {
            setError("Vul alstublieft een geldig e-mailadres en bericht in.");
            return;
        }

        try {
            const env = (import.meta as any).env || {};

            let endpoint = '/api/send-email';
            const fallbackEndpoint = 'https://caza-security.vercel.app/api/send-email';

            if (env?.VITE_MAIL_ENDPOINT) {
                endpoint = env.VITE_MAIL_ENDPOINT;
            } else if (typeof window !== 'undefined') {
                const host = window.location.hostname;
                const isLocal = host === 'localhost' || host === '127.0.0.1' || host === '';

                if (isLocal) {
                    endpoint = 'http://localhost:3000/send-email';
                } else {
                    endpoint = '/api/send-email';
                }
            }

            console.log('Sending email to endpoint:', endpoint);

            // Helper to POST and return parsed JSON or throw with text
            async function postTo(ep: string) {
                const r = await fetch(ep, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, phone, company, email, message }),
                });

                const contentType = r.headers.get("content-type") || "";
                if (contentType.includes("application/json")) {
                    return { res: r, data: await r.json() };
                }
                const text = await r.text();
                throw { res: r, text };
            }

            let res, data;
            try {
                ({ res, data } = await postTo(endpoint));
            } catch (firstErr: any) {
                const status = firstErr?.res?.status;
                const txt = firstErr?.text || firstErr?.message || '';
                console.warn('First send attempt failed', { status, txt });

                if ((status === 404 || txt.includes('<!DOCTYPE html')) && endpoint !== fallbackEndpoint) {
                    console.log('Attempting fallback endpoint:', fallbackEndpoint);
                    try {
                        ({ res, data } = await postTo(fallbackEndpoint));
                    } catch (secondErr: any) {
                        const s2 = secondErr?.res?.status;
                        const t2 = secondErr?.text || secondErr?.message || '';
                        throw new Error(`Both endpoints failed. primary: ${status} ${txt.slice(0, 200)}; fallback: ${s2} ${t2.slice(0, 200)}`);
                    }
                } else {
                    throw new Error(typeof firstErr === 'string' ? firstErr : (firstErr?.text || firstErr?.message || 'Unknown error'));
                }
            }

            if (!res.ok) throw new Error(data?.error || "Er is iets misgegaan");
            if (!res.ok) throw new Error(data?.error || "Er is iets misgegaan");

            setSuccess("Bericht succesvol verzonden. We nemen zo snel mogelijk contact op.");
            setName("");
            setPhone("");
            setCompany("");
            setEmail("");
            setMessage("");
        } catch (err: any) {
            console.error('Contact form error:', err);
            console.error('Error details:', {
                message: err.message,
                name: err.name,
                stack: err.stack
            });

            let errorMessage = "Er is een fout opgetreden tijdens het verzenden van het bericht.";

            if (err.message?.includes('Failed to fetch')) {
                errorMessage = "Kan geen verbinding maken met de server. Controleer je internetverbinding.";
            } else if (err.message?.includes('Non-JSON response')) {
                errorMessage = "De server gaf een onverwacht antwoord. Probeer het later opnieuw.";
            } else if (err.message?.includes('Invalid JSON')) {
                errorMessage = "De server antwoordde met ongeldige data. Probeer het later opnieuw.";
            } else if (err.message) {
                errorMessage = err.message;
            }

            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>Neem contact op</h3>
                <p className="mb-8" style={{ color: '#1f2937' }}>
                    Wil je meer weten, heb je vragen, of ben je klaar om jouw veiligheid naar een hoger niveau te tillen? Neem contact met ons op.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                type="text"
                                placeholder="Naam"
                                className="w-full px-4 py-3 border rounded-lg transition-colors"
                                style={{
                                    borderColor: 'var(--color-gray)',
                                    color: 'var(--color-primary)'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--color-gray)'}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                name="phone"
                                type="tel"
                                placeholder="Telefoonnummer"
                                className="w-full px-4 py-3 border rounded-lg transition-colors"
                                style={{
                                    borderColor: 'var(--color-gray)',
                                    color: 'var(--color-primary)'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--color-gray)'}
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <input
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                name="company"
                                type="text"
                                placeholder="Bedrijfsnaam"
                                className="w-full px-4 py-3 border rounded-lg transition-colors"
                                style={{
                                    borderColor: 'var(--color-gray)',
                                    color: 'var(--color-primary)'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--color-gray)'}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                type="email"
                                placeholder="Emailadres"
                                className="w-full px-4 py-3 border rounded-lg transition-colors"
                                style={{
                                    borderColor: 'var(--color-gray)',
                                    color: 'var(--color-primary)'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--color-gray)'}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="message"
                            placeholder="Bericht"
                            rows={5}
                            className="w-full px-4 py-3 border rounded-lg transition-colors resize-none"
                            style={{
                                borderColor: 'var(--color-gray)',
                                color: 'var(--color-primary)'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-gray)'}
                        ></textarea>
                    </motion.div>

                    {error && <div className="text-red-600">{error}</div>}
                    {success && <div className="text-green-600">{success}</div>}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center group"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                            onMouseOver={(e) => !loading && (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
                            onMouseOut={(e) => !loading && (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
                        >
                            {loading ? 'Versturen...' : 'Verstuur bericht'}
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
}
