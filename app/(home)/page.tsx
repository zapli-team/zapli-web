import { AboutSection } from "./components/about-section";
import { ChatbotSection } from "./components/chatbot-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { PhoneSection } from "./components/phone-section";
import { TestimonaiSection } from "./components/testimonial-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <PhoneSection />
            <ChatbotSection />
            <AboutSection />
            <TestimonaiSection />
            <ContactSection />
        </>
    );
}
