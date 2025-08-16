"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/lib/shared/Button";
import { RoleFormData, roleSchema } from "@/Schemas";
import { X } from "lucide-react";

interface RoleSelectionProps {
  onNext: (data: { role: string }) => void;
  isOpen: boolean;
  onClose: () => void;
}

const RoleSelectionModal: React.FC<RoleSelectionProps> = ({
  onNext,
  isOpen,
  onClose,
}) => {
  const [alert, setAlert] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RoleFormData>({
    resolver: zodResolver(roleSchema),
  });

  const onSubmit = (data: RoleFormData) => {
    setAlert("");
    onNext({ role: data.role });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg shadow-lg p-8 w-full max-w-md bg-[var(--color-dark-blue-2)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X size={20} />
        </button>

        <h2 className="text-white text-xl font-bold mb-6">Select Your Role</h2>

        {alert && (
          <div className="mb-4 text-red-500 text-sm text-center">{alert}</div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit, () =>
            setAlert("Please choose a role before continuing.")
          )}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(
              [
                { value: "client", label: "I'm a Client" },
                { value: "artisan", label: "I'm an Artisan" },
                { value: "explorer", label: "I'm an Explorer" },
                {
                  value: "skilled-professional",
                  label: "I'm a Skilled Professional",
                },
                { value: "marketplace", label: "Go to Marketplace" },
              ] as const
            ).map((role) => (
              <Controller
                key={role.value}
                name="role"
                control={control}
                render={({ field }) => (
                  <button
                    type="button"
                    onClick={() => field.onChange(role.value)}
                    className={`px-4 py-3 rounded-lg border transition ${
                      field.value === role.value
                        ? "bg-[var(--color-yellow)] text-black"
                        : "text-white border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {role.label}
                  </button>
                )}
              />
            ))}
          </div>

          {errors.role && (
            <p className="text-red-500 text-sm text-center">
              {errors.role.message}
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-[var(--color-yellow)] hover:bg-yellow-300 text-black"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RoleSelectionModal;
