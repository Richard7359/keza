import React from 'react'
import Image from 'next/image'
import Robotics_gallery from '../services/engraving/Robotics_gallery'
import coding from '../../images/coding.jpg'
import interactive from '../../images/interactive-engineering-for-kids.jpeg'
import interactive_enginnering from '../../images/interactive_engineering1.png'
import ai from '../../images/ai2.png'

const Other_course = () => {
  return (
    <section className="my-10">
      <article className="container mx-auto px-3 md:px-0">
        <div className="mt-20">
          <h4 className="mb-3 font-bold text-xl md:text-2xl">
            Other courses you might like
          </h4>
          <hr className="border-[#3f3e45] mb-10" />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <a href="./coding-and-programming.html" className="flex flex-col gap-5 shadow-2xl px-3 py-5">
            <Image src={coding} alt="" className="rounded-md w-full md:h-[154px] object-cover" />
            <h3 className="font-semibold">Coding & Programming</h3>
            <p className="font-normal text-paragraph text-xs">
              Coding and programming, a great course for kids to improve their
              logical and critical thinking that absolutely help them to
              understand Math and other critical courses easily.
            </p>
          </a>

          <a href="./interactive-engineering.html" className="flex flex-col gap-5 shadow-2xl px-3 py-5">
            <Image src={interactive_enginnering} alt="" className="rounded-md w-full md:h-[154px] object-cover" />
            <h3 className="font-semibold">Interactive Engineering</h3>
            <p className="font-normal text-paragraph text-xs">
              Interactive engineering, a great course for kids that helps them
              build and control their own robot.
            </p>
          </a>

          <a href="./artificial-intelligence.html" className="flex flex-col gap-5 shadow-2xl px-3 py-5">
            <Image src={ai} alt="" className="rounded-md w-full md:h-[154px] object-cover" />
            <h3 className="font-semibold">Artificial Intelligence</h3>
            <p className="font-normal text-paragraph text-xs">
              Artificial Intelligence or AI in short is a great course for
              kids that helps them build and let a robot control itsefl.
            </p>
          </a>
        </div>
      </article>
{/* 
      <div className="flex justify-center my-10">
        <a href="./all-courses.html"
          className="border border-burgundy rounded-md px-28 py-3 text-burgundy hover:bg-burgundy hover:bg-opacity-10 transition duration-300">View
          more courses</a>
      </div> */}
    </section>
  )
}

export default Other_course
