"use client";
import Image from "next/image";
import { useState } from "react";

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
      "https://res.cloudinary.com/celina/image/upload/v1754836309/Gemini_Generated_Image_5k82r75k82r75k82_b6o09t.png",
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
      "https://res.cloudinary.com/celina/image/upload/v1755615295/student-desk-talking-with-school-colleague-phone-call_wdj9d2.jpg",
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
      "https://res.cloudinary.com/celina/image/upload/v1754832969/Gemini_Generated_Image_o87r61o87r61o87r_bz74ga.png",
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
    <section className="relative bg-white">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src="https://res.cloudinary.com/celina/video/upload/v1755429016/1471947_People_3840x2160_td4zzj.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center px-4 py-16 animate-fade-in">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-slide-up">
          Hinetic Service Offerings
        </h2>

        <p className="text-white/90 mb-12 max-w-2xl mx-auto animate-slide-up">
          Discover comprehensive solutions designed to accelerate your career
          growth
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
            bg-white/20 backdrop-blur-md rounded-2xl pb-4 pt-2 
            hover:shadow-xl transition-all cursor-pointer border border-white/10
            transform hover:-translate-y-2 hover:scale-[1.03] 
            animate-fade-up
          "
              style={{ animationDelay: `${idx * 150}ms` }}
              onClick={() => openModal(service)}
            >
              <div className="relative w-full h-52 rounded-2xl mx-auto mb-6 overflow-hidden bg-white/20">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  unoptimized
                  className=" w-full h-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <button
          className="
        bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium 
        hover:bg-[var(--color-purple)] transition-all 
        transform hover:scale-105 hover:-translate-y-1 animate-fade-up
    "
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
