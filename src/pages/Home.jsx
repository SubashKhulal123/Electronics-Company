import Hero from "../components/Hero/Hero";
import FAQ from "../components/FAQ/FAQ";
import ClosingSignOff from "../components/ClosingSignOff/ClosingSignOff";
import QuickFacts from "../components/QuickFacts/QuickFacts";

export default function Home() {
  return (
    <>
      <Hero />
       <QuickFacts />
      <FAQ />
      <ClosingSignOff />
    </>
  );
}