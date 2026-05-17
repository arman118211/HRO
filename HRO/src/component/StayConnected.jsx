import { useState } from "react";
import { Facebook, Twitter, Instagram, Play } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/hronepal.org", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/hronepalorg", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/hro.org.np/", label: "Instagram" },
  { icon: Play, href: "https://www.youtube.com/@hro.org.np.1", label: "YouTube" },
  { icon: FaWhatsapp, href: "https://wa.me/9779847040404", label: "WhatsApp" },
];

export default function StayConnected() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-yellow-50 to-white py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">

        {/* Label */}
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-4">
          Stay Connected
        </span>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Follow Our Mission
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md mx-auto">
          Get the latest updates on human rights, campaigns, and stories that matter.
        </p>

        {/* Social buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-200 hover:border-[#DAA520] hover:text-[#B8860B] text-gray-600 bg-white rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-150 hover:shadow-sm"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs uppercase tracking-wider whitespace-nowrap">
            Newsletter
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Email subscription */}
        {!subscribed ? (
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="Your email address"
              className="flex-1 border border-gray-200 focus:border-[#DAA520] focus:outline-none rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 transition-colors"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#DAA520] hover:bg-[#C49A15] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-150 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        ) : (
          <div className="max-w-sm mx-auto py-2.5 px-4 bg-amber-50 border border-[#DAA520]/30 rounded-lg">
            <span className="text-[#B8860B] text-sm font-medium">✓ You're subscribed — thank you!</span>
          </div>
        )}

        <p className="text-gray-400 text-xs mt-4">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
}