"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { Check, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
	{
		id: "basic",
		amount: 25,
		name: "Essential",
		impact: [
			"1 verified hygiene & care kit",
			"Locally sourced supplies",
			"Digital field impact report",
		],
	},
	{
		id: "supporter",
		amount: 50,
		name: "Supporter",
		popular: true,
		impact: [
			"2 complete emergency kits",
			"Verified photo updates",
			"Itemized expenditure audit",
		],
	},
	{
		id: "advocate",
		amount: 100,
		name: "Advocate",
		impact: [
			"Clean water access for 5 people",
			"Direct field coordinator notes",
			"Official thank-you letter",
		],
	},
	{
		id: "champion",
		amount: 250,
		name: "Champion",
		impact: [
			"Full community scholarship aid",
			"Quarterly milestone audits",
			"Honor roll recognition",
		],
	},
];

export default function DonationTiers() {
	const [selected, setSelected] = useState("supporter");

	return (
		<section
			id="donate"
			className="relative bg-[#FCFBF7] py-20 lg:py-28 overflow-hidden"
		>
			{/* Ambient warm gold lighting */}
			<div
				className="pointer-events-none absolute inset-0 overflow-hidden"
				aria-hidden
			>
				<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-amber-200/20 via-yellow-100/10 to-transparent blur-3xl" />
				<div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Centered Header */}
				<div className="mx-auto max-w-2xl text-center mb-14">
					<SectionHeader
						eyebrow="Direct Giving"
						title="Choose your impact level"
						subtitle="Every dollar goes directly into field operations with zero guesswork and transparent receipts."
					/>
				</div>

				{/* Tier Cards Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{tiers.map((t, idx) => {
						const isSelected = selected === t.id;

						return (
							<motion.div
								key={t.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
								onClick={() => setSelected(t.id)}
								className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
									isSelected
										? "bg-white border-2 border-amber-500 shadow-[0_16px_36px_-8px_rgba(217,119,6,0.18)] -translate-y-1.5"
										: "bg-white/80 border border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
								}`}
							>
								{/* Popular Ribbon */}
								{t.popular && (
									<div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
										<span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
											<Sparkles className="h-3 w-3" />
											Most Popular
										</span>
									</div>
								)}

								<div>
									{/* Tier Title & Check indicator */}
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-wider text-stone-500">
											{t.name}
										</span>
										<div
											className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
												isSelected
													? "bg-amber-500 text-white shadow-sm"
													: "border border-stone-300 bg-stone-50 text-transparent"
											}`}
										>
											<Check className="h-3.5 w-3.5 stroke-[3]" />
										</div>
									</div>

									{/* Price */}
									<div className="mt-4 flex items-baseline gap-1">
										<span className="text-4xl font-extrabold tracking-tight text-stone-900">
											${t.amount}
										</span>
										<span className="text-xs font-medium text-stone-500">
											USD
										</span>
									</div>

									{/* Divider */}
									<div className="my-5 border-t border-stone-100" />

									{/* Impact Features */}
									<ul className="space-y-3 text-xs leading-relaxed">
										{t.impact.map((feature, fIdx) => (
											<li key={fIdx} className="flex items-start gap-2.5">
												<span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
													<Check className="h-2.5 w-2.5 stroke-[2.5]" />
												</span>
												<span className="text-stone-600 font-medium">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</div>

								{/* Bottom Action Button */}
								<div className="mt-8 pt-2">
									<Link
										to={`/donate?tier=${t.id}&amount=${t.amount}`}
										className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all duration-200 active:scale-[0.98] ${
											isSelected
												? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/25 hover:brightness-105"
												: "border border-stone-200 bg-stone-50 text-stone-700 hover:border-amber-300 hover:bg-amber-50/50 hover:text-amber-800"
										}`}
									>
										<HeartHandshake className="h-3.5 w-3.5" />
										Donate ${t.amount}
									</Link>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Security & Transparency Disclaimer */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-12 flex items-center justify-center"
				>
					{/* <div className="inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-white px-4 py-2 text-xs font-medium text-stone-600 shadow-sm">
						<ShieldCheck className="h-4 w-4 text-amber-600" />
						<span>
							256-bit encrypted • Eligible for official charitable tax
							deductions
						</span>
					</div> */}
				</motion.div>
			</div>
		</section>
	);
}
