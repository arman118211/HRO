import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tent,
  Droplets,
  Utensils,
  Stethoscope,
  Truck,
  ShieldCheck,
  Users,
  Home as HomeIcon,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Quote,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content — swap for real figures/photos before publishing
// ---------------------------------------------------------------------------

const STATS = [
  { label: "People affected", value: "45,000+" },
  { label: "Districts hit", value: "14" },
  { label: "Homes damaged", value: "8,200" },
  { label: "Relief camps running", value: "62" },
];

const ALLOCATION = [
  { label: "Emergency shelter & tarpaulins", pct: 30, icon: Tent },
  { label: "Clean water & sanitation", pct: 25, icon: Droplets },
  { label: "Food & nutrition kits", pct: 20, icon: Utensils },
  { label: "Mobile medical care", pct: 15, icon: Stethoscope },
  { label: "Search, rescue & logistics", pct: 10, icon: Truck },
];

const AMOUNTS = [25, 50, 120, 300];

const UPDATES = [
  { time: "09.10.2026 — 06:40", coord: "27.62°N 85.68°E", title: "Boats reach the Sunkoshi villages", text: "Three cut-off settlements near Sindhupalchok received their first food and clean water in four days." },
  { time: "09.07.2026 — 14:10", coord: "27.53°N 85.56°E", title: "Eleven camps open in Kavre", text: "Mobile health units are now screening arrivals for waterborne illness at every new camp." },
  { time: "09.04.2026 — 23:55", coord: "27.85°N 85.55°E", title: "Flash flood hits Melamchi corridor", text: "Overnight monsoon rain sent the river over its banks, taking homes, bridges and farmland with it." },
];

const FAQS = [
  { q: "How quickly does my donation reach the field?", a: "Funds are released to our district teams within 48 hours. Emergency purchases are made locally so relief moves at the same speed as the need." },
  { q: "Is my donation tax deductible?", a: "Yes. We're a registered non-profit, and donors receive a receipt by email usable for tax purposes in most countries." },
  { q: "Can I see exactly where the money goes?", a: "Every dispatch below includes camp-level spending, and our year-end audit is published in full. Ask us for an itemised report any time." },
  { q: "I can't donate right now — how else can I help?", a: "Share this page, or ask about our volunteer roster for logistics, translation and medical support." },
];

const currency = (n) => `$${n.toLocaleString("en-US")}`;

// ---------------------------------------------------------------------------
// Illustration — layered ridgeline, a rising flood line, and camp markers,
// rendered in ink and gold on a light ground.
// ---------------------------------------------------------------------------

function RidgeIllustration() {
  return (
    <svg viewBox="0 0 720 520" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
      <circle cx="560" cy="110" r="70" fill="#E3A712" opacity="0.18" />
      <circle cx="560" cy="110" r="32" fill="#E3A712" opacity="0.55" />

      <polygon points="0,420 140,220 260,360 340,180 460,380 560,260 720,420 720,520 0,520" fill="#241D12" opacity="0.06" />
      <polygon points="0,460 180,300 320,420 420,280 540,440 720,320 720,520 0,520" fill="#241D12" opacity="0.09" />
      <polygon points="0,500 160,400 300,470 440,380 600,480 720,410 720,520 0,520" fill="#A6750C" opacity="0.16" />

      <motion.path
        d="M0,478 Q90,460 180,478 T360,478 T540,478 T720,478"
        fill="none"
        stroke="#C1543A"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
      />
      <motion.path
        d="M0,478 Q90,460 180,478 T360,478 T540,478 T720,478 V520 H0 Z"
        fill="#C1543A"
        opacity="0.12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1, delay: 1.4 }}
      />

      {[[150, 468], [330, 468], [520, 468]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4" fill="#241D12" />
          <line x1={cx} y1={cy} x2={cx} y2={cy - 26} stroke="#241D12" strokeWidth="1" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}

function StampBadge({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 w-32">
      <div className="w-16 h-16 rounded-full border border-dashed border-[#241D12]/25 flex items-center justify-center rotate-[-4deg]">
        <Icon className="w-6 h-6 text-[#A6750C]" />
      </div>
      <p className="text-xs leading-snug text-[#241D12]/60">{label}</p>
    </div>
  );
}

export default function NepalFloodFundraiser() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const activeAmount = customAmount ? Number(customAmount) : selectedAmount;

  return (
    <div className="min-h-screen w-full bg-[#FBF6EA] text-[#241D12] font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .font-body { font-family: 'Work Sans', sans-serif; }
      `}</style>

      {/* Header */}
      <header className="bg-[#FBF6EA]/95 backdrop-blur border-b border-[#241D12]/10 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E3A712]" />
            <span className="font-display text-lg tracking-tight">Himalaya Aid Network</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-[#241D12]/55">
            <a href="#situation" className="hover:text-[#241D12] transition-colors">situation</a>
            <a href="#allocation" className="hover:text-[#241D12] transition-colors">ledger</a>
            <a href="#updates" className="hover:text-[#241D12] transition-colors">dispatches</a>
            <a href="#faq" className="hover:text-[#241D12] transition-colors">faq</a>
          </nav>
          <a href="#donate" className="bg-[#241D12] text-[#FBF6EA] text-sm font-semibold px-4 py-2 hover:bg-[#3a2f1c] transition-colors">
            Donate
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#241D12]/10">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="font-mono text-xs text-[#A6750C] mb-6 border border-[#A6750C]/40 inline-block px-3 py-1"
            >
              field bulletin · 09.2026 · nepal
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              className="font-display text-4xl sm:text-5xl leading-[1.08] tracking-tight mb-6 max-w-xl"
            >
              Nepal's rivers rose overnight. Whole villages are still cut off.
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              className="text-[#241D12]/70 text-lg max-w-[52ch] mb-9"
            >
              Flash floods have torn through Sindhupalchok, Kavre and the Melamchi corridor. Our teams are
              already delivering shelter, water and medical care — your gift keeps the convoys moving.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
              <a
                href="#donate"
                className="inline-flex items-center gap-2 bg-[#E3A712] text-[#241D12] font-semibold text-lg px-8 py-4 hover:bg-[#F2C94C] transition-colors shadow-[0_10px_30px_-12px_rgba(227,167,18,0.7)]"
              >
                Donate now <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <div className="h-72 sm:h-96">
            <RidgeIllustration />
          </div>
        </div>

        {/* Stat ticker */}
        <div className="relative z-10 border-t border-[#241D12]/10 bg-white overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap py-4 font-mono text-sm text-[#241D12]/65"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...STATS, ...STATS, ...STATS].map((s, i) => (
              <span key={i} className="mx-8 flex items-center gap-2">
                <span className="text-[#A6750C] font-bold">{s.value}</span> {s.label}
                <span className="text-[#241D12]/25 ml-8">//</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The situation */}
      <section id="situation" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[0.9fr_1.1fr] gap-12">
        <div>
          <p className="font-mono text-xs text-[#A6750C] mb-4">01 — situation report</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-5">
            What's happening on the ground
          </h2>
          <p className="text-[#241D12]/70 max-w-[46ch] mb-4">
            Since late August, monsoon rain has fallen well above seasonal averages across the middle hills.
            The Sunkoshi and Melamchi rivers broke their banks within hours.
          </p>
          <p className="text-[#241D12]/70 max-w-[46ch]">
            Landslides have blocked the main access roads into Sindhupalchok, so supplies are moving in by
            porter and, where rivers allow, by boat.
          </p>
        </div>
        <div className="border border-[#241D12]/15 divide-y divide-[#241D12]/10 bg-white">
          {[
            ["27.62°N 85.68°E", "Sindhupalchok", "Worst-hit; three villages reachable only by boat"],
            ["27.53°N 85.56°E", "Kavrepalanchok", "Eleven relief camps now operating"],
            ["27.85°N 85.55°E", "Melamchi corridor", "Main highway bridge washed away"],
          ].map(([coord, place, note]) => (
            <div key={place} className="p-5 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6">
              <span className="font-mono text-xs text-[#A6750C] w-36 shrink-0">{coord}</span>
              <span className="font-medium w-40 shrink-0">{place}</span>
              <span className="text-sm text-[#241D12]/55">{note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Fund allocation — styled as a relief ledger */}
      <section id="allocation" className="bg-white border-y border-[#241D12]/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="font-mono text-xs text-[#A6750C] mb-4">02 — relief ledger</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">Every gift is tracked to a purpose</h2>
          <p className="text-[#241D12]/60 mb-12 max-w-[58ch]">
            The current spending plan for the emergency phase of the response.
          </p>
          <div className="border-t border-[#241D12]/15">
            {ALLOCATION.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.label} className="border-b border-[#241D12]/15 py-5">
                  <div className="flex items-center justify-between font-mono text-sm mb-3">
                    <span className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-[#A6750C]" /> {row.label}
                    </span>
                    <span className="text-[#A6750C] font-bold">{row.pct}%</span>
                  </div>
                  <div className="h-px bg-[#241D12]/10 relative">
                    <motion.div
                      className="absolute left-0 top-0 h-px bg-[#E3A712]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.pct}%` }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Field dispatches */}
      <section id="updates" className="max-w-6xl mx-auto px-6 py-20">
        <p className="font-mono text-xs text-[#A6750C] mb-4">03 — dispatches</p>
        <h2 className="font-display text-3xl sm:text-4xl mb-12">Reports from the convoy</h2>
        <div className="space-y-0 border-t border-[#241D12]/15">
          {UPDATES.map((u) => (
            <div key={u.title} className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-8 py-6 border-b border-[#241D12]/15">
              <div>
                <p className="font-mono text-xs text-[#241D12]/45">{u.time}</p>
                <p className="font-mono text-xs text-[#A6750C]">{u.coord}</p>
              </div>
              <div>
                <h3 className="font-display text-xl mb-1.5">{u.title}</h3>
                <p className="text-[#241D12]/70 max-w-[62ch]">{u.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#F2C94C]/25 border-y border-[#241D12]/10">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <Quote className="w-7 h-7 text-[#A6750C] mx-auto mb-6" />
          <p className="font-display text-2xl sm:text-3xl leading-snug mb-6">
            We reached the last village on foot, waist-deep in mud, carrying water tablets on our backs.
            People weren't asking for much — just enough to get through the week.
          </p>
          <p className="font-mono text-xs text-[#241D12]/60">Anisha Tamang — field coordinator, Sindhupalchok</p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-[#241D12]/10">
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-wrap justify-center gap-10">
          <StampBadge icon={ShieldCheck} label="Registered non-profit, audited annually" />
          <StampBadge icon={Users} label="Staffed by local district volunteers" />
          <StampBadge icon={HomeIcon} label="15 years in Nepal disaster response" />
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="max-w-2xl mx-auto px-6 py-20">
        <div className="border border-[#241D12]/15 bg-white relative">
          <div className="absolute -top-3 left-8 bg-[#FBF6EA] px-3 font-mono text-xs text-[#A6750C]">relief voucher</div>
          <div className="p-8 sm:p-10">
            <h2 className="font-display text-2xl sm:text-3xl mb-8 text-center">Send help to Nepal today</h2>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                  className={`px-3 py-3 border font-display text-lg transition-colors ${
                    !customAmount && selectedAmount === amt
                      ? "border-[#E3A712] bg-[#FBF6EA]"
                      : "border-[#241D12]/15 hover:border-[#241D12]/35"
                  }`}
                >
                  {currency(amt)}
                </button>
              ))}
            </div>
            <input
              type="number"
              min="1"
              placeholder="Or enter a custom amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full border border-[#241D12]/15 px-3 py-3 text-sm mb-5 focus:outline-none focus:border-[#E3A712] font-mono"
            />
            <button className="w-full bg-[#E3A712] text-[#241D12] font-semibold text-lg py-4 hover:bg-[#F2C94C] transition-colors mb-4">
              Donate {currency(activeAmount || 0)} now
            </button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-[#241D12]/50 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" /> secure · registered non-profit · instant receipt
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <p className="font-mono text-xs text-[#A6750C] mb-4">04 — questions</p>
        <h2 className="font-display text-3xl mb-8">Common questions</h2>
        <div className="border-t border-[#241D12]/15">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-[#241D12]/15">
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between text-left py-5">
                <span className="font-medium pr-6">{f.q}</span>
                <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-[#241D12]/50 shrink-0" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#241D12]/70 pb-5 max-w-[58ch]">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#E3A712] text-[#241D12]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-4">Families are waiting on tonight's supply run.</h2>
          <p className="text-[#241D12]/75 mb-8 max-w-[52ch] mx-auto">
            Whatever you can give moves out with tomorrow morning's convoy.
          </p>
          <a href="#donate" className="inline-flex items-center gap-2 bg-[#241D12] text-[#FBF6EA] font-semibold text-lg px-8 py-4 hover:bg-[#3a2f1c] transition-colors">
            Donate now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FBF6EA] text-[#241D12]/70 border-t border-[#241D12]/10">
        <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div>
            <p className="font-display text-lg text-[#241D12] mb-3">Himalaya Aid Network</p>
            <p className="max-w-[30ch] text-[#241D12]/55">Community-led disaster response and recovery across Nepal, since 2011.</p>
          </div>
          <div>
            <p className="text-[#241D12] font-medium mb-3 font-mono text-xs">explore</p>
            <ul className="space-y-2">
              <li><a href="#situation" className="hover:text-[#241D12]">The situation</a></li>
              <li><a href="#allocation" className="hover:text-[#241D12]">Relief ledger</a></li>
              <li><a href="#updates" className="hover:text-[#241D12]">Dispatches</a></li>
              <li><a href="#faq" className="hover:text-[#241D12]">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[#241D12] font-medium mb-3 font-mono text-xs">contact</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> relief@himalayaaid.org</li>
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> +977 1 555 0134</li>
              <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Lalitpur, Nepal</li>
            </ul>
          </div>
          <div>
            <p className="text-[#241D12] font-medium mb-3 font-mono text-xs">registration</p>
            <p className="text-[#241D12]/55">NGO-2019-04471<br />Audited annually</p>
          </div>
        </div>
        <div className="border-t border-[#241D12]/10">
          <p className="max-w-6xl mx-auto px-6 py-5 text-xs text-[#241D12]/45 font-mono">
            © 2026 himalaya aid network — donations used solely for disaster relief and recovery programs
          </p>
        </div>
      </footer>
    </div>
  );
}