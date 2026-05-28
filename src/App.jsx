import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection";
import DivineExperienceSection from "./components/DivineExperienceSection/DivineExperienceSection";
import EventsSection from "./components/EventsSection/EventsSection";
import LocationSection from "./components/LocationSection/LocationSection";
import SocialSection from "./components/SocialSection/SocialSection";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <IntroductionSection />
        <DivineExperienceSection />
        <EventsSection />
        <LocationSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
