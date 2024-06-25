import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import image from "../../images/ai2.png";
import CourseTable from "./Table";

const ViewCourseDetails = ({ selected }: { selected: string }) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer border border-level4 font-semibold bg-level4 bg-opacity-5 hover:border-level4 hover:bg-level4 hover:text-white rounded-sm text-sm px-2">
        View course details
      </DialogTrigger>
      <DialogContent className="w-[80%] p-4">
        <div className="">
          <div className="">
            <p className="text-black font-bold py-1 border border-transparent flex items-center">
              Brief Overview :{" "}
            </p>
            <p className="text-gray-700 text-sm font-light">
              {selected === "Beginner"
                ? "Dive into the world of coding with easy-to-understand block-based programming. Introduce young children to basic programming concepts through interactive and playful activities."
                : selected === "Middle"
                ? "Children learn the basics of programming using block-based coding platforms. These user-friendly interfaces help young minds grasp coding concepts by snapping together visual blocks to create commands and build simple programs. Enhance problem-solving skills and introduce more complex sequences."
                : selected === "Pre-advanced"
                ? "This program introduces pre-advanced level students, aged 10-12, to coding and robotics through hands-on activities using Scratch, Etoys, and Turtle Art. Focusing on block-based programming, game creation, and tinkering, this course aims to enhance problem-solving skills, creativity, and computational thinking.Develop intermediate programming skills through Scratch, Etoys and Turtle Art"
                : "This program is designed for students aged 13-15 who are ready to take their coding and robotics skills to the next level. Through engaging projects and hands-on activities, students will delve deeper into the world of programming using advanced and Pictoblox. The curriculum emphasizes creativity, critical thinking, and problem-solving by integrating block-based coding, game development, and tinkering with robotics. Master advanced programming concepts and project management."}
            </p>{" "}
            <p className="text-black font-bold py-1 border border-transparent flex items-center">
              {selected === "Pre-advanced" || selected === "advanced"
                ? "Objective: "
                : ""}
            </p>{" "}
            <p className="text-gray-700 text-sm font-light">
              {selected === "Pre-advanced"
                ? "Enhance coding skills with Pictoblox for real-world applications."
                : selected === "advanced"
                ? "Introduce and develop robotics skills using various platforms."
                : ""}
            </p>{" "}
            <div className="">
              {selected === "Beginner" ? (
                <div className="border-custom rounded-sm">
                  <div className="border border-b px-4 py-1 font-bold text-sm">
                    ACTIVITIES TO BE DONE
                  </div>
                  <div className="px-4 py-1 text-sm">
                    <ul>
                      <li>● Introduction to Programming</li>
                      <li>● Understanding instructions and sequences</li>
                      <li>● Interactive storytelling with blocks</li>
                      <li>● Code-a-Pillar Toy Activities</li>
                      <li>● Assembling the Code-a-Pillar to follow paths</li>
                      <li>● Simple problem-solving tasks with the toy</li>
                      <li>● Blocks-Based Programming</li>
                      <li>
                        ● Basic commands and sequencing with physical blocks
                      </li>
                      <li>● Creating simple stories and patterns</li>
                      <li>
                        ● Learning Numbers,Alphabets,animals and colors by using
                        KEZA GAMING ROBOT
                      </li>
                    </ul>
                  </div>
                </div>
              ) : selected === "Middle" ? (
                <div>
                  <CourseTable />
                </div>
              ) : selected === "Pre-advanced" ? (
                <div></div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        {/* <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader> */}
      </DialogContent>
    </Dialog>
  );
};

export default ViewCourseDetails;
