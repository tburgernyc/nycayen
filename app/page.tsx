"use client";

import { HeroSection } from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonials";
import { ServicesList } from "@/components/ServicesList";
import { BookingWidget } from "@/components/BookingWidget";
import { Sparkles, Star, Eye, Crown, Scissors, Heart, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { NeoCard } from "@/components/ui/NeoCard";

export default function Home() {
  const valueProps = [
    {
      icon: TrendingUp,
      title: "Trendy Styles",
      description: "Stay up-to-date with the latest trendy hairstyles."
    },
    {
      icon: Sparkles,
      title: "Customized Looks",
      description: "Get a customized look tailored to your individual preferences and features."
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "Experience meticulous attention to detail in every aspect of our services."
    },
    {
      icon: Crown,
      title: "Celebrity Treatment",
      description: "Receive the same VIP treatment enjoyed by celebrities and influencers."
    }
  ];

  const features = [
    {
      icon: Scissors,
      title: "Skillful Styling",
      description: "Trust in our stylists' expertise to transform your hair into a work of art."
    },
    {
      icon: CheckCircle,
      title: "Precision Perfectionists",
      description: "We believe that even the smallest details can make or break a hairstyle. That's why we take pride in our precision and ensure every element is flawlessly executed. From start to finish, we go above and beyond for flawless results."
    },
    {
      icon: Heart,
      title: "Tailored Treatments",
      description: "We understand that every individual is unique and deserves a customized experience. Our stylists take the time to listen to your preferences and tailor our services to meet your specific needs. From consultation to completion, we ensure you receive exceptional service every step of the way."
    }
  ];

  const specializations = [
    "From romantic updos to elegant braids, our expert stylists will make sure you look stunning on your wedding day.",
    "Our creative team is always experimenting with new styles to bring you the latest trends in hair fashion.",
    "Our stylists excel in creating versatile looks that can be easily transformed to match any event or mood.",
    "With their expert knowledge and skills, our team brings out the best in your hair, leaving you feeling confident and beautiful.",
    "Whether it's a red carpet event or a romantic date night, we will create a stunning hairstyle that suits the occasion.",
    "Our commitment to quality ensures that your hair receives optimal care and stays healthy and vibrant."
  ];

  const faqs = [
    {
      question: "What services does Nycayen Moore specialize in?",
      answer: "Nycayen Moore specializes in men's grooming, bridal hair styling, and personalized hair styling for any occasion."
    },
    {
      question: "Can Nycayen Moore handle all hair types?",
      answer: "Yes, our expert hairstylists at Nycayen Moore have experience handling all hair types and textures."
    },
    {
      question: "Does Nycayen Moore offer services outside of their location?",
      answer: "Absolutely! Nycayen Moore offers its professional services anywhere in the United States."
    },
    {
      question: "What makes Nycayen Moore different from other salons?",
      answer: "Nycayen Moore stands out with its focus on expert techniques, attention to detail, and personalized service for each client."
    },
    {
      question: "Does Nycayen Moore offer makeup services?",
      answer: "No, Nycayen Moore specializes in hair services only. We do not offer makeup services."
    }
  ];

  return (
    <div className="min-h-screen bg-neo-black">
      <HeroSection />

      {/* Value Propositions Section */}
      <section className="py-20 bg-neo-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NeoCard className="h-full text-center p-8 hover:shadow-neo-high transition-all duration-300">
                  <div className="w-16 h-16 bg-neo-khaki/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <prop.icon className="w-8 h-8 text-neo-khaki" />
                  </div>
                  <h3 className="text-xl font-cormorant font-bold text-neo-khaki mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-neo-almond leading-relaxed">
                    {prop.description}
                  </p>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Radiate Confidence Section */}
      <section className="py-20 bg-gradient-to-b from-neo-black to-neo-gunmetal/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-cormorant font-bold text-neo-khaki mb-4"
            >
              Nycayen Moore
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-cormorant font-semibold text-neo-almond mb-8"
            >
              Radiate Confidence
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neo-almond/90 leading-relaxed"
            >
              Nycayen believe that great hair can transform your life. Our personalized hair styling services are designed to enhance your natural beauty and boost your confidence. Whether it&apos;s a chic cut or a glamorous updo, we ensure you leave our care feeling empowered and ready to take on the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Professional Hair Styling Section */}
      <section className="py-20 bg-neo-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-neo-khaki mb-4">
              Professional Hair Styling
            </h2>
            <p className="text-2xl text-neo-almond/90 max-w-2xl mx-auto mb-6">
              Discover our range of hair services for all occasions
            </p>
            <p className="text-lg text-neo-almond/80 max-w-3xl mx-auto leading-relaxed">
              We offer a variety of hair services to cater to your individual needs. Our team of expert stylists specializes in professional hair styling and is committed to providing personalized service with exceptional attention to detail. Whether you&apos;re a groom-to-be, a bride-to-be, a celebrity, a trendsetter, or a model, we have the expertise and techniques to create the perfect look for you.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* Unmatched Experience Section - Features */}
      <section className="py-20 bg-gradient-to-b from-neo-black to-neo-gunmetal/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-neo-khaki mb-4">
              Unmatched Hair Salon Experience
            </h2>
            <p className="text-2xl text-neo-almond/90 max-w-2xl mx-auto mb-4">
              Elevate your style with our exceptional salon services
            </p>
            <p className="text-lg text-neo-almond/80 max-w-3xl mx-auto">
              With decades of experience and a commitment to perfection, we provide personalized services that set us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NeoCard className="h-full p-8">
                  <div className="w-16 h-16 bg-neo-khaki/10 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-neo-khaki" />
                  </div>
                  <h3 className="text-2xl font-cormorant font-bold text-neo-khaki mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-neo-almond/90 leading-relaxed">
                    {feature.description}
                  </p>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Specializations Section */}
      <section className="py-20 bg-neo-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-neo-khaki mb-4">
              Personalized Hair Styling for Weddings, Events, and Special Occasions
            </h2>
            <p className="text-xl text-neo-almond/90 max-w-3xl mx-auto mb-8">
              Look stunning on your big day with our personalized hair styling services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NeoCard className="h-full p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-neo-khaki/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-4 h-4 text-neo-khaki" fill="currentColor" />
                    </div>
                    <p className="text-neo-almond/90 leading-relaxed">
                      {spec}
                    </p>
                  </div>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-neo-black to-neo-gunmetal/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-neo-khaki mb-4">
              Impressive
            </h2>
            <p className="text-2xl text-neo-almond/90 max-w-2xl mx-auto">
              Exceptional Testimonials from Satisfied Clients
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neo-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-neo-khaki mb-4">
                Frequently Asked Questions About Our Services
              </h2>
              <p className="text-xl text-neo-almond/90 max-w-2xl mx-auto">
                Find answers to common questions about Nycayen Moore&apos;s expert hair styling services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <summary className="flex items-center justify-between cursor-pointer bg-neo-gunmetal p-6 rounded-neo-lg shadow-neo-elevated hover:shadow-neo-high transition-all duration-300 list-none">
                    <span className="text-lg font-semibold text-neo-khaki pr-4">
                      {faq.question}
                    </span>
                    <span className="text-neo-khaki text-2xl flex-shrink-0 group-open:rotate-180 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="bg-neo-gunmetal/50 p-6 mt-2 rounded-neo-lg shadow-neo-pressed">
                    <p className="text-neo-almond/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-neo-black to-neo-gunmetal/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-neo-khaki mb-6">
              Schedule Your Appointment Today
            </h2>
            <p className="text-xl text-neo-almond/90 max-w-2xl mx-auto mb-12">
              Ready to transform your hair and experience the difference? Fill out the form below to schedule your appointment and take the first step towards your new look. We can&apos;t wait to meet you!
            </p>
            <BookingWidget />
          </div>
        </div>
      </section>
    </div>
  );
}
