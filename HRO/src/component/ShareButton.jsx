import { Share2 } from 'lucide-react';
import { useState } from 'react';

export default function ShareButton() {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (err) {
        // User cancelled or error occurred
        if (err.name !== 'AbortError') {
          copyToClipboard(url);
        }
      }
    } else {
      // Fallback: Copy to clipboard
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <>
      {/* Share Button with Glow */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleShare}
          className="relative bg-yellow-500 hover:bg-yellow-600 text-gray-900 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 glow-button"
          aria-label="Share this page"
        >
          <Share2 size={24} />
        </button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-24 right-6 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-xl z-50 animate-fade-in">
          <p className="text-sm font-medium">Link copied to clipboard!</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .glow-button {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        
        .glow-button:hover {
          animation: glow-pulse 1s ease-in-out infinite;
          box-shadow: 0 0 35px rgba(234, 179, 8, 0.8),
                      0 0 70px rgba(234, 179, 8, 0.6),
                      0 0 100px rgba(234, 179, 8, 0.4) !important;
        }
      `}</style>
    </>
  );
}