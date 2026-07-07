import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solutions from "@/components/home/Solutions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solutions />
      </main>
    </>
  );
}