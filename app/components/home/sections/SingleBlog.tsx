import React from "react";
import Image from "next/image";
import Boot_camp_image from "../../../images/bootcamp copy.jpg"
import Coding from "../../../images/coding.jpg"
import Ecd from "../../../images/TrafficLight/ECD.jpg"

const SingleBlog = () => {
  return (
    <main className="px-3 container mx-auto mt-16">
      <div>
        <Image
          src={Boot_camp_image}
          alt="Blog Image"
          className="w-full h-[80vh] object-cover rounded-md"
        />
        <h3 className="text-lg font-extrabold md:text-3xl mb-4 leading-10 mt-4">
          KEFL Ltd Empower&lsquo;s Future Innovators Boot Camp: Nurturing Young
          Minds for technology Excellence
        </h3>
      </div>

      <div className="text-paragraph mt-5">
        <p>
          We are thrilled to share the resounding success of the KEFL Ltd
          Empower&lsquo;s Future Innovators Boot Camp, a one-of-a-kind
          educational experience that ignited the passion for coding,
          programming, robotics, and interactive engineering in 24 enthusiastic
          young minds. Held under the theme
          <strong>Empower&lsquo;s Future Innovator,</strong> this intensive
          program aimed to equip our future leaders with the skills and
          knowledge they need to thrive in the ever-evolving technology
          landscape.
        </p>
        <figure className="my-6">
          <Image
            src={Boot_camp_image}
            alt="Blog Image"
            className="object-cover rounded-md"
          />
          <figcaption className="text-sm text-center italic mt-1">
            Students at KEFL learning coding using Scratch programming for kids
          </figcaption>
        </figure>
        <p>
          Throughout the week-long boot camp, our participants, aged between 8
          and 14, embarked on an exciting journey of learning and discovery.
          Guided by our dedicated team of experienced instructors and mentors,
          the kids delved into various aspects of modern technology. They
          explored coding languages, programming principles, and even robotics,
          creating a solid foundation for their future endeavors.
          <br />
          <br />
          The hands-on nature of the boot camp ensured that theory seamlessly
          blended with practice. Participants got the chance to work on a
          plethora of cutting-edge tools and technologies, including the
          innovative Keza Development platform, Keza Cars, tablets, and
          computers. These resources served as building blocks for the young
          innovators to craft their own projects, ranging from car sensors that
          navigate obstacles intelligently to irrigation systems that optimize
          water usage for greener gardens.
        </p>
        <figure className="my-6">
          <Image
            src={Boot_camp_image}
            alt="Blog Image"
            className="object-cover rounded-md"
          />
          <figcaption className="text-sm text-center italic mt-1">
            Students at KEFL learning coding using Scratch programming for kids
          </figcaption>
        </figure>
        <p>
          The boot camp was a testament to KEFL Ltd&lsquo;s commitment to
          fostering creativity and ingenuity. The engaging workshops and
          interactive sessions empowered the children to think critically,
          collaborate effectively, and solve problems innovatively – essential
          skills for the 21st century. <br />
          <br />
          As we celebrate the successful conclusion of the Empower&lsquo;s
          Future Innovators Boot Camp, we extend our heartfelt gratitude to our
          participants for their enthusiasm and perseverance. We also express
          our sincere thanks to the parents and guardians for entrusting us with
          the education and growth of their children. <br />
          <br />
          We are confident that the experiences gained during this boot camp
          will serve as a strong foundation for our young innovators, propelling
          them toward a future where their creativity knows no bounds. With the
          world rapidly advancing in technology, we believe that these budding
          minds will shape the landscape of tomorrow.
          <br />
          <br />
          Stay tuned for more updates on KEFL Ltd&lsquo;s educational
          initiatives as we continue to pave the way for brilliance and
          innovation in the years to come. <br />
          <br />
        </p>
        <div className="bg-badge p-3 italic text-sm leading-6">
          <q>
            Learning through play with technology provides opportunities for
            young learners to acquire knowledge across a variety of contexts
            while developing a range of holistic skills, such as cognitive,
            creative, physical, social and emotional skills.Learning through
            play with technology provides opportunities for young learners to
            acquire knowledge across a variety of contexts while developing a
            range of holistic skills, such as cognitive, creative, physical,
            social and emotional skills.
          </q>
        </div>
        <figure className="my-6">
          <Image
            src={Boot_camp_image}
            alt="Blog Image"
            className="object-cover rounded-md"
          />
          <figcaption className="text-sm text-center italic mt-1">
            Students at KEFL making smart irrigation themselves
          </figcaption>
        </figure>

        <figure className="my-6">
          <Image
            src={Boot_camp_image}
            alt="Blog Image"
            className="object-cover rounded-md"
          />
          <figcaption className="text-sm text-center italic mt-1">
            Students at KEFL making smart self-driven car themselves using local
            materials along with the skills they learnt in the boot camp
          </figcaption>
        </figure>
      </div>

      <div className="mt-20">
        <h2 className="mb-5 font-bold xl:text-2xl">Other posts to read</h2>
        <hr className="border-[#3f3e45] mb-5" />
      </div>
      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <a href="#" className="inline-block w-full">
            <Image
              src={Ecd}
              alt="Blog Image"
              className="w-full h-40 object-cover"
            />
          </a>
          <div className="p-4">
            <span className="text-xs text-gray-500">
              ICT devices in schools
            </span>
            <a
              href=""
              className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
            >
              KFEL donates 30 teblets to students at ECD Kimihurura to help the
              learn ICT
            </a>
            <span className="inline-block text-gray-400 text-xs">
              23 August, 2023
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <a href="#" className="inline-block w-full">
            <Image
              src={Coding}
              alt="Blog Image"
              className="w-full h-40 object-cover"
            />
          </a>
          <div className="p-4">
            <span className="text-xs text-gray-500">Coding & programming</span>
            <a
              href=""
              className="block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
            >
              Coding and programming for kids.
            </a>
            <span className="inline-block text-gray-400 text-xs">
              23 August, 2023
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <a href="#" className="inline-block w-full">
            <Image
              src={Coding}
              alt="Blog Image"
              className="w-full h-40 object-cover"
            />
          </a>
          <div className="p-4">
            <span className="text-xs text-gray-500">Coding & programming</span>
            <a
              href=""
              className="block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
            >
              Coding and programming for kids
            </a>
            <span className="inline-block text-gray-400 text-xs">
              23 August, 2023
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <a href="#" className="inline-block w-full">
            <Image
              src={Coding}
              alt="Blog Image"
              className="w-full h-40 object-cover"
            />
          </a>
          <div className="p-4">
            <span className="text-xs text-gray-500">Coding & programming</span>
            <a
              href=""
              className="block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
            >
              Coding and programming for kids
            </a>
            <span className="inline-block text-gray-400 text-xs">
              23 August, 2023
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <a href="#" className="inline-block w-full">
            <Image
              src={Coding}
              alt="Blog Image"
              className="w-full h-40 object-cover"
            />
          </a>
          <div className="p-4">
            <span className="text-xs text-gray-500">Coding & programming</span>
            <a
              href=""
              className="block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
            >
              Coding and programming for kids
            </a>
            <span className="inline-block text-gray-400 text-xs">
              23 August, 2023
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <a href="#" className="inline-block w-full">
            <Image
              src={Coding}
              alt="Blog Image"
              className="w-full h-40 object-cover"
            />
          </a>
          <div className="p-4">
            <span className="text-xs text-gray-500">Coding & programming</span>
            <a
              href=""
              className="block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
            >
              Coding and programming for kids
            </a>
            <span className="inline-block text-gray-400 text-xs">
              23 August, 2023
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleBlog;
