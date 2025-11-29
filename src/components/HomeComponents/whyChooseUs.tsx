"use client";

import LazyImage from "@/lib/shared/LazyImage";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const WhyChooseUs = () => {
  const REGISTER_ROUTE = "/auth/register";
  return (
    <section className="w-full px-6 md:px-20 py-16 bg-[var(--color-main-bg)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto">
        <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-3xl shadow-xl">
          <LazyImage
            src="https://res.cloudinary.com/celina/image/upload/v1763138545/front-view-wooden-ladder-with-carrer_lxadwm.jpg"
            alt="Technician climbing a ladder"
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-dark-blue-1)] leading-tight">
            Why Choose **Hinetic**?
          </h2>

          <p className="text-lg text-[var(--color-text)]">
            Connecting you with reliable, vetted professionals instantly.
            Experience the future of on-demand technical services with total
            confidence.
          </p>

          <ul className="flex flex-col gap-4">
            {[
              "Access verified on-demand technicians",
              "Track performance and hire again",
              "Secure, real-time payment system",
              "Rate your technicians for community benefit",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-[var(--color-accent)] w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg text-[var(--color-dark-blue-1)] font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href={REGISTER_ROUTE}
            className="mt-6 inline-flex self-start items-center gap-2 text-white bg-[var(--color-accent)] px-8 py-3.5 rounded-xl text-lg font-semibold shadow-lg hover:bg-[var(--color-purple)] transition-all duration-300 transform hover:scale-[1.02]"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-10 border-t border-[var(--color-border)] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="flex flex-col justify-center bg-[var(--color-variant-bg)] rounded-2xl p-8 shadow-inner">
          <h3 className="text-2xl font-bold text-[var(--color-dark-blue-1)] mb-4">
            Hear From Our Users
          </h3>
          <blockquote className="text-xl md:text-2xl italic font-medium text-[var(--color-dark-blue-1)] leading-relaxed">
            “I was able to find a qualified technician in minutes. The service
            is fast, trustworthy, and the rating system gave me confidence.”
          </blockquote>

          <div className="mt-6 flex items-center gap-3">
            <LazyImage
              src="https://res.cloudinary.com/celina/image/upload/v1741250556/images_1_ymxyxc.jpg"
              alt="Profile photo"
              width={50}
              height={50}
              className="rounded-full object-cover border-2 border-[var(--color-accent)]"
            />
            <p className="text-base text-[var(--color-text)] font-semibold">
              — Andrew D., Small Business Owner
            </p>
          </div>
        </div>

        <div className="w-full h-[300px] md:h-full overflow-hidden rounded-2xl shadow-xl md:order-last">
          <LazyImage
            src="https://res.cloudinary.com/celina/image/upload/v1763476613/group-ten-african-american-people-posed-street-city-fashionable-people-africa-shows-thumb-up_eal5cp.jpg"
            alt="Diverse group of team members"
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
