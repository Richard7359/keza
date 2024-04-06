import Navigation from "../components/Navigation_bar/Navigation";
import Landing from "../components/home/sections/landing";
import Courses from "../components/home/sections/courses";
import Services from "../components/home/sections/services";
export default function HomePage() {
  return (
    <div>
      <div className="h-[100vh]  bg-burgundy">
        {/* <div className="h-[100vh]  bg-burgundy opacity-40"> */}
        <Navigation />
        {/* <Landing /> */}
      </div>
      <Courses />
      <Services />
    </div>
  );
}
