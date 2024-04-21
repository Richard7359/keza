import Navigation from "../components/Navigation_bar/Navigation";
import Landing from "../components/home/sections/landing";
import Courses from "../components/home/sections/courses";
import Footer from "../components/Footer";
import Ourteam from "../components/our_team";
import Values from "../components/Values";
import SampleGallery from "../components/Gallery";
import Patners from "../components/home/sections/scroling_patners";
import FAQ from "../components/home/sections/FAQ";
import Testimonial from "../components/home/sections/Testimonial";

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="bg-[#838b94] font-montserrat">
        <Landing />
      </div>
      {/* <Courses /> */}
      <Values />
      <SampleGallery />
      <Testimonial />
      <FAQ />
      <Patners />
      <Ourteam />
      <Footer />
    </div>
  );
}
