import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solutions from "@/components/home/Solutions";
import AiWorkforce from "@/components/home/AiWorkforce";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import OutcomeStories from "@/components/home/OutcomeStories";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <AiWorkforce />
        <Process />
        <Industries />
        <OutcomeStories />
      </main>
    </>
  );
}