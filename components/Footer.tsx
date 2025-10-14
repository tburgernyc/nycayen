import Link from "next/link";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, Calendar } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Hair Cutting & Styling", href: "/services#cutting" },
    { name: "Hair Coloring", href: "/services#coloring" },
    { name: "Hair Treatments", href: "/services#treatments" },
    { name: "Special Occasions", href: "/services#special" },
    { name: "Consultations", href: "/services#consultation" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Book Appointment", href: "/booking" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/privacy-policy#cookies" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/nycayenmoore",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/nycayen",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/nycayen",
      icon: Twitter,
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-neo-dark to-neo-dark/80 border-t border-neo-gray/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-cormorant font-bold text-neo-cyan mb-2">
                Nycayen
              </h3>
              <p className="text-sm text-neo-blue font-medium mb-4">
                The Art of Hair
              </p>
              <p className="text-neo-gray leading-relaxed">
                Empower Through Beauty—Boosting Confidence via Personalized Hair Styling.
                Transforming lives by enhancing natural beauty and building confidence.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neo-dark rounded-full flex items-center justify-center text-neo-cyan hover:text-neo-blue transition-all duration-300 shadow-neo-flat hover:shadow-neo-elevated hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-neo-tan mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-neo-gray hover:text-neo-cyan transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-neo-tan mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neo-gray hover:text-neo-cyan transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-neo-tan mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-neo-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neo-gray">
                    {process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "123 Beauty Street, City, State 12345"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-neo-cyan flex-shrink-0" />
                <Link
                  href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+1-555-123-4567"}`}
                  className="text-sm text-neo-gray hover:text-neo-cyan transition-colors"
                >
                  {process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+1 (555) 123-4567"}
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-neo-cyan flex-shrink-0" />
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@nycayen.com"}`}
                  className="text-sm text-neo-gray hover:text-neo-cyan transition-colors"
                >
                  {process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@nycayen.com"}
                </Link>
              </div>
              
              <div className="pt-4">
                <Link
                  href="/booking"
                  className="btn-primary w-full flex items-center justify-center space-x-2 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-neo-dark rounded-neo-lg p-8 mb-12 shadow-neo-pressed border border-neo-gray/20">
          <div className="text-center">
            <h4 className="text-xl font-cormorant font-bold text-neo-cyan mb-2">
              Stay Beautiful
            </h4>
            <p className="text-neo-gray mb-6">
              Subscribe to our newsletter for the latest hair trends, tips, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neo-dark border border-neo-gray/30 rounded-neo-md text-neo-tan placeholder-neo-gray shadow-neo-pressed focus:outline-none focus:ring-2 focus:ring-neo-cyan/20 focus:border-neo-cyan transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="btn-primary px-6 py-3 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neo-gray/20 bg-neo-dark/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-neo-gray">
                © {currentYear} Nycayen. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neo-gray hover:text-neo-cyan transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}