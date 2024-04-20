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
    <section className="bg-white dark:bg-gray-900">
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
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="pd _c uc pc sm:pd gd my-3">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none mb-2">
            <AccordionTrigger className="pd _c uc pc hover:uf hover:se">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent className="pd _c uc pc sm:pd gd my-3">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none mb-2">
            <AccordionTrigger className="pd _c uc pc hover:uf hover:se">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent className="pd _c uc pc sm:pd gd my-3">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
