"use client";

import { useState } from "react";

const steps = [
  { title: "Information" },
  { title: "Curriculum" },
  { title: "Pricing" },
  { title: "Publish" },
];

export default function CourseStepper({ currentStep, onStepChange }: { currentStep: number; onStepChange: (step: number) => void }) {
  
  const [currentSteps, setCurrentStep] = useState(1);

  return (
    <div className="w-full border-b apple rounded-2xl px-6 py-4">
      <div className="flex w-full">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex flex-1 flex-col items-center">
            
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div
                className={`
                  absolute left-1/2 top-2.5 h-px w-full
                  ${
                    index < currentStep
                      ? "bg-[#2ED8CF]"
                      : "bg-white/20"
                  }
                `}
              />
            )}

            {/* Circle */}
            <button
              type="button"
              aria-current={index === currentSteps ? "step" : undefined}
              aria-label={`Go to ${step.title}`}
              className={`
                relative z-10 flex h-5 w-5 items-center justify-center
                cursor-pointer rounded-full text-[+px] transition-transform hover:scale-110
                ${
                  index <= currentStep
                    ? "bg-[#2ED8CF] text-dark-background"
                    : "border border-gray-400 bg-white text-gray-500"
                }
              `}
            >
              {index < currentStep ? "✓" : index + 1}
            </button>

            {/* Label */}
            <button
              type="button"
              aria-current={index === currentSteps ? "step" : undefined}
              className={`
                mt-1 cursor-pointer text-[15px] transition-colors hover:text-[#2ED8CF]
                ${
                  index <= currentStep
                    ? "font-semibold text-[#2ED8CF]"
                    : "text-gray-300"
                }
              `}
            >
              {index + 1}. {step.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}