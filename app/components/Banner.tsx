import { Link } from "react-router";
import { motion } from "framer-motion";

interface BannerProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    showButtons?: boolean;
    buttonText1?: string;
    buttonText2?: string;
    buttonLink1?: string;
    buttonLink2?: string;
    cardTitle?: string;
    cardText?: string;
}

export default function Banner({
    title,
    subtitle,
    backgroundImage,
    showButtons = false,
    buttonText1 = "Over ons",
    buttonText2 = "Neem contact op",
    buttonLink1 = "/overOns",
    buttonLink2 = "/contact"
    , cardTitle = "ERVAREN & GEKWALIFICEERD",
    cardText = "Beveiligers met bewezen expertise. Sterk in optreden, helder in communicatie."
}: BannerProps) {
    // split title into two parts: left (primary) and right (accent)
    const parts = title ? title.split(' ') : [];
    const left = parts.length > 1 ? parts.slice(0, parts.length - 1).join(' ') : title;
    const right = parts.length > 1 ? parts[parts.length - 1] : '';

    return (
        <section className="relative h-160 bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-800/70 to-transparent"></div>
            </div>

            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left side - Content */}
                        <div className="text-left space-y-6">
                            {subtitle && (
                                <motion.p
                                    className="text-blue-300 text-lg font-semibold tracking-wide uppercase"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {subtitle}
                                </motion.p>
                            )}

                            <motion.h1
                                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {left && <span className="block text-white" style={{ lineHeight: 0.95 }}>{left}</span>}
                                {right ? (
                                    <span className="block text-blue-300" style={{ marginTop: '-0.12em', lineHeight: 0.95 }}>{right}</span>
                                ) : null}
                            </motion.h1>

                            {/* Discount Information */}
                            <motion.div
                                className="rounded-lg p-4 max-w-md"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                style={{ background: 'linear-gradient(180deg, rgba(12,34,56,0.85), rgba(18,44,68,0.8))', border: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                <div className="text-blue-300 text-sm mb-1">SECURITY</div>
                                <div className="text-2xl font-bold" style={{ color: '#FFD24D', marginBottom: '0.35rem' }}>{cardTitle}</div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {cardText}
                                </p>
                            </motion.div>

                            {showButtons && (
                                <motion.div
                                    className="flex flex-col sm:flex-row gap-4 mt-8"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                >
                                    <Link
                                        to={buttonLink1}
                                        className="inline-flex items-center justify-center text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg"
                                        style={{ backgroundColor: 'var(--color-primary)' }}
                                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'}
                                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-primary)'}
                                    >
                                        {buttonText1}
                                    </Link>

                                    <Link
                                        to={buttonLink2}
                                        className="inline-flex items-center justify-center text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                                        style={{ border: '2px solid white' }}
                                    >
                                        {buttonText2}
                                    </Link>
                                </motion.div>
                            )}
                        </div>

                        {/* Right side*/}
                        <div className="relative hidden lg:block">
                            <motion.div
                                className="absolute bottom-0 right-0"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                {/* Placeholder for security guard */}
                                <div className="w-64 h-64 bg-linear-to-br from-blue-600/20 to-transparent rounded-full flex items-center justify-center border border-blue-400/30">
                                    <div className="text-center">
                                        <div><img src="../public/logoWhiteTransparant.png"></img></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}
