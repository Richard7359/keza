import SingleLargeImage from "./SingleLargeImage";
import TwoEqualImages from "./TwoEqualImages";
import { stepDataTypes } from "@/app/store/courseData";


import React from 'react'

const AccordionItems = ({id, step} : {id: string, step: stepDataTypes}) => {
  return (
    <div>
      {step.template === "single" && <SingleLargeImage step={step} />}
    </div>
  )
}

export default AccordionItems

