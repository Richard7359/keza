import Navigation from "../components/Navigation_bar/Navigation";
import Landing from "../components/home/sections/landing";
import Courses from "../components/home/sections/courses";
import Services from "../components/home/sections/services";
import Footer from "../components/home/sections/Footer";
export default function HomePage() {
  return (
    <div>
      <div className="h-[100vh]  bg-section">
        <Navigation />
        <Landing />
      </div>
      <Courses />
      <Services />
      <Footer />
    </div>
  );
}
