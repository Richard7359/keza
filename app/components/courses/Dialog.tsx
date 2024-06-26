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
  const begginer_activity = [
    {
      activitie: "Introduction to Programming",
      tasks: [
        "Creating longer and more complex paths.",
        "Introducing conditional paths.",
      ],
    },
    {
      activitie: "Tinkering and making",
      tasks: ["Making hands-on projects with local available materials."],
    },
    {
      activitie: "Energy Transformation",
      tasks: [
        "Differentiating the types of energy by using KEZA Energy Transformation kit",
      ],
    },
  ];

  const e_toy_activity = [
    {
      activitie: "Introduction to Turtle Art",
      tasks: ["Basic shapes and movement commands", "Drawing simple patterns"],
    },
    {
      activitie: "Creative Projects",
      tasks: [
        "Designing and drawing pictures.",
        "Understanding loops and repetition.",
      ],
    },
    {
      activitie: "Introduction to Etoys",
      tasks: [
        "Basic interface and tools",
        "Creating simple animations and games",
      ],
    },
    {
      activitie: "Project-Based Learning",
      tasks: [
        "Developing interactive stories.",
        "Introducing variables and basic control structures.",
      ],
    },
  ];

  const pre_advanced_activity = [
    {
      activitie: "Introduction to Scratch,Etoys and Turtle Art",
      tasks: [
        "Basic blocks and sprite manipulation",
        "Creating simple interactive stories",
      ],
    },
    {
      activitie: "Advanced Scratch,Etoys and Turtle Art Projects",
      tasks: [
        "Using loops, conditionals, and variables",
        "Developing simple games and animations",
      ],
    },
    {
      activitie: "Collaborative Projects",
      tasks: [
        "Working in teams to create complex projects",
        "Introducing debugging and optimization",
      ],
    },
  ];

  const advanced_activity = [
    {
      activitie: "Advanced Scratch Techniques",
      tasks: [
        "Complex animations and games",
        "Using functions and modular programming",
      ],
    },
    {
      activitie: "Pictoblox Advanced Projects",
      tasks: [
        "Integrating multiple sensors and actuators",
        "Developing real-world applications",
      ],
    },
  ];

  const advanced_toy_activity = [
    {
      activitie: "Introduction to Robotics",
      tasks: [
        "Basic concepts and components",
        "Simple robot assembly and programming",
      ],
    },
    {
      activitie: "Intermediate Robotics Projects",
      tasks: [
        "Programming robots for specific tasks",
        "Introducing autonomous behavior",
      ],
    },
    {
      activitie: "Advanced Robotics Challenges",
      tasks: [
        "Developing complex robotic systems ",
        "Problem-solving and optimization",
      ],
    },
  ];

  const pre_advanced_toy_activity = [
    {
      activitie: "Introduction to Pictoblox",
      tasks: [
        "commands and interface",
        "Creating interactive projects with sensors",
      ],
    },
    {
      activitie: "Sensor-Based Projects",
      tasks: [
        "Developing projects using various sensors",
        "Understanding input/output and real-world applications",
      ],
    },
  ];

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer border border-level4 font-semibold bg-level4 bg-opacity-5 hover:border-level4 hover:bg-level4 hover:text-white rounded-sm text-sm px-2">
        View course details
      </DialogTrigger>
      <DialogContent className="w-[95%] sm:flex sm:w-[80%] h-[95vh] sm:h-[80vh]  overflow-auto p-2 sm:p-3">
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
                  <CourseTable activity={begginer_activity} />
                  <div className="py-2 mt-2 text-sm">
                    <strong> Coding:</strong> Etoys and Turtle Art
                  </div>
                  <CourseTable activity={e_toy_activity} />
                </div>
              ) : selected === "Pre-advanced" ? (
                <div>
                  {" "}
                  <div>
                    <CourseTable activity={pre_advanced_activity} />
                    <div className="py-2 mt-2 text-sm">
                      <strong> Coding:</strong> Pictoblox
                    </div>
                    <CourseTable activity={pre_advanced_toy_activity} />
                  </div>
                </div>
              ) : (
                <div>
                  {" "}
                  <div>
                    <CourseTable activity={advanced_activity} />
                    <div className="py-2 mt-2 text-sm">
                      <strong> Robotics</strong>
                    </div>
                    <CourseTable activity={advanced_toy_activity} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewCourseDetails;
