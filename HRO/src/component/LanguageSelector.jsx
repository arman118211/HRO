import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Inject Google Translate script once
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,ne,fr,de,es,zh-CN",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Hide Google's blue toolbar if it appears
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      .goog-te-gadget-icon { display: none !important; }
      body { top: 0px !important; }
      
      /* Style Google Translate dropdown with golden theme */
      .goog-te-gadget {
        font-family: inherit !important;
      }
      .goog-te-gadget select {
        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%) !important;
        border: 2px solid #d97706 !important;
        color: #78350f !important;
        padding: 8px 12px !important;
        border-radius: 8px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
      }
      .goog-te-gadget select:hover {
        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%) !important;
        box-shadow: 0 0 20px rgba(251, 191, 36, 0.6) !important;
      }
    `;
    document.head.appendChild(style);

    // Also remove frame node if Google injects it
    const observer = new MutationObserver(() => {
      const frame = document.querySelector(".goog-te-banner-frame");
      if (frame) frame.remove();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.getElementById("google_translate_element");
    if (!el) return;

    // toggle dropdown visibility
    el.classList.toggle("hidden", !open);

    // wait for Google widget to render and then fix style
    const interval = setInterval(() => {
      const gadget = el.querySelector(".goog-te-gadget");
      if (gadget) {
        Object.assign(el.style, {
          position: "fixed",
          bottom: "90px",
          left: "20px",
          background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
          border: "2px solid #fbbf24",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 8px 24px rgba(251, 191, 36, 0.3), 0 0 40px rgba(251, 191, 36, 0.2)",
          zIndex: 9999,
        });
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <>
      {/* Floating globe icon bottom-left with golden glow */}
      <div className="fixed bottom-5 left-5 z-[10000]">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500 text-gray-900 shadow-lg hover:bg-yellow-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 glow-globe"
          title="Select Language"
        >
          <Globe size={26} strokeWidth={2.5} />
        </button>
      </div>

      {/* Google Translate element */}
      <div id="google_translate_element" className="hidden"></div>

      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(234, 179, 8, 0.5),
                        0 0 40px rgba(234, 179, 8, 0.3),
                        0 0 60px rgba(234, 179, 8, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(234, 179, 8, 0.7),
                        0 0 60px rgba(234, 179, 8, 0.5),
                        0 0 90px rgba(234, 179, 8, 0.3);
          }
        }
        
        @keyframes rotate-globe {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .glow-globe {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        
        .glow-globe:hover {
          animation: glow-pulse 1s ease-in-out infinite;
          box-shadow: 0 0 35px rgba(234, 179, 8, 0.8),
                      0 0 70px rgba(234, 179, 8, 0.6),
                      0 0 100px rgba(234, 179, 8, 0.4) !important;
        }
        
        .glow-globe:hover svg {
          animation: rotate-globe 2s linear infinite;
        }
      `}</style>
    </>
  );
};

export default LanguageSelector;