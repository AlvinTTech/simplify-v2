import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import RoleIntro from "@/components/home/RoleIntro";
import Problem from "@/components/home/Problem";
import Solutions from "@/components/home/Solutions";
import AiWorkforce from "@/components/home/AiWorkforce";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import OutcomeStories from "@/components/home/OutcomeStories";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <RoleIntro />
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Solutions />
        <AiWorkforce />
        <Process />
        <Industries />
        <OutcomeStories />
        <CTA />
      </main>

      <Footer />
    </>
  );
}