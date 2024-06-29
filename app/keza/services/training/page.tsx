import React from "react";
import Image from "next/image";
import bootcamp4 from "../../../images/bootcamp-image-4.jpg";
import training1 from "../../../images/steam-training.jpg";
import training2 from "../../../images/products/ecd.jpg";
import steam1 from "../../../images/steam/steam-trainings-1.jpeg";
import steam2 from "../../../images/steam/steam-trainings-2.jpeg";
import steam3 from "../../../images/steam/steam-trainings-3.jpeg"
import steam4 from "../../../images/steam/steam-trainings-4.jpeg";
import steam5 from "../../../images/steam/steam-trainings-5.jpeg";
import steam6 from "../../../images/steam/steam-trainings-6.jpeg";
import steam7 from "../../../images/steam/steam-trainings-7.jpeg";
import steam8 from "../../../images/steam/steam-trainings-8.jpeg";
import steam9 from "../../../images/steam/steam-trainings-9.jpeg";

const page = () => {
  return (
    <div>
      <main>
        <section className="container mx-auto">
          <div className="flex flex-col items-center text-center my-10 md:mt-20 md:mb-24 px-3 md:p-0">
            <h2 className="font-extrabold text-3xl md:text-5xl md:pr-8">
              STEAM trainings
            </h2>
            <p className="text-sm mt-1 text-paragraph">
              STEAM traings are done on both teachers & students, read all about
              them accordingly
            </p>
          </div>

          <article className="course grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">
            <div className="course_content">
              <h3 className="font-bold text-2xl md:text-3xl mb-4 md:mt-0">
                For teachers
              </h3>
              <p className="text-paragraph">
                KEFL has a deep understanding of the local context and the
                challenges faced by the Rwanda’ education system. It is
                committed to harnessing the power of technology to enhance
                teaching and learning experiences in the STEAM related subjects.
                By utilizing digital tools, interactive platforms, and engaging
                content, KEFL aims to make learning enjoyable, interactive, and
                relevant to the lives of Rwandan students.
              </p>
              <br />
              <p className="text-paragraph">
                KEFL provides a comprehensive suite of learning materials,
                including interactive digital textbooks, educational games,
                multimedia resources, and teacher support materials. These
                resources are designed to promote active learning, inquiry-based
                approaches, and collaborative problem-solving, ensuring that
                students develop the necessary competencies outlined in the CBC.
              </p>
            </div>

            <div>
              <Image
                src={training1}
                alt=""
                className="rounded-md sticky top-0 overflow-hidden mb-10 md:mb-0 mt-6 md:mt-0 max-h-[550px] max-w-[500px]"
              />
            </div>
          </article>

          <article className="course grid md:grid-cols-2 md:gap-x-14 md:my-20 px-3 md:px-0">
            <div className="">
              <Image
                src={training2}
                alt=""
                className="rounded-md sticky top-0 overflow-hidden mt-6 md:mt-0 max-h-[450px] max-w-[640px]"
              />
            </div>
            <div className="course_content">
              <h3 className="font-bold text-2xl md:text-3xl mb-4 md:mt-0">
                For students
              </h3>
              <p className="text-paragraph">
                At KEFL (Keza Education Future Lab), we are committed to
                providing high-quality STEAM (Science, Technology, Engineering,
                Arts, and Mathematics) education for students through our
                weekend and holiday programs. Our focus is on training children
                in the exciting fields of robotics and programming from an early
                age. This documentation outlines our approach and the advantages
                of introducing robotics and programming to young learners.
              </p>
              <br />
              <p className="text-paragraph">
                At KEFL, we are dedicated to providing a comprehensive STEAM
                education that equips students with the skills and knowledge
                needed to thrive in the 21st century. Through our robotics and
                programming programs, we inspire young minds, and prepare them
                for a future filled with innovation and discovery. Join us in
                shaping the future leaders and innovators of tomorrow.
              </p>
              <br />
              <br />
              <h3 className="text-darkGrey font-bold text-lg mb-2">
                Our Approach to STEAM trainings for students
              </h3>
              <ul className="list pl-5 text-paragraph">
                <li>Hands-On Learning</li>
                <li>Age-Appropriate Curriculum</li>
                <li>Real-World Applications</li>
                <li>Collaboration and Problem-Solving</li>
                <li>Project-Based Learning</li>
              </ul>
            </div>
          </article>
        </section>
        <section>
          <article className="container mx-auto px-3 mt-20 md:mb-24 md:px-0">
            <div className="flex flex-col items-center text-center my-10 md:mt-36 md:mb-24 md:p-0">
              <h2 className="font-extrabold text-3xl md:text-5xl md:pr-8">
                STEAM trainings garelly
              </h2>
              <p className="text-sm mt-1 text-paragraph text-center">
                Take a look STEAM tainings going on in different areas of the
                country.
              </p>
            </div>
            <div className="grid md:grid-cols-3 md:grid-rows-3 gap-2 mb-10">
              <div className="h-60">
                <Image
                  src={steam1}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="h-60">
                <Image
                  src={steam2}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="h-60">
                <Image
                  src={steam3}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="h-60">
                <Image
                  src={steam4}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="h-60">
                <Image
                  src={steam5}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="h-60">
                <Image
                  src={steam6}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="h-60">
                <Image
                  src={steam7}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="h-60">
                <Image
                  src={steam8}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="h-60">
                <Image
                  src={steam9}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
            </div>
          </article>
          <article className="container mx-auto my-10 px-3 md:px-0 flex flex-col justify-center items-center">
            <h3 className="font-extrabold text-3xl text-darkGrey text-center md:text-left pt-10 md:pt-0 md:text-4xl md:pr-8">
              Want to be trained?
            </h3>
            <p className="text-paragraph text-center">
              Need more information on how we can train your teachers or
              students
            </p>
            <p className="text-4xl mt-8 animate-bounce">&#128071;&#127998;</p>
            <a
              href="/contact/contact-us.html"
              className="px-10 py-3 bg-deepSkyBlue hover:opacity-80 mt-8 rounded-md text-white"
            >
              Send us a message
            </a>
          </article>
        </section>
      </main>
    </div>
  );
};

export default page;
