"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NeoButton } from "./ui/NeoButton";
import { NeoIconButton } from "./ui/NeoIconButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Floating Pill-Shaped Navigation - Desktop */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 hidden lg:block transition-all duration-300 ${
          isScrolled ? "top-4" : "top-6"
        }`}
      >
        <div className="bg-neo-gunmetal/95 backdrop-blur-md rounded-full px-6 py-3 shadow-neo-elevated border border-neo-walnut/30">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center text-xl font-cormorant font-bold text-neo-khaki hover:text-neo-almond transition-colors px-3"
            >
              Nycayen
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-neo-khaki"
                        : "text-neo-almond hover:text-neo-khaki"
                    }`}
                  >
                    {item.name}
                  </span>
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="navbar-pill-indicator"
                      className="absolute inset-0 bg-neo-walnut/40 rounded-full shadow-neo-pressed"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 pl-2 ml-2 border-l border-neo-walnut/30">
              <NeoButton
                variant="ghost"
                size="sm"
                icon={<Phone className="w-4 h-4" />}
                onClick={() => window.location.href = "tel:+1-555-123-4567"}
                className="text-neo-almond hover:text-neo-khaki"
              >
                Call
              </NeoButton>
              <Link href="/booking">
                <NeoButton
                  variant="gold"
                  size="sm"
                  icon={<Calendar className="w-4 h-4" />}
                  className="shadow-neo-flat hover:shadow-neo-elevated"
                >
                  Book Now
                </NeoButton>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Full Width Top Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          isScrolled
            ? "bg-neo-gunmetal/95 backdrop-blur-md shadow-neo-elevated border-b border-neo-walnut/30"
            : "bg-neo-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center text-xl font-cormorant font-bold text-neo-khaki hover:text-neo-almond transition-colors"
            >
              Nycayen
            </Link>

            {/* Mobile Menu Button */}
            <NeoIconButton
              icon={isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              onClick={() => setIsOpen(!isOpen)}
              variant="elevated"
              className="bg-neo-gunmetal text-neo-almond"
              aria-label="Toggle menu"
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-neo-gunmetal/95 backdrop-blur-md border-t border-neo-walnut/30 shadow-neo-elevated"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium transition-all duration-200 py-3 px-4 rounded-neo-md ${
                        isActive(item.href)
                          ? "text-neo-khaki bg-neo-walnut/40 shadow-neo-pressed"
                          : "text-neo-almond hover:text-neo-khaki hover:bg-neo-walnut/20"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="pt-4 mt-4 border-t border-neo-walnut/30 space-y-3">
                    <Link
                      href="tel:+1-555-123-4567"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-neo-almond hover:text-neo-khaki transition-colors py-2 px-4"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="text-base font-medium">Call Now</span>
                    </Link>
                    <Link href="/booking" onClick={() => setIsOpen(false)}>
                      <NeoButton
                        variant="gold"
                        fullWidth
                        icon={<Calendar className="w-5 h-5" />}
                      >
                        Book Appointment
                      </NeoButton>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
