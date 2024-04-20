import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Title from "../../Title";

const FAQ = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-16">
      <div>
        <div className="flex justify-center">
          <Title title="FAQs" />
        </div>
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Your Questiones are Answered
        </h2>
      </div>
      <div className="flex justify-center">
        <Accordion type="single" collapsible className="w-[70%] border-none">
          <AccordionItem value="item-1" className="border-none  mb-2">
            <AccordionTrigger className="pd _c uc pc hover:uf hover:se">
              Which level of the kids do you accept?
            </AccordionTrigger>
            <AccordionContent className="pd _c uc pc sm:pd gd my-3">
              <strong>KEFL</strong> is primarily focused on the kids that are in
              the age of 3 to 14 years old. Most of the time those kids are
              pursuing their primary level and O&apos;Level section of their
              normal education.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none mb-2">
            <AccordionTrigger className="pd _c uc pc hover:uf hover:se">
              How Engineering is being taught to kids of that age?
            </AccordionTrigger>
            <AccordionContent className="pd _c uc pc sm:pd gd my-3">
              Engineering can also be taught the kids of that age too.
              Engineering is not for adults only but also there are tools and
              technologies that are specificly for that kids most of them are
              made in kid&apos;s freindly way. One of those technologies which
              is more popular and many of the kids are familiar with it is
              called Scracth programming you can search it on Goggle though they
              are plenty of other techlogies that we use to teach our students
              how to program.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none mb-2">
            <AccordionTrigger className="pd _c uc pc hover:uf hover:se">
              What are the different projects kids can do on their own when
              studying this engaging?
            </AccordionTrigger>
            <AccordionContent className="pd _c uc pc sm:pd gd my-3">
              Some of the projects kids can do themselves are making of robots
              and make it interacting using programming, kids make cars using
              materials we can find anywhere and make it move and do whatever
              the kid want it to do, kids can make an interesting animation
              program using programming and so many other.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-none mb-2">
            <AccordionTrigger className="pd _c uc pc hover:uf hover:se">
              When do you open or what are your working hours?
            </AccordionTrigger>
            <AccordionContent className="pd _c uc pc sm:pd gd my-3">
              Normally the working days are from Monday to Friday from 9 AM
              classes end at 4 PM but when the normal education is going on we
              don&apos;t teach in weekdays but in weekend on Saturday from 9 AM
              to 4PM.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
