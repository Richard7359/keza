import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";

const NewsLetter = () => {
  return (
    <section className="py-10 mt-10 bg-deepSkyBlue">
      <article className="container mx-auto grid place-items-center md:grid-cols-2 rounded-md w-fit px-3 md:px-0">
        <div>
          <div className="flex gap-4 justify-center items-center md:justify-start">
            {/* <img src="/assets/news-letter-img.svg" alt="" /> */}
            {/* <SlEnvolopeLetter className='text-white font-bold'/> */}
            <h3 className="font-bold text-4xl md:text-5xl text-white text-center md:text-left pt-10 md:pt-0 md:pr-8">
              Newsletter
            </h3>
          </div>

          <p className="text-white text-center md:text-left my-7 w-fit">
            Sign up for KEFL news letter to be the first to know the updates in
            thec world of children, and upcomings of KEFL
          </p>
          <form className="">
            <input
              type="email"
              placeholder="Type your email address here"
              className="w-full p-3 rounded-xl border-none outline-none focus:border focus:border-darkGrey"
            />
            <button className="w-full py-3 bg-darkGrey hover:bg-black text-white mt-5 rounded-full">
              Send
            </button>
          </form>
        </div>

        <div className="py-10 w-full flex justify-center">
          <a
            className="twitter-timeline"
            data-width="370"
            data-height="500"
            href="https://twitter.com/kefl_rw?ref_src=twsrc%5Etfw"
          >
            Tweets by kefl_rw
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      </article>
    </section>
  );
};

export default NewsLetter;
