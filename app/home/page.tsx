import Navigation from "../components/Navigation_bar/Navigation";
import Landing from "../components/home/sections/landing";
import Courses from "../components/home/sections/courses";
import Services from "../components/home/sections/services";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <div>
      <div className="h-[100vh]  bg-white font-montserrat">
        <Navigation />
        <Landing />
      </div>
      <Courses />
      <Services />
      <Footer />
      <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
  <div className="elfsight-app-e6faf39d-9af5-4ec3-bb8c-8b556592848c"></div> 
    </div>
  );
}
