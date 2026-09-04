"use client";

import CourseStepper from "@/components/CourseStepper";
import { useState } from "react";

// importing sections
import Information from "@/components/Information";
import Curriculum from "@/components/Curriculum";
import Pricing from "@/components/Pricing";
import Publish from "@/components/Publish";

const Add_course = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderSection = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return <Information />;
      case 1:
        return <Curriculum />;
      case 2:
        return <Pricing />;
      case 3:
        return <Publish />;
      default:
        return <Information />;
    }
  };

  const forwardStep = () => {
    if (currentStep >= 3) {
      setCurrentStep(currentStep);
    }
    else{
      setCurrentStep(currentStep+1);
    }
  };

  const backwardStep = () => {
    if(currentStep <= 0){
      setCurrentStep(currentStep);
    }
    else{
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      {/* stepper */}
      <div>
        <CourseStepper
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </div>

      {/* current stage */}
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        {renderSection(currentStep)}
      </div>
      {/* navigation buttons */}
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-6 py-4">
        <div>
          <button className="btn-secondary cursor-pointer"> Save Draft</button>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            className={`${currentStep <= 0 ? "bg-gray-600/50 cursor-not-allowed rounded-lg px-4 py-2" : "btn-primary"}`}
            onClick={backwardStep}
          >
            Back
          </button>
          <button
            className={`${currentStep >= 3 ? "bg-gray-600/50 cursor-not-allowed rounded-lg px-4 py-2" : "btn-primary"}`}
            onClick={forwardStep}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add_course;
