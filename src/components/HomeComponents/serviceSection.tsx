"use client";
import LazyImage from "@/lib/shared/LazyImage";
import LazyVideo from "@/lib/shared/LazyVideo";
import { useRouter } from "next/navigation";
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
      "https://res.cloudinary.com/celina/image/upload/v1763479652/m003t0569_b_paperwork_014aug22_pi8jwy.jpg",
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
  const router = useRouter();

  const openModal = (service: Service) => {
    setActiveService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setActiveService(null), 300);
  };

  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <LazyVideo
          src="https://res.cloudinary.com/celina/video/upload/v1755429016/1471947_People_3840x2160_td4zzj.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
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
              <div className="relative w-full h-60 rounded-2xl mx-auto mb-6 overflow-hidden bg-white/20">
                <LazyImage
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-full"
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

        {/* CTA Button */}
        <button
          onClick={() => router.push("/auth/register")}
          className="
            bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium 
            hover:bg-[var(--color-purple)] transition-all 
            transform hover:scale-105 hover:-translate-y-1 animate-fade-up
        "
        >
          Get Started
        </button>
      </div>

      {isOpen && activeService && (
        <div
          className="
            fixed inset-0 bg-black/60 backdrop-blur-sm
            flex items-center justify-center z-50
            animate-fade-in
          "
          onClick={closeModal}
        >
          <div
            className="
              bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative
              animate-slide-up-smooth
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ×
            </button>

            <LazyImage
              src={activeService.image}
              alt={activeService.title}
              width={600}
              height={400}
              className="rounded-xl w-full h-56 object-cover mb-4"
            />

            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              {activeService.title}
            </h3>

            <p className="text-gray-600 mb-4">{activeService.description}</p>

            <ul className="text-gray-700 space-y-1 mb-4">
              {activeService.details.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-800 font-medium">{activeService.extra}</p>

            <button
              className="mt-6 bg-[var(--color-accent)] text-white w-full py-3 rounded-xl hover:bg-[var(--color-purple)] transition-all"
              onClick={() => router.push("/auth/register")}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
