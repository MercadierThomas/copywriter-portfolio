import { TerminalHeader } from "@/components/layout/TerminalHeader";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-code-bg text-gray-100">
    <TerminalHeader />
    
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-6">
        Je transforme des <span className="text-email-primary">CTAs</span> 
        <br />en <span className="underline decoration-wavy">$$$</span> 
        <span className="text-3xl ml-2">💻</span>
      </h1>
      
      <div className="space-y-4 border-l-4 border-email-primary pl-4">
        <p className="text-xl">Email Marketer full-stack :</p>
        <ul className="list-disc list-inside font-mono">
          <li>Copy qui convertit</li>
          <li>Intégration technique (React Email, Resend)</li>
          <li>A/B Testing automatisé</li>
        </ul>
      </div>
    </section>
  </main>
  );
}
