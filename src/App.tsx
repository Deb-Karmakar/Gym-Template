
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import WhyChooseUs from './components/sections/WhyChooseUs';
import MeetOurTrainers from './components/sections/MeetOurTrainers';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-500 selection:text-white overflow-x-hidden w-full relative">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <MeetOurTrainers />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
