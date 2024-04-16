import Navigation from "../components/Navigation_bar/Navigation";
import Landing from "../components/home/sections/landing";
import Courses from "../components/home/sections/courses";
import Footer from "../components/Footer";
import Ourteam from "../components/our_team";
import Values from "../components/Values";
import SampleGallery from "../components/Gallery";

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="bg-[#838b94] font-montserrat">
        <Landing />
      </div>
      <Courses />
      <Values />
      <SampleGallery />
      <Ourteam />
      <Footer />
    </div>
  );
}
