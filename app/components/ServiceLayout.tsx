import { Link } from "react-router";

type Props = {
  title: string;
  subtitle?: string;
  intro: string;
  bullets?: string[];
  imageSrc: string;
  ctaText?: string;
  ctaLink?: string;
  children?: React.ReactNode;
};

export default function ServiceLayout({
  title,
  subtitle,
  intro,
  bullets = [],
  imageSrc,
  ctaText = "Neem contact op",
  ctaLink = "/contact",
  children,
}: Props) {
  return (
    <section className="py-16" style={{ backgroundColor: '#E9ECEE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:flex lg:items-stretch">
          <div className="lg:w-1/2">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-80 object-cover sm:h-96 lg:h-full lg:object-center"
            />
          </div>

          <div className="p-8 lg:w-1/2">
            <div className="max-w-xl">
              {subtitle && <p className="text-sm font-semibold uppercase mb-2" style={{ color: '#6E9FC1' }}>{subtitle}</p>}
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#395A7F' }}>{title}</h2>

              <p className="mb-6 text-lg leading-relaxed" style={{ color: '#1f2937' }}>{intro}</p>

              {bullets.length > 0 && (
                <ul className="space-y-4 mb-6">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 mt-1 inline-flex items-center justify-center h-9 w-9 rounded-md text-white font-bold" style={{ backgroundColor: '#6E9FC1' }}>✓</span>
                      <span style={{ color: '#1f2937' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {children}

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link to={ctaLink} className="inline-flex items-center justify-center text-white px-6 py-3 rounded-lg font-semibold transition" style={{ backgroundColor: '#395A7F' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6E9FC1'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#395A7F'}>
                  {ctaText}
                </Link>
                <Link to="/diensten" className="text-sm underline" style={{ color: '#ACACAC' }}>Terug naar diensten</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
