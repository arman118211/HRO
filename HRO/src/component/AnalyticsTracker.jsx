import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-4X6M4JBZ1Z", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;