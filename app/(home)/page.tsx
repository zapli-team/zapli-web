import { AboutSection } from "./components/about-section";
import { ChatbotSection } from "./components/chatbot-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { PhoneSection } from "./components/phone-section";
import { ServicesSection } from "./components/services-section";
import { TestimonaiSection } from "./components/testimonial-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <PhoneSection />
            <ChatbotSection />
            <ServicesSection />
            <AboutSection />
            <TestimonaiSection />
            <ContactSection />
        </>
    );
}
