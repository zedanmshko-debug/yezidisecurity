import { Link, useLocation } from "react-router";
import { useState } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDienstenDropdownOpen, setIsDienstenDropdownOpen] = useState(false);
    const location = useLocation();
    const pathname = location?.pathname ?? "";

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/" || pathname === "/home";
        if (path === "/diensten") return pathname.startsWith("/diensten");
        return pathname === path;
    };

    return (
        <nav className="shadow-sm border-b relative" style={{ backgroundColor: 'var(--color-primary)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center h-20">
                    <div className="shrink-0">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="/public/logoWhiteTransparant.png"
                                alt="CAZA Security Logo"
                                className="h-10 w-10 sm:h-15 sm:w-15"
                            />
                            <h1 className="text-xl sm:text-2xl font-bold text-white underline">YEZIDI SECURITY</h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1 ">
                            <Link to="/" className={`px-3 py-2 rounded-md text-sm transition-colors font-bold ${isActive("/") ? 'text-white' : 'text-gray-300'}`}
                                style={isActive("/") ? { backgroundColor: 'var(--color-accent)' } : {}}
                            >
                                Home
                            </Link>

                            {/* Diensten Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsDienstenDropdownOpen(true)}
                                onMouseLeave={() => setIsDienstenDropdownOpen(false)}
                            >
                                {/* Make the top-level 'Diensten' a real link while keeping hover dropdown */}
                                <Link
                                    to="/diensten"
                                    className={`px-3 py-2 rounded-md text-sm transition-colors font-bold flex items-center ${isActive("/diensten") ? 'text-white' : 'text-gray-300'}`}
                                    style={isActive("/diensten") ? { backgroundColor: 'var(--color-accent)' } : {}}
                                >
                                    Diensten
                                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>

                                {/* Dropdown Menu */}
                                {isDienstenDropdownOpen && (
                                    <div
                                        onMouseEnter={() => setIsDienstenDropdownOpen(true)}
                                        onMouseLeave={() => setIsDienstenDropdownOpen(false)}
                                        className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                                    >
                                        <div className="py-2">
                                            <Link
                                                to="/diensten/objectbeveiliging"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Objectbeveiliging
                                            </Link>
                                            <Link
                                                to="/diensten/opvangbeveiliging"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Opvangbeveiliging
                                            </Link>
                                            <Link
                                                to="/diensten/bouwbeveiliging"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Bouwbeveiliging
                                            </Link>
                                            <Link
                                                to="/diensten/evenementenbeveiliging"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Evenementenbeveiliging
                                            </Link>
                                            <Link
                                                to="/diensten/transportbeveiliging"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Transportbeveiliging
                                            </Link>
                                            <Link
                                                to="/diensten/logistiek"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Logistieke beveiliging
                                            </Link>
                                            <Link
                                                to="/diensten/schoolbeveiliging"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Schoolbeveiliging
                                            </Link>
                                            <Link
                                                to="/diensten/zorgbeveiliging"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Zorgbeveiliging
                                            </Link>
                                            <Link
                                                to="/diensten/mobilesurveillance"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Mobiele Surveillance
                                            </Link>
                                            <Link
                                                to="/diensten/winkelsurveillance"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Winkel Surveillance
                                            </Link>
                                            <Link
                                                to="/diensten/toezichtservice"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors dropdown-item-hover"
                                            >
                                                Toezichthouders / Servicemedewerkers / BHV
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link to="/overOns" className={`px-3 py-2 rounded-md text-sm transition-colors font-bold ${isActive("/overOns") ? 'text-white' : 'text-gray-300'}`}
                                style={isActive("/overOns") ? { backgroundColor: 'var(--color-accent)' } : {}}>Over ons</Link>
                            <Link to="/werkenBij" className={`px-3 py-2 rounded-md text-sm transition-colors font-bold ${isActive("/werkenBij") ? 'text-white' : 'text-gray-300'}`}
                                style={isActive("/werkenBij") ? { backgroundColor: 'var(--color-accent)' } : {}}>Werken bij</Link>
                            <Link to="/contact" className={`px-3 py-2 rounded-md text-sm transition-colors font-bold ${isActive("/contact") ? 'text-white' : 'text-gray-300'}`}
                                style={isActive("/contact") ? { backgroundColor: 'var(--color-accent)' } : {}}>Contact</Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset mobile-menu-button"
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-darkest)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                            }}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
                        <Link
                            to="/home"
                            className={`block px-3 py-2 rounded-md text-base transition-colors font-bold ${isActive("/") ? 'text-blue-600' : 'text-gray-900'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>

                        {/* Mobile Diensten Dropdown */}
                        <div>
                            <div className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors font-bold ${isActive("/diensten") ? 'text-blue-600' : 'text-gray-900'}`}>
                                <Link
                                    to="/diensten"
                                    className="text-base"
                                    onClick={() => { setIsMenuOpen(false); setIsDienstenDropdownOpen(false); }}
                                >
                                    Diensten
                                </Link>

                                <button
                                    onClick={() => setIsDienstenDropdownOpen(!isDienstenDropdownOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700"
                                    aria-label="Toggle diensten submenu"
                                >
                                    <svg
                                        className={`h-4 w-4 transition-transform ${isDienstenDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {isDienstenDropdownOpen && (
                                <div className="pl-6 space-y-1">
                                    <Link
                                        to="/diensten/objectbeveiliging"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Objectbeveiliging
                                    </Link>
                                    <Link
                                        to="/diensten/opvangbeveiliging"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Opvangbeveiliging
                                    </Link>
                                    <Link
                                        to="/diensten/bouwbeveiliging"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Bouwbeveiliging
                                    </Link>
                                    <Link
                                        to="/diensten/evenementenbeveiliging"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Evenementenbeveiliging
                                    </Link>
                                    <Link
                                        to="/diensten/transportbeveiliging"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Transportbeveiliging
                                    </Link>
                                    <Link
                                        to="/diensten/logistiek"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Logistieke beveiliging
                                    </Link>
                                    <Link
                                        to="/diensten/schoolbeveiliging"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Schoolbeveiliging
                                    </Link>
                                    <Link
                                        to="/diensten/zorgbeveiliging"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Zorgbeveiliging
                                    </Link>
                                    <Link
                                        to="/diensten/mobilesurveillance"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Mobiele Surveillance
                                    </Link>
                                    <Link
                                        to="/diensten/winkelsurveillance"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Winkel Surveillance
                                    </Link>
                                    <Link
                                        to="/diensten/toezichtservice"
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Toezichthouders / Servicemedewerkers / BHV
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/overOns"
                            className={`block px-3 py-2 rounded-md text-base transition-colors font-bold ${isActive("/overOns") ? 'text-blue-600' : 'text-gray-900'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Over ons
                        </Link>
                        <Link
                            to="/werkenBij"
                            className={`block px-3 py-2 rounded-md text-base transition-colors font-bold ${isActive("/werkenBij") ? 'text-blue-600' : 'text-gray-900'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Werken bij
                        </Link>
                        <Link
                            to="/contact"
                            className={`block px-3 py-2 rounded-md text-base transition-colors font-bold ${isActive("/contact") ? 'text-blue-600' : 'text-gray-900'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
