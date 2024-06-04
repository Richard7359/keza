import SingleImage from "./SingleImage";
import TwoEqualImages from "./TwoEqualImages";
import { stepDataTypes } from "@/app/store/courseData";

import React from "react";

const AccordionItems = ({ id, step }: { id: string; step: stepDataTypes }) => {
  return (
    <div>{step.template === "Single Image" && <SingleImage step={step} />}</div>
  );
};

export default AccordionItems;
