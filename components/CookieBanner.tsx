"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Shield, Eye } from "lucide-react";
import { NeoCard } from "./ui/NeoCard";
import { NeoButton } from "./ui/NeoButton";
import { NeoIconButton } from "./ui/NeoIconButton";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and disabled
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        setPreferences(prev => ({ ...prev, ...savedPreferences }));
      } catch (error) {
        console.error("Error parsing cookie preferences:", error);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    };
    
    setPreferences(allAccepted);
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    
    // Initialize analytics if accepted
    if (allAccepted.analytics) {
      initializeAnalytics();
    }
  };

  const handleAcceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    
    // Initialize analytics if accepted
    if (preferences.analytics) {
      initializeAnalytics();
    }
  };

  const handleDeclineAll = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    };
    
    setPreferences(essentialOnly);
    localStorage.setItem("cookie-consent", JSON.stringify(essentialOnly));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  const initializeAnalytics = () => {
    // Initialize Google Analytics or other analytics tools
    if (typeof window !== 'undefined' && window.gtag) {
      // Type assertion for gtag consent command
      (window.gtag as ((command: string, action: string, params: Record<string, string>) => void))('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Can't change necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const cookieTypes = [
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      icon: Shield,
      required: true,
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      icon: Eye,
      required: false,
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant advertisements.',
      icon: Cookie,
      required: false,
    },
    {
      id: 'personalization',
      name: 'Personalization Cookies',
      description: 'Remember your preferences and provide customized content and experiences.',
      icon: Settings,
      required: false,
    },
  ];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <div className="max-w-6xl mx-auto">
          <NeoCard variant="elevated" className="overflow-hidden shadow-neo-high">
            {!showSettings ? (
              /* Main Cookie Banner */
              <div className="p-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-3 flex-shrink-0">
                    <div className="w-12 h-12 bg-neo-dark shadow-neo-pressed rounded-full flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-neo-gold" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-neo-champagne mb-1">
                        Cookie Preferences
                      </h3>
                      <p className="text-sm text-neo-taupe">
                        We respect your privacy
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <p className="text-sm text-neo-taupe leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content,
                      and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
                      You can manage your preferences or learn more in our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-neo-gold hover:text-neo-champagne underline"
                      >
                        Privacy Policy
                      </a>.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <NeoButton
                        onClick={handleAcceptAll}
                        variant="gold"
                        size="sm"
                      >
                        Accept All
                      </NeoButton>
                      <NeoButton
                        onClick={handleDeclineAll}
                        variant="secondary"
                        size="sm"
                      >
                        Essential Only
                      </NeoButton>
                      <NeoButton
                        onClick={() => setShowSettings(true)}
                        variant="flat"
                        size="sm"
                      >
                        Customize
                      </NeoButton>
                    </div>
                  </div>

                  {/* Close Button */}
                  <div className="flex-shrink-0">
                    <NeoIconButton
                      onClick={handleDeclineAll}
                      variant="flat"
                      icon={<X className="w-5 h-5" />}
                      aria-label="Close"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Cookie Settings */
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-playfair font-semibold text-neo-champagne">
                      Cookie Preferences
                    </h3>
                    <NeoIconButton
                      onClick={() => setShowSettings(false)}
                      variant="flat"
                      icon={<X className="w-5 h-5" />}
                    />
                  </div>
                  <p className="text-sm text-neo-taupe">
                    Choose which cookies you want to accept. You can change these settings at any time.
                  </p>
                </div>

                {/* Cookie Types */}
                <div className="space-y-4 mb-6">
                  {cookieTypes.map((type) => {
                    const Icon = type.icon;
                    const isEnabled = preferences[type.id as keyof typeof preferences];

                    return (
                      <div
                        key={type.id}
                        className="flex items-start space-x-4 p-4 bg-neo-dark shadow-neo-pressed rounded-neo-md"
                      >
                        <div className="w-10 h-10 bg-neo-dark shadow-neo-pressed rounded-neo-sm flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-neo-gold" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-neo-champagne">{type.name}</h4>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={isEnabled}
                                onChange={() => handlePreferenceChange(type.id as keyof typeof preferences)}
                                disabled={type.required}
                                className="sr-only peer"
                              />
                              <div className={`relative w-11 h-6 rounded-full transition-colors shadow-neo-pressed ${
                                isEnabled ? 'bg-neo-gold' : 'bg-neo-taupe/30'
                              } ${type.required ? 'opacity-50 cursor-not-allowed' : 'peer-focus:ring-4 peer-focus:ring-neo-gold/20'}`}>
                                <div className={`absolute top-[2px] left-[2px] w-5 h-5 bg-neo-champagne rounded-full transition-transform shadow-neo-flat ${
                                  isEnabled ? 'translate-x-5' : 'translate-x-0'
                                }`}></div>
                              </div>
                            </label>
                          </div>
                          <p className="text-sm text-neo-taupe">
                            {type.description}
                          </p>
                          {type.required && (
                            <p className="text-xs text-neo-gold mt-1">Required</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <NeoButton
                    onClick={handleAcceptSelected}
                    variant="gold"
                    size="sm"
                  >
                    Save Preferences
                  </NeoButton>
                  <NeoButton
                    onClick={handleAcceptAll}
                    variant="secondary"
                    size="sm"
                  >
                    Accept All
                  </NeoButton>
                  <NeoButton
                    onClick={() => setShowSettings(false)}
                    variant="flat"
                    size="sm"
                  >
                    Cancel
                  </NeoButton>
                </div>
              </div>
            )}
          </NeoCard>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}