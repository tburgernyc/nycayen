"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scissors,
  Palette,
  Sparkles,
  Crown,
  Users,
  Calendar,
  Clock,
  Star,
  ArrowRight
} from "lucide-react";
import { NeoButton } from "./ui/NeoButton";
import { NeoCard } from "./ui/NeoCard";

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ElementType;
  features: string[];
  popular?: boolean;
  image?: string;
  category: 'cutting' | 'coloring' | 'treatments' | 'special';
}

interface ServicesListProps {
  limit?: number;
  showCategories?: boolean;
}

export function ServicesList({ limit, showCategories = true }: ServicesListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const services: Service[] = [
    {
      id: "1",
      name: "Signature Hair Cut & Style",
      description: "Personalized cutting and styling service tailored to your face shape, lifestyle, and personal style. Includes consultation, wash, cut, and finish.",
      price: "Starting at $85",
      duration: "90 min",
      icon: Scissors,
      category: "cutting",
      features: [
        "Personal consultation",
        "Professional wash & condition",
        "Precision cutting",
        "Custom styling",
        "Product recommendations"
      ],
      popular: true,
    },
    {
      id: "2",
      name: "Color Transformation",
      description: "Complete color makeover including highlights, lowlights, full color, or balayage. Our expert colorists create stunning, natural-looking results.",
      price: "Starting at $150",
      duration: "2-3 hours",
      icon: Palette,
      category: "coloring",
      features: [
        "Color consultation",
        "Professional color application",
        "Toning & glossing",
        "Heat styling",
        "Color maintenance tips"
      ],
    },
    {
      id: "3",
      name: "Keratin Hair Treatment",
      description: "Deep conditioning treatment that smooths, strengthens, and adds incredible shine to your hair. Perfect for frizzy or damaged hair.",
      price: "Starting at $200",
      duration: "2 hours",
      icon: Sparkles,
      category: "treatments",
      features: [
        "Deep cleansing shampoo",
        "Keratin application",
        "Heat sealing process",
        "Protective styling",
        "Aftercare instructions"
      ],
    },
    {
      id: "4",
      name: "Special Event Styling",
      description: "Glamorous styling for weddings, proms, parties, and special occasions. Includes trial run and day-of styling.",
      price: "Starting at $120",
      duration: "60-90 min",
      icon: Crown,
      category: "special",
      features: [
        "Style consultation",
        "Trial styling session",
        "Event day styling",
        "Touch-up kit",
        "Photography-ready finish"
      ],
      popular: true,
    },
    {
      id: "5",
      name: "Balayage & Highlights",
      description: "Hand-painted highlights that create natural, sun-kissed dimension. Perfect for a low-maintenance, high-impact look.",
      price: "Starting at $180",
      duration: "2.5 hours",
      icon: Palette,
      category: "coloring",
      features: [
        "Hand-painted technique",
        "Natural color placement",
        "Toning service",
        "Gloss treatment",
        "Style finish"
      ],
    },
    {
      id: "6",
      name: "Hair Extensions",
      description: "Premium quality extensions for length, volume, or color. Various application methods available including tape-in, clip-in, and permanent.",
      price: "Starting at $300",
      duration: "2-4 hours",
      icon: Users,
      category: "special",
      features: [
        "Extension consultation",
        "Color matching",
        "Professional application",
        "Blending & styling",
        "Maintenance guide"
      ],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'cutting', name: 'Cutting & Styling', icon: Scissors },
    { id: 'coloring', name: 'Color Services', icon: Palette },
    { id: 'treatments', name: 'Hair Treatments', icon: Sparkles },
    { id: 'special', name: 'Special Occasions', icon: Crown },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Category Filter */}
      {showCategories && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-neo-md font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-neo-steel text-neo-gold shadow-neo-elevated hover:shadow-neo-elevated-hover"
                    : "bg-neo-dark text-neo-champagne shadow-neo-pressed hover:shadow-neo-flat border border-neo-taupe/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Services Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {displayedServices.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="relative group"
            >
              <NeoCard variant="elevated" className="p-6 h-full hover:shadow-neo-elevated-hover transition-all duration-300 relative overflow-hidden">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-neo-gold text-neo-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-neo-flat">
                    Popular
                  </div>
                )}

                {/* Service Icon */}
                <div className="w-16 h-16 bg-neo-dark rounded-neo-md shadow-neo-pressed flex items-center justify-center mb-6 group-hover:shadow-neo-flat transition-all duration-300">
                  <Icon className="w-8 h-8 text-neo-gold" />
                </div>

                {/* Service Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-neo-champagne mb-2">
                      {service.name}
                    </h3>
                    <p className="text-neo-taupe leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between text-sm pt-3 border-t border-neo-taupe/20">
                    <div className="flex items-center space-x-1 text-neo-gold font-semibold">
                      <span>{service.price}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-neo-taupe">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-neo-champagne">Includes:</h4>
                    <ul className="space-y-1.5">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-neo-taupe flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-neo-gold rounded-full flex-shrink-0 shadow-[0_0_4px_rgba(197,164,109,0.6)]"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-neo-gold font-medium">
                          +{service.features.length - 3} more...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3 pt-4">
                    <Link href={`/booking?service=${encodeURIComponent(service.name)}`}>
                      <NeoButton
                        variant="gold"
                        fullWidth
                        icon={<Calendar className="w-4 h-4" />}
                      >
                        Book Now
                      </NeoButton>
                    </Link>
                    <Link href={`/services#${service.category}`}>
                      <NeoButton
                        variant="secondary"
                        fullWidth
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Learn More
                      </NeoButton>
                    </Link>
                  </div>
                </div>
              </NeoCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* View All Services Link */}
      {limit && filteredServices.length > limit && (
        <div className="text-center mt-12">
          <Link href="/services">
            <NeoButton
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Services
            </NeoButton>
          </Link>
        </div>
      )}

      {/* No Services Message */}
      {displayedServices.length === 0 && (
        <NeoCard variant="flat" className="text-center py-12">
          <Sparkles className="w-16 h-16 text-neo-gold/50 mx-auto mb-4" />
          <h3 className="text-xl font-playfair font-semibold text-neo-champagne mb-2">
            No services found
          </h3>
          <p className="text-neo-taupe">
            Try selecting a different category to see our available services.
          </p>
        </NeoCard>
      )}
    </div>
  );
}