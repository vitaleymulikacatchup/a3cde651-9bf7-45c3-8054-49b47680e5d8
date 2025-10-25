"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Building, Handshake, Mail, MessageSquare, Radio, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Solutions", id: "socialProof" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AP Wireless"
          button={{ text: "Get Quote", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Leading Global Telecom Infrastructure Solutions"
          description="We specialize in site acquisition, leasing, and management services for wireless infrastructure across multiple markets worldwide. Trusted by industry leaders for comprehensive telecom solutions."
          tag="Global Leader"
          tagIcon={Radio}
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Our Services", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/2525871/pexels-photo-2525871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern telecom infrastructure and wireless towers"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About AP Wireless"
          description={[
            "We are a leading global telecom and digital infrastructure solutions provider with expertise spanning site acquisition, leasing, and comprehensive management services.",
            "Our worldwide presence and deep industry knowledge enable us to deliver scalable wireless infrastructure solutions across multiple markets, supporting the digital transformation of businesses and communities."
          ]}
          buttons={[{ text: "Learn More", href: "feature" }]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Comprehensive Infrastructure Services"
          description="End-to-end telecom solutions designed to accelerate your wireless infrastructure deployment and management"
          tag="Services"
          tagIcon={Building}
          features={[
            {
              id: "01",
              title: "Site Acquisition",
              description: "Strategic site identification and acquisition services for optimal wireless network coverage and performance",
              imageSrc: "https://images.pexels.com/photos/31505963/pexels-photo-31505963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Site acquisition services"
            },
            {
              id: "02",
              title: "Infrastructure Leasing",
              description: "Flexible leasing solutions for wireless infrastructure assets with competitive terms and comprehensive support",
              imageSrc: "https://images.pexels.com/photos/19728112/pexels-photo-19728112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Infrastructure leasing solutions"
            },
            {
              id: "03",
              title: "Management Services",
              description: "Complete lifecycle management of wireless infrastructure assets from deployment to optimization",
              imageSrc: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Management services"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Global Reach & Impact"
          description="Our worldwide presence and proven track record in telecom infrastructure"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50+",
              description: "Countries Served Globally"
            },
            {
              id: "2",
              value: "10K+",
              description: "Infrastructure Sites Managed"
            },
            {
              id: "3",
              value: "99.9%",
              description: "Network Uptime Guarantee"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Industry Leaders Say"
          description="Trusted by telecommunications companies worldwide"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahm_telecom",
              testimonial: "AP Wireless transformed our infrastructure deployment timeline. Their site acquisition expertise and management services are unmatched in the industry.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchen_wireless",
              testimonial: "Outstanding service quality and global reach. AP Wireless has been instrumental in our international expansion strategy.",
              imageSrc: "https://images.pexels.com/photos/34410161/pexels-photo-34410161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Jennifer Rodriguez",
              handle: "@jrodriguez_infra",
              testimonial: "The comprehensive leasing solutions and ongoing support have streamlined our operations significantly. Highly recommended.",
              imageSrc: "https://images.pexels.com/photos/7793739/pexels-photo-7793739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Park",
              handle: "@dpark_networks",
              testimonial: "AP Wireless delivers on their promises. Professional team, reliable infrastructure, and excellent customer service throughout our partnership.",
              imageSrc: "https://images.pexels.com/photos/1181728/pexels-photo-1181728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Park portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join leading telecom companies who trust AP Wireless for their infrastructure needs"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our telecom infrastructure services"
          faqs={[
            {
              id: "1",
              title: "What markets do you operate in?",
              content: "We provide telecom infrastructure solutions across multiple global markets, with active operations in over 50 countries worldwide. Our expertise spans North America, Europe, Asia-Pacific, and emerging markets."
            },
            {
              id: "2",
              title: "How long does site acquisition typically take?",
              content: "Site acquisition timelines vary by location and complexity, but we typically complete the process within 60-90 days. Our experienced team works efficiently to minimize delays and ensure regulatory compliance."
            },
            {
              id: "3",
              title: "What types of infrastructure do you manage?",
              content: "We manage a comprehensive range of wireless infrastructure including cell towers, rooftop installations, distributed antenna systems (DAS), small cells, and fiber networks. Our services cover the complete infrastructure lifecycle."
            },
            {
              id: "4",
              title: "Do you provide 24/7 support?",
              content: "Yes, we offer round-the-clock monitoring and support services to ensure maximum uptime for your infrastructure. Our global operations center provides continuous oversight and rapid response to any issues."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          tagIcon={Mail}
          title="Ready to Transform Your Infrastructure?"
          description="Contact our team of experts to discuss your wireless infrastructure needs and discover how AP Wireless can accelerate your deployment timeline."
          inputPlaceholder="Enter your business email"
          buttonText="Get Quote"
          termsText="By submitting, you agree to receive information about our telecom infrastructure solutions."
          imageSrc="https://images.pexels.com/photos/2004316/pexels-photo-2004316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="AP Wireless office building"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                { label: "Site Acquisition", href: "feature" },
                { label: "Infrastructure Leasing", href: "feature" },
                { label: "Management Services", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Global Reach", href: "metric" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Documentation", href: "#" },
                { label: "Help Center", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 | AP Wireless"
        />
      </div>
    </ThemeProvider>
  );
}