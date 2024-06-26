import React from "react";
import Image from "next/image";
import Boot_camp_image_1 from "../../../images/bootcamp-image-2.jpg";
import Alcide from "../../../images/mutsinzi-alcide.jpg";
import kefl_workshop from "../../../images/kefl-prod-1.jpg";

const Blog = () => {
  return (
    <div>
      <section className="container mx-auto px-5 py-10 md:px-0">
        <article className="container mx-auto">
          <div className="flex flex-col gap-4 items-center text-center my-10 md:mt-20 md:mb-24 md:p-0">
            <h2 className="font-extrabold text-3xl md:text-5xl">Blogs</h2>
            <p className="mt-1 text-paragraph text-center max-w-xl">
              The higlights of the latest articles and news from KEFL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src={Boot_camp_image_1}
                alt="Blog Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-gray-500">Bootcamp 23</span>
                <h3 className="text-lg font-semibold mt-2">
                  KEFL Ltd Empower&apos;s Future Innovators Boot Camp: Nurturing
                  Young Minds for technology Excellence
                </h3>
                <span className="text-gray-400 text-xs">23 August, 2023</span>
                <br />
                <a
                  href="/blog/summer-camp-2023.html"
                  className="inline-block mt-3 text-burgundy hover:underline hover:underline-offset-8"
                >
                  Read More <span className="animate-arrow">→</span>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src={Alcide}
                alt="Mutsinzi Alcide a kid in bootcamp image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-gray-500">Bootcamp 23</span>
                <h3 className="text-lg font-semibold mt-2">
                  He has a dream to create a car that can avoid accidents
                  automatically
                </h3>
                <span className="text-gray-400 text-xs">24 August, 2023</span>
                <br />
                <a
                  href="https://www.kigalitoday.com/ikoranabuhanga/ubumenyi/Afite-inzozi-zo-gukora-imodoka-ishobora-kwirinda-impanuka"
                  target="_blank"
                  className="inline-block mt-3 text-burgundy hover:underline hover:underline-offset-8"
                >
                  Read the whole article on Kigali Today
                  <span className="animate-arrow">→</span>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src={kefl_workshop}
                alt="Blog Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-gray-500">News</span>
                <h3 className="text-lg font-semibold mt-2">
                  How Keza Education Future Lab has taken steps to create robots
                  that can be helpful to children
                </h3>
                <span className="text-gray-400 text-xs">
                  13 September, 2023
                </span>
                <br />
                <a
                  href="https://igihe.com/ikoranabuhanga/ibindi-bikoresho/article/uko-keza-education-future-lab-yateye-intambwe-yo-gukora-robots-zifashishwa-n"
                  target="_blank"
                  className="inline-block mt-3 text-burgundy hover:underline hover:underline-offset-8"
                >
                  Read the whole article on Igihe
                  <span className="animate-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-10">
            <a
              href="/blog/blogs.html"
              className="border border-burgundy rounded-full px-24 md:px-28 py-3 text-burgundy hover:bg-burgundy hover:bg-opacity-10 transition duration-300"
            >
              More articles
            </a>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Blog;
