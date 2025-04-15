
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto max-w-7xl px-4 z-50 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1">
          <div className="flex justify-between items-start md:hidden">
            <h3 className="font-bold text-lg mb-2">Cookie Consent</h3>
            <button 
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-gray-600">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>

        <div className="hidden md:block">
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <Button 
            variant="outline" 
            onClick={handleDecline}
            className="flex-1 md:flex-initial"
          >
            Decline
          </Button>
          <Button 
            onClick={handleAccept}
            className="flex-1 md:flex-initial bg-blog-coral hover:bg-blog-coral/90"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
