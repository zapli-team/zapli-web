import * as motion from "motion/react-client";

import { Orb } from "@/components/orb";

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
            <motion.div
                initial={{ opacity: 0, filter: "blur(100px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                className="fixed top-0 left-0 -z-10 h-full w-full origin-bottom overflow-hidden"
            >
                <Orb
                    hue={0}
                    hueGap={0}
                    className="absolute left-1/2 w-6xl -translate-x-1/2 xl:w-[90vw]"
                    position={[0.5, -0.35]}
                />
            </motion.div>
        </>
    );
}
