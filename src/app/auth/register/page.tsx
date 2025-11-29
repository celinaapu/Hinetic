"use client";

import RoleSelectionComponent from "@/components/RegisterComponents/RoleSelection";
import StepOneComponent from "@/components/RegisterComponents/StepOne";
import StepTwoComponent from "@/components/RegisterComponents/StepTwo";
import VerificationComponent from "@/components/RegisterComponents/VerifyLink";
import { useState } from "react";

export default function SignUpPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen">
      {step === 1 && <StepOneComponent onNext={() => setStep(2)} />}

      {step === 2 && (
        <StepTwoComponent onNext={() => setStep(3)} onBack={() => setStep(1)} />
      )}

      {step === 3 && (
        <VerificationComponent
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
          onComplete={() => console.log("Verification completed")}
        />
      )}
      {step === 4 && <RoleSelectionComponent onBack={() => setStep(3)} />}

      {step === 5 && (
        <div className="flex items-center justify-center min-h-screen">
          <h2 className="text-xl font-semibold">
            Redirecting to your dashboard...
          </h2>
        </div>
      )}
    </div>
  );
}
