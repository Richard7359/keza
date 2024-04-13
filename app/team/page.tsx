import Navigation from "../components/Navigation_bar/Navigation";
import Image from "next/image";
import Antoine from "../images/Antoine-MUTSINZI.png";

export default function NavigationMenuDemo() {
  return (
    <div className="bg-team-bg">
      <Navigation />
      <div className="pt-6">
        <p className="text-center py-2">Our Team</p>
        <p className="text-center">
          this is some text to be put here for a specific reason
        </p>
        <div>
          <div className="w-[400px] h-[600px] bg-white rounded-lg">
            <div className="h-[60%] w-full  flex justify-center items-center">
              <Image
                src={Antoine}
                alt="KEFL Logo image"
                className="w-[90%] h-[90%] object-cover rounded-lg bg-image"
              />
            </div>

            <div className="flex justify-center items-cente">
              <div className="w-[90%]">
                <p className="text-gray-600 font-bold tracking-wider text-xs uppercase">
                  Board Chairman
                </p>
                <p className="text-black font-bold text-xl py-2">
                  Antoine Mutsinzi
                </p>
                <p className="text-gray-700 text-sm font-light">
                  Antoine, with over 5 years as Director of Teacher Development
                  at Rwanda Education Board, played pivotal roles in
                  implementing the Competence Based Curriculum.
                </p>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
