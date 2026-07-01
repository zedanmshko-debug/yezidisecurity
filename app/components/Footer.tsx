import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-light)' }}>YEZIDI Security</h3>
            <p className="text-gray-300 mb-4">
              Professionele beveiligingsdiensten voor al uw veiligheidsvraagstukken.
            </p>
            <div className="space-y-2 text-gray-300 text-xs">
              <p>📍 Gaffel 19, 6641 WV Beuningen</p>
              <p>📞 +31 6 14741104</p>
              <p>✉️ info@yezidisecurity.nl</p>
              <p>🏢 Kvk 90148770</p>
              <p>📑 ND 7659</p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-light)' }}>Diensten</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/diensten/objectbeveiliging" className="hover:text-white">Objectbeveiliging</Link></li>
              <li><Link to="/diensten/evenementenbeveiliging" className="hover:text-white">Evenementenbeveiliging</Link></li>
              <li><Link to="/diensten/zorgbeveiliging" className="hover:text-white">Zorgbeveiliging</Link></li>
              <li><Link to="/diensten/mobilesurveillance" className="hover:text-white">Mobiele surveillance</Link></li>
              <li><Link to="/diensten/bouwbeveiliging" className="hover:text-white">Bouwbeveiliging</Link></li>
              <li><Link to="/diensten/schoolbeveiliging" className="hover:text-white">Schoolbeveiliging</Link></li>
              <li><Link to="/diensten/winkelsurveillance" className="hover:text-white">Winkelsurveillance</Link></li>
              <li><Link to="/diensten/transportbeveiliging" className="hover:text-white">Transportbeveiliging</Link></li>
              <li><Link to="/diensten/opvangbeveiliging" className="hover:text-white">Opvangbeveiliging</Link></li>
              <li><Link to="/diensten/toezichtservice" className="hover:text-white">Toezichtservice</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-light)' }}>Bedrijf</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/overOns" className="hover:text-white">Over ons</Link></li>
              <li><Link to="/werkenBij" className="hover:text-white">Werken bij</Link></li>
              <li><Link to="/vacatureBeveiliger" className="hover:text-white">Vacatures</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-light)' }}>Contact</h4>
            <div className="space-y-3">
              <Link
                to="/contact"
                className="inline-block text-white px-4 py-2 rounded transition-colors"
                style={{
                  backgroundColor: 'var(--color-accent)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-secondary)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)';
                }}
              >
                Contact opnemen
              </Link>
              <p className="text-gray-300 text-sm">
                Neem contact op voor een vrijblijvende offerte of advies.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8" style={{ borderColor: 'var(--color-secondary)' }} />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} yezidi Security. Alle rechten voorbehouden.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/algemene-voorwaarden" className="hover:text-white">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
