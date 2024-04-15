import Navigation from "../components/Navigation_bar/Navigation";
import Landing from "../components/home/sections/landing";
import Courses from "../components/home/sections/courses";
import Services from "../components/home/sections/services";
import Footer from "../components/Footer";
import Ourteam from "../components/our_team";
import HowWeWork from "../components/How_we_work";
export default function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="bg-[#838b94] font-montserrat">
        <Landing />
      </div>
      <Courses />
      <HowWeWork />
      {/* <Services /> */}
      <Ourteam />
      <Footer />
    </div>
  );
}
