import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Statement from "@/components/Statement";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col items-center">
      {/* Global Navbar */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="w-full flex flex-col items-center">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Selected Works */}
        <SelectedWorks />

        {/* Section 3: Hallo section (Statement) */}
        <Statement />

        {/* Section 4: Services */}
        <Services />

        {/* Section 5: How it works (Process & Reviews) */}
        <Process />

        {/* Section 6: Who Am I (About) */}
        <About />

        {/* Section 7: Final CTA + Footer */}
        <Footer />
      </main>
    </div>
  );
}
