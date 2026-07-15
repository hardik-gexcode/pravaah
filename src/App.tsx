import { useLenis } from "./hooks/useLenis";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Opportunity from "./components/Opportunity";
import Architecture from "./components/Architecture";
import ScoreEngine from "./components/ScoreEngine";
import Interfaces from "./components/Interfaces";
import Sectors from "./components/Sectors";
import Offline from "./components/Offline";
import BusinessModel from "./components/BusinessModel";
import Impact from "./components/Impact";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

export default function App() {
  useLenis();

  return (
    <div className="relative">
      <div className="paper-grain" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Opportunity />
        <Architecture />
        <ScoreEngine />
        <Interfaces />
        <Sectors />
        <Offline />
        <BusinessModel />
        <Impact />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
