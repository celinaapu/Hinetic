"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Service {
  title: string;
  description: string;
  image: string;
  details: string[];
  extra: string;
}

const services: Service[] = [
  {
    title: "Job Placement",
    description:
      "Connect with top employers and find your perfect career match through our extensive network.",
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1754836309/Gemini_Generated_Image_5k82r75k82r75k82_b6o09t.png",
    details: [
      "Top employer connections",
      "Verified job postings",
      "Exclusive industry access",
      "Career match system",
    ],
    extra:
      "Post your profile and get discovered by recruiters from leading companies.",
  },
  {
    title: "Career Guidance",
    description:
      "Get personalized advice and strategies to navigate your professional journey successfully.",
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1754836309/Gemini_Generated_Image_5k82r75k82r75k82_b6o09t.png",
    details: [
      "One-on-one mentorship",
      "Career growth plans",
      "Interview preparation",
      "Skill assessment",
    ],
    extra:
      "We help you make informed career choices and develop winning strategies.",
  },
  {
    title: "Marketplace",
    description:
      "Discover products, post your goods, and connect with great customers.",
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1754832969/Gemini_Generated_Image_o87r61o87r61o87r_bz74ga.png",
    details: ["Shoes", "Clothing", "Cars", "Properties", "Electronics"],
    extra: "You can also post your own goods and attract great customers.",
  },
];

export default function ServiceSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setActiveService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveService(null);
  };

  return (
    <section className="px-4 py-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
          Hinetic Service Offerings
        </h2>
        <p className="text-[var(--color-text)] mb-12 max-w-2xl mx-auto">
          Discover comprehensive solutions designed to accelerate your career
          growth
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal(service)}
            >
              <div className="relative w-16 h-16 rounded-2xl mx-auto mb-6 overflow-hidden bg-[var(--color-accent)]">
                <Image
                  src="your-cloudinary-url"
                  alt="description"
                  width={800}
                  height={600}
                  unoptimized={true}
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--color-text)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <button className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--color-purple)] transition-colors">
          Get Started
        </button>
      </div>

      {isOpen && activeService && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Image Section */}
            <div className="relative w-full h-64 md:h-auto md:w-1/2">
              <Image
                src="your-cloudinary-url"
                alt="description"
                width={800}
                height={600}
                unoptimized={true} // This bypasses Next.js optimization
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
                  {activeService.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-[var(--color-text)]">
                  {activeService.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[var(--color-text)]">
                  {activeService.extra}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="mt-6 py-2 px-4 rounded-md bg-[var(--color-accent)] text-white hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
     
    </section>
  );
}
