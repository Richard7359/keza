import SingleImage from "./SingleImage";
import TwoEqualImages from "./TwoEqualImages";
import { stepDataTypes } from "@/app/store/courseData";
import SingleImageFit from "./SingleImageFit";
import LargePicTemplate from "./LargePicTemplate";
import LargePicBottom from "./LargePicBottom";
import FourImageSideBySide from "./FourImageSideBySide";
import TwoUpDown from "./TwoUpDown";

import React from "react";

const AccordionItems = ({ id, step }: { id: string; step: stepDataTypes }) => {
  return (
    <div>
      <div>
        {step.template === "Single Image" && <SingleImage step={step} />}
      </div>
      <div>
        {step.template === "Single Image Fit" && <SingleImageFit step={step} />}
      </div>
      <div>
        {step.template === "Two Images Side by Side" && <TwoEqualImages step={step} />}
      </div>
      <div>
        {step.template === "Large pic Left, Small pic Right with Bottom pic" && <LargePicTemplate step={step} />}
      </div>
      <div>
        {step.template === "Two Images Top, One Image Bottom" && <LargePicBottom step={step} />}
      </div>
      <div>
        {step.template === "Four Equal Images (2x2 Grid)" && <FourImageSideBySide step={step} />}
      </div>
      <div>
        {step.template === "Two Images Vertically Stacked" && <TwoUpDown step={step} />}
      </div>
    </div>
  );
};

export default AccordionItems;
