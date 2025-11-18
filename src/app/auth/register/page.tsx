"use client";

import RoleSelectionModal from "@/components/Modals/RoleSelectionModal";
import { useSignupStore } from "@/stores/signupStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StepOnePage from "./step-one/page";
import StepTwo from "./step-two/page";
import Verification from "./verify-link/page";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const { setRole, role } = useSignupStore();
  const router = useRouter();

  useEffect(() => {
    if (step === 5 && role) {
      switch (role) {
        case "client":
          router.push("/clients");
          break;
        case "artisan":
          router.push("/dashboard/artisan");
          break;
        case "explorer":
          router.push("applicants");
          break;
        case "skilled-professional":
          router.push("/dashboard/professional");
          break;
        case "marketplace":
          router.push("/marketplace");
          break;
      }
    }
  }, [step, role, router]);

  return (
    <div className="min-h-screen">
      {step === 1 && <StepOnePage onNext={() => setStep(2)} />}
      {step === 2 && (
        <StepTwo onNext={() => setStep(3)} onBack={() => setStep(1)} />
      )}
      {step === 3 && (
        <Verification
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
          onComplete={() => console.log("Verification completed")}
        />
      )}
      {step === 4 && (
        <RoleSelectionModal
          isOpen={true}
          onNext={({ role }) => {
            setRole(role);
            setStep(5);
          }}
          onClose={() => router.push("/")}
        />
      )}
    </div>
  );
}
