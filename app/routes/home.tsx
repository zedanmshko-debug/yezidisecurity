import type { Route } from "./+types/home.js";
import { Link } from "react-router";
import Banner from "../components/Banner.js";
import ContactForm from "../components/ContactForm.js";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "yezidi Security - Beveiliging met discipline en daadkracht" },
    { name: "description", content: "BEVEILIGING MET DISCIPLINE EN DAADKRACHT - yezidi Security levert professionele beveiligingsservices met een hands-on mentaliteit voor mensen, organisaties en gemeenschappen." },
    { property: "og:title", content: "yezidi Security - Beveiliging met discipline en daadkracht" },
    { property: "og:description", content: "BEVEILIGING MET DISCIPLINE EN DAADKRACHT - yezidi Security levert professionele beveiligingsservices met een hands-on mentaliteit voor mensen, organisaties en gemeenschappen." },
    { property: "og:image", content: "/logoTransparant.png" },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: "yezidi Security - Beveiliging met discipline en daadkracht" },
    { name: "twitter:description", content: "BEVEILIGING MET DISCIPLINE EN DAADKRACHT - yezidi Security levert professionele beveiligingsservices met een hands-on mentaliteit voor mensen, organisaties en gemeenschappen." },
    { name: "twitter:image", content: "/logoTransparant.png" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E9ECEE' }}>
      {/* Hero Section */}
      <Banner
        title="SECURITY SERVICES"
        subtitle="EXPERTS AND SOLUTIONS"
        backgroundImage="/bannerImg.jpg"
        showButtons={true}
        buttonText1="Over ons"
        buttonText2="Neem contact op"
        buttonLink1="/overOns"
        buttonLink2="/contact"
        cardTitle="Veiligheid op maat"
        cardText="Integrale beveiligingsoplossingen voor organisaties en evenementen — betrouwbaar en schaalbaar."
      />



      {/* Mission & Vision Section */}
      <section className="py-20" style={{ backgroundColor: '#E9ECEE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              className="text-sm uppercase tracking-wider font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Wie wij zijn
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: '#1f2937' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Veiligheid is meer dan een dienst,<br />
              <span style={{ color: 'var(--color-primary)' }}>het is onze passie</span>
            </motion.h2>
          </div>

          {/* Mobile: Asymmetric layout, Desktop: 3 columns */}
          <div className="mb-16">
            {/* Mobile Layout: Hidden on lg and up */}
            <div className="grid grid-cols-2 gap-4 mb-16 lg:hidden">
              {/* Left: Large Mission Card */}
              <motion.div
                className="col-span-1 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1f2937' }}>Onze missie</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Wij beschermen wat voor jou het meest waardevol is door professionele beveiligingsoplossingen te leveren met onvoorwaardelijke toewijding en vakmanschap.
                </p>
              </motion.div>

              {/* Right: Two smaller cards stacked */}
              <div className="flex flex-col gap-4">
                {/* Vision Card */}
                <motion.div
                  className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'var(--color-accent)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#1f2937' }}>Onze visie</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    Een veilige wereld waarin iedereen zich beschermd voelt.
                  </p>
                </motion.div>

                {/* Values Card */}
                <motion.div
                  className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'var(--color-secondary)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#1f2937' }}>Onze waarden</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    Integriteit, betrouwbaarheid en respect staan centraal.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Desktop Layout: Hidden on mobile, shown on lg and up */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {/* Mission Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1f2937' }}>Onze missie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wij beschermen wat voor jou het meest waardevol is door professionele beveiligingsoplossingen te leveren met onvoorwaardelijke toewijding en vakmanschap.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1f2937' }}>Onze visie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Een veilige wereld waarin iedereen zich beschermd voelt, waar beveiliging naadloos integreert in het dagelijks leven zonder beperkingen op te leggen.
                </p>
              </motion.div>

              {/* Values Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1f2937' }}>Onze waarden</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integriteit, betrouwbaarheid en respect staan centraal in alles wat we doen. Deze waarden vormen de basis van onze samenwerking met klanten en collega's.
                </p>
              </motion.div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to="/overOns"
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg group"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onMouseOver={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'}
              onMouseOut={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-primary)'}
            >
              Leer ons beter kennen
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Stats Section with Parallax Effect */}
      <section className="relative py-10 overflow-hidden" style={{ backgroundColor: 'var(--color-darkest)' }}>
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="text-4xl sm:text-4xl font-bold mb-2"
                style={{ color: 'var(--color-accent)' }}
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                100%
              </motion.div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Gecertificeerd</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Volledig erkende beveiliging</p>
              <p className="text-gray-400 text-xs hidden sm:block">Voldoet aan alle wettelijke eisen</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="text-4xl sm:text-4xl font-bold mb-2"
                style={{ color: 'var(--color-secondary)' }}
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                30 min
              </motion.div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Ter plaatse</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Snel inzetbaar</p>
              <p className="text-gray-400 text-xs hidden sm:block">Altijd directe actie bij melding</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="text-4xl sm:text-4xl font-bold mb-2"
                style={{ color: 'var(--color-accent)' }}
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                0%
              </motion.div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Compromissen</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Strikte protocollen</p>
              <p className="text-gray-400 text-xs hidden sm:block">Altijd maximale veiligheid</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="text-4xl sm:text-4xl font-bold mb-2"
                style={{ color: 'var(--color-secondary)' }}
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                24/7
              </motion.div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Bereikbaar</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Altijd voor je klaar</p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Interactive Services Showcase */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-sm uppercase tracking-wider font-bold mb-4"
              style={{ color: 'var(--color-accent)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Onze expertise
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#1f2937' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Beveiligingsoplossingen voor<br />
              <span style={{ color: 'var(--color-primary)' }}>elke situatie</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Van objectbeveiliging tot evenementenbeheer - wij leveren maatwerkoplossingen die perfect aansluiten bij jouw specifieke beveiligingsbehoeften.
            </motion.p>
          </motion.div>

          {/* Interactive Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Large Featured Service */}
            <motion.div
              className="md:col-span-1 rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden group cursor-pointer"
              style={{
                background: `linear-gradient(135deg, var(--color-primary), var(--color-darkest))`
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(107, 124, 147, 0.2), rgba(74, 93, 115, 0.2))`
                }}></div>
              <div className="relative z-10">
                <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 lg:mb-6">
                  <svg className="w-8 lg:w-10 h-8 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Objectbeveiliging</h3>
                <p className="mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base" style={{ color: 'var(--color-light)' }}>
                  Premium beveiliging voor kantoorpanden, industrieterreinen en commerciële locaties. 24/7 monitoring en direct ingrijpen bij incidenten.
                </p>
                <Link
                  to="/diensten/objectbeveiliging"
                  className="inline-flex items-center text-white font-semibold group-hover:text-blue-200 transition-colors text-sm lg:text-base"
                >
                  Meer informatie
                  <svg className="w-4 lg:w-5 h-4 lg:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Service Grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-6">
              <motion.div
                className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 group-hover:bg-opacity-80 transition-colors"
                  style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <svg className="w-6 lg:w-8 h-6 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-sm lg:text-lg font-bold mb-2" style={{ color: '#1f2937' }}>Evenementen</h4>
                <p className="text-gray-600 text-xs lg:text-sm mb-2 lg:mb-3">Crowd management en veiligheid tijdens events</p>
                <Link to="/diensten/evenementenbeveiliging" className="text-xs lg:text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                  Bekijk dienst →
                </Link>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 group-hover:bg-opacity-80 transition-colors"
                  style={{ backgroundColor: 'var(--color-accent)' }}>
                  <svg className="w-6 lg:w-8 h-6 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-sm lg:text-lg font-bold mb-2" style={{ color: '#1f2937' }}>Zorgbeveiliging</h4>
                <p className="text-gray-600 text-xs lg:text-sm mb-2 lg:mb-3">Discrete beveiliging in zorginstellingen</p>
                <Link to="/diensten/zorgbeveiliging" className="text-xs lg:text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                  Bekijk dienst →
                </Link>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 group-hover:bg-opacity-80 transition-colors"
                  style={{ backgroundColor: 'var(--color-primary)' }}>
                  <svg className="w-6 lg:w-8 h-6 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h4 className="text-sm lg:text-lg font-bold mb-2" style={{ color: '#1f2937' }}>Transport</h4>
                <p className="text-gray-600 text-xs lg:text-sm mb-2 lg:mb-3">Veilig transport van personen en goederen</p>
                <Link to="/diensten/transportbeveiliging" className="text-xs lg:text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                  Bekijk dienst →
                </Link>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 group-hover:bg-opacity-80 transition-colors"
                  style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <svg className="w-6 lg:w-8 h-6 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-sm lg:text-lg font-bold mb-2" style={{ color: '#1f2937' }}>Mobile Surveillance</h4>
                <p className="text-gray-600 text-xs lg:text-sm mb-2 lg:mb-3">Flexibele surveillance op locatie</p>
                <Link to="/diensten/mobilesurveillance" className="text-xs lg:text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                  Bekijk dienst →
                </Link>
              </motion.div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to="/diensten"
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg group"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onMouseOver={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'}
              onMouseOut={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-primary)'}
            >
              Bekijk alle diensten
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Contact Section - Modern Design */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--color-darkest)' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }}></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: 'var(--color-secondary)', animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: 'var(--color-primary)', animationDelay: '4s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-sm uppercase tracking-wider font-bold mb-4"
              style={{ color: 'var(--color-accent)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Neem contact op
            </motion.p>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Klaar om te beginnen?<br />
              <span className=" text-white bg-clip-text">
                Laten we praten!
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ontdek hoe onze beveiligingsoplossingen jouw organisatie kunnen versterken. Plan een vrijblijvend consult.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 lg:space-y-8">
                {/* Quick Contact Options (keep two columns on mobile like desktop) */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="w-10 lg:w-12 h-10 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">Bel direct</h3>
                    <p className="text-gray-300 text-xs lg:text-sm mb-2 lg:mb-3">24/7 bereikbaar voor spoedeisende zaken</p>
                    <p className="font-mono text-xs lg:text-sm" style={{ color: 'var(--color-accent)' }}>+31 6 14741104</p>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--color-secondary)' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Stuur email</h3>
                    <p className="text-gray-300 text-sm mb-3">Voor uitgebreide vragen en offertes</p>
                    <p className="font-mono" style={{ color: 'var(--color-secondary)' }}>info@yezidisecurity.nl</p>
                  </motion.div>
                </div>

                {/* Address Card */}
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">Bezoek ons kantoor</h3>
                      <p className="text-gray-300 mb-1 lg:mb-2 text-xs lg:text-sm">Gaffel 19</p>
                      <p className="text-gray-300 mb-2 text-xs lg:text-sm">6641 WV Beuningen</p>
                      <p className="text-xs" style={{ color: 'var(--color-accent)' }}>Afspraak maken? Bel van tevoren!</p>
                    </div>
                  </div>
                </motion.div>

                {/* Availability Notice */}
                <motion.div
                  className="rounded-2xl p-4 lg:p-6 border border-white/10"
                  style={{
                    background: `linear-gradient(to right, rgba(74, 93, 115, 0.2), rgba(107, 124, 147, 0.2))`
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
                    <h4 className="text-white font-semibold text-sm lg:text-base">Nu beschikbaar</h4>
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm">
                    Ons team staat klaar om je te helpen. Gemiddelde reactietijd binnen 2 uur tijdens kantooruren.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-6 lg:mt-0"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20">
                <ContactForm />
              </div>
            </motion.div>
          </div>


        </div>
      </section>

    </div>
  );
}
