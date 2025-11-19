import { Metadata } from "next";

export const metadata: Metadata = {
    title: "צרו קשר",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return children;
}
