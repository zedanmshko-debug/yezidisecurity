import type { Route } from "./+types/vacatureBeveiliger.js";
import React, { useState } from "react";
import { Link } from "react-router";
import Banner from "../components/Banner.js";
import ContactForm from "../components/ContactForm.js";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Vacature Beveiliger - Yezidi Security" },
		{ name: "description", content: "Vacatures bij Yezidi Security — lees over rollen, eisen, voordelen en hoe je kunt solliciteren als beveiliger (zzp of loondienst)." },
	];
}

type JobCard = {
	id: string;
	title: string;
	tags?: string[];
	intro: string;
	bullets: string[];
	benefits?: string[];
	source?: { label: string; url: string };
	cta: { text: string; to: string; color?: string };
};

const JOB_CARDS: JobCard[] = [
	{
		id: "zzp",
		title: "ZZP / Zelfstandig beveiligingsprofessional",
		tags: ["Flexibel", "Opdrachtbasis"],
		intro: "Werk zelfstandig voor uiteenlopende opdrachten: evenementen, object- en mobiele beveiliging.",
		bullets: ["Ervaren beveiliger (niveau 2+)", "Geldige VOG indien gevraagd", "Eigen aansprakelijkheidsverzekering"],
		benefits: ["Flexibele planning", "Snelle betaling en duidelijke facturatie", "Toegang tot opdrachten via onze planningstool", "Professionele briefing en opdrachtbegeleiding"],
		cta: { text: "Meld je aan als zzp'er", to: "/contact", color: "cyan" },
	},
	{
		id: "loondienst",
		title: "Loondienst (parttime / fulltime)",
		tags: ["Vast contract", "Opleiding"],
		intro: "Word onderdeel van het Yezidi Security-team met training en doorgroeimogelijkheden.",
		bullets: ["Concurrerend salaris en secundaire arbeidsvoorwaarden", "Reiskostenvergoeding waar van toepassing", "Persoonlijke begeleiding en trainingen"],
		cta: { text: "Solliciteer in loondienst", to: "/contact", color: "blue" },
	},
];

function Pill({ children }: { children: React.ReactNode }) {
	return <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>{children}</span>;
}

function JobCardView({ card }: { card: JobCard }) {

	const accentColor = card.cta.color === "blue" ? 'var(--color-accent)' : 'var(--color-secondary)';
	const textColor = 'var(--color-primary)';

	return (
		<div className="p-6 rounded-2xl shadow-sm border" style={{ backgroundColor: 'white', borderColor: 'var(--color-gray)', borderLeft: `6px solid ${accentColor}` }}>
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-2xl font-bold" style={{ color: textColor }}>{card.title}</h2>
				<div className="flex gap-2">
					{card.tags?.map((t) => (
						<Pill key={t}>{t}</Pill>
					))}
				</div>
			</div>

			<p className="mb-3" style={{ color: 'var(--color-darkest)' }}>{card.intro}</p>

			<ul className="list-disc list-inside mb-3" style={{ color: 'var(--color-darkest)' }}>
				{card.bullets.map((b) => (
					<li key={b}>{b}</li>
				))}
			</ul>

			{card.source && (
				<p className="text-sm" style={{ color: 'var(--color-darkest)' }}>Bron: <a href={card.source.url} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: accentColor }}>{card.source.label}</a></p>
			)}

			{card.benefits && (
				<div className="mt-4">
					<h4 className="font-semibold mb-2" style={{ color: textColor }}>Wat kun je verwachten?</h4>
					<ul className="list-disc list-inside" style={{ color: 'var(--color-darkest)' }}>
						{card.benefits.map((b) => (
							<li key={b}>{b}</li>
						))}
					</ul>
				</div>
			)}

			<div className="mt-4">
				<Link to={card.cta.to} className="inline-block text-white px-4 py-2 rounded-lg font-semibold transition-colors" style={{ backgroundColor: 'var(--color-primary)' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}>{card.cta.text}</Link>
			</div>
		</div>
	);
}

export default function VacatureBeveiliger() {
	const [tab, setTab] = useState<'all' | 'zzp' | 'loondienst'>('all');

	return (
		<div className="min-h-screen" style={{ backgroundColor: 'var(--color-light)' }}>
			<Banner
				title="Werken bij Yezidi Security"
				subtitle="Vacature: Beveiliger"
				backgroundImage="/service.jpg"
				showButtons={false}
				cardTitle="Vacatures"
				cardText="Bekijk openstaande functies en solliciteer voor een carrière in beveiliging bij Yezidi Security."
			/>

			<section>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">


					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
						<main className="lg:col-span-8">
							<div className="space-y-6">
								<div className="flex gap-3 mb-6">
									<button
										onClick={() => setTab('all')}
										className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${tab === 'all' ? 'text-white' : 'text-gray-700'}`}
										style={{ backgroundColor: tab === 'all' ? 'var(--color-primary)' : 'transparent', border: tab === 'all' ? 'none' : '1px solid rgba(0,0,0,0.06)' }}
										onMouseOver={(e) => { if (tab === 'all') (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'; else (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.04)'; }}
										onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = tab === 'all' ? 'var(--color-primary)' : 'transparent'; }}
									>
										Alle vacatures
									</button>

									<button
										onClick={() => setTab('zzp')}
										className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${tab === 'zzp' ? 'text-white' : 'text-gray-700'}`}
										style={{ backgroundColor: tab === 'zzp' ? 'var(--color-primary)' : 'transparent', border: tab === 'zzp' ? 'none' : '1px solid rgba(0,0,0,0.06)' }}
										onMouseOver={(e) => { if (tab === 'zzp') (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'; else (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.04)'; }}
										onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = tab === 'zzp' ? 'var(--color-primary)' : 'transparent'; }}
									>
										ZZP / Zelfstandig
									</button>

									<button
										onClick={() => setTab('loondienst')}
										className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${tab === 'loondienst' ? 'text-white' : 'text-gray-700'}`}
										style={{ backgroundColor: tab === 'loondienst' ? 'var(--color-primary)' : 'transparent', border: tab === 'loondienst' ? 'none' : '1px solid rgba(0,0,0,0.06)' }}
										onMouseOver={(e) => { if (tab === 'loondienst') (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent)'; else (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.04)'; }}
										onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = tab === 'loondienst' ? 'var(--color-primary)' : 'transparent'; }}
									>
										Loondienst
									</button>
								</div>

								{/* Content area */}
								<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
									{tab === 'all' && (
										<div className="space-y-6">
											{JOB_CARDS.map((c) => (
												<JobCardView key={c.id} card={c} />
											))}
										</div>
									)}

									{tab === 'zzp' && (
										<JobCardView key={JOB_CARDS[0].id} card={JOB_CARDS[0]} />
									)}

									{tab === 'loondienst' && (
										<JobCardView key={JOB_CARDS[1].id} card={JOB_CARDS[1]} />
									)}
								</motion.div>

								<div className="bg-white p-6 rounded-2xl shadow-md border" style={{ borderColor: 'var(--color-gray)' }}>
									<h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>Meer over het werk</h3>
									<p className="mb-4" style={{ color: 'var(--color-secondary)' }}>Als beveiliger bij Yezidi Security werk je op uiteenlopende opdrachten: objectbeveiliging, evenementen, zorginstellingen, mobiele surveillances en winkelsurveillance. Wij verwachten professionaliteit, discretie en een verbindende houding naar collega’s en klanten.</p>

									<h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Taken kunnen onder meer zijn:</h4>
									<ul className="list-disc list-inside" style={{ color: 'var(--color-secondary)' }}>
										<li>Toegangs- en bezoekerscontrole</li>
										<li>Klanten- en patiëntvriendelijke communicatie</li>
										<li>Rondes, incidentrapportage en preventieve controles</li>
										<li>Samenwerken met collega’s en ketenpartners</li>
									</ul>
								</div>
							</div>
						</main>

						<aside className="lg:col-span-4">
							<div className="sticky top-24 space-y-6">
								<div className="border p-6 rounded-md" style={{ backgroundColor: 'white', border: '1px solid var(--color-primary)' }}>
									<div className="flex items-center justify-between">
										<div>
											<h4 className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>Direct solliciteren</h4>
											<p className="text-sm" style={{ color: 'var(--color-secondary)' }}>Heb je interesse? Neem contact op of vul het formulier in.</p>
										</div>
									</div>

									<div className="mt-4 flex flex-col gap-3">
										<div className="text-sm" style={{ color: 'var(--color-secondary)' }}><strong>Salaris:</strong> In overleg</div>
										<div className="text-sm" style={{ color: 'var(--color-secondary)' }}><strong>Uren:</strong> Fulltime / Parttime</div>
										<div className="text-sm" style={{ color: 'var(--color-secondary)' }}><strong>Regio:</strong> Landelijk inzetbaar</div>
									</div>

									<div className="mt-4">
										<Link to="/contact" className="inline-block w-full text-center text-white px-4 py-2 rounded-md font-semibold transition" style={{ backgroundColor: 'var(--color-primary)' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}>Solliciteer nu</Link>
									</div>
								</div>

								<div className="bg-white rounded-2xl p-6 shadow-md">
									<h4 className="font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Contactformulier</h4>
									<ContactForm />
								</div>

								<div className="bg-white p-4 rounded-md text-sm border" style={{ color: 'var(--color-secondary)', borderColor: 'var(--color-gray)' }}>
									<div className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Veelgestelde vragen</div>
									<div className="space-y-1">
										<div><strong>VOG nodig?</strong> Meestal op verzoek.</div>
										<div><strong>Opleidingen?</strong> Mogelijkheid tot trainingen via Yezidi Security.</div>
									</div>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</div>
	);
}
