import LazyVideo from "@/lib/shared/LazyVideo";
import React from "react";
// 1. Import the Image component from Next.js
import Image from "next/image";
import ServiceSection from "./serviceSection";
import WhyChooseUs from "./whyChooseUs";

const ThirdSection: React.FC = () => {
  const profileImageUrls = [
    "https://res.cloudinary.com/celina/image/upload/v1741250556/download_aettfr.jpg",
    "https://res.cloudinary.com/celina/image/upload/v1741250556/download_1_umgcz8.jpg",
    "https://res.cloudinary.com/celina/image/upload/v1741250556/images_3_ylfloz.jpg",
    "https://res.cloudinary.com/celina/image/upload/v1741250556/images_2_bybofi.jpg",
    "https://res.cloudinary.com/celina/image/upload/v1741250556/images_rvtekj.jpg",
    "https://res.cloudinary.com/celina/image/upload/v1763484032/Screenshot_From_2025-11-18_17-39-34_olueo5.png",
  ];

  return (
    <>
      <div className="min-h-screen">
        <section className="relative bg-[var(--color-dark-blue-2)] px-4 py-16 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="text-white bg-[var(--color-dark-blue-2)] rounded-2xl p-8 shadow-lg">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-8">
                    A Step-by-Step
                    <br />
                    Guide to Hinetic
                  </h1>

                  <div className="space-y-6">
                    <div className="">
                      <div className=" items-center flex gap-4 hover:text-[var(--color-secondary)]">
                        <div className="text-2xl hover:text-[var(--color-secondary)]   text-white  w-8 h-8 flex items-center justify-center font-bold">
                          01
                        </div>
                        <div>
                          <h3 className="hover:text-[var(--color-secondary)] font-semibold mb-1">
                            Getting Started
                          </h3>
                        </div>
                      </div>
                      <p className="text-[var(--color-text)] pl-12 text-sm">
                        Learn the basics of our platform
                      </p>
                    </div>

                    <div>
                      <div className=" items-center flex gap-4 hover:text-[var(--color-secondary)]">
                        <div className="text-2xl hover:text-[var(--color-secondary)]   text-white  w-8 h-8 flex items-center justify-center font-bold">
                          02
                        </div>
                        <div>
                          <h3 className="font-semibold hover:text-[var(--color-secondary)]  mb-1">
                            Job Search Tips
                          </h3>
                        </div>
                      </div>

                      <p className="text-[var(--color-text)] pl-12 text-sm">
                        Maximize your job search potential
                      </p>
                    </div>

                    <div className=" items-start">
                      <div className=" items-center flex gap-4 hover:text-[var(--color-secondary)]">
                        <div className="text-2xl hover:text-[var(--color-secondary)]  text-white  w-8 h-8 flex items-center justify-center font-bold">
                          03
                        </div>
                        <h3 className="font-semiboldhover:text-[var(--color-secondary)]  mb-1">
                          Creating Your Best
                        </h3>
                      </div>
                      <div>
                        <p className="text-[var(--color-text)] pl-12 text-sm">
                          Build an outstanding profile
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-[var(--color-accent)] rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <LazyVideo
                      src="https://res.cloudinary.com/celina/video/upload/v1763136273/0_Wind_Energy_Renewable_Energy_3840x2160_ifgq2f.mp4"
                      className="w-full h-auto rounded-md"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <ServiceSection />
          </div>
        </section>
        <section className="px-4 py-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
                  Testimonials
                </h2>
                <p className="text-[var(--color-text)]">
                  Here&apos;s what our satisfied users have to say about their
                  experience with Hinetic
                </p>
              </div>
              <button className="bg-[var(--color-accent)] text-white px-6 py-2 rounded-full font-medium hover:bg-[var(--color-purple)] transition-colors">
                View All
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-[var(--color-accent)] rounded-3xl p-8 text-white">
                {/* Fix 1: Main testimonial image */}
                <div className="w-full h-48 relative mb-6 shadow-md rounded-2xl">
                  <Image
                    src={profileImageUrls[5]}
                    alt="Reviewer's Profile Image"
                    fill // Fills the parent div (w-full h-48)
                    className="object-cover rounded-2xl"
                  />
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center shadow-lg border-2 border-white relative">
                    {/* Fix 2: Sarah Johnson profile image */}
                    <Image
                      src={profileImageUrls[0]}
                      alt="Sarah Johnson"
                      fill // Fills the parent div (w-14 h-14)
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm opacity-90 mb-2 font-semibold">
                      &quot;Hinetic transformed my career journey completely.
                      The personalized guidance was exactly what I needed. Their
                      platform is intuitive and the resources are
                      top-notch.&quot;
                    </p>
                    <p className="text-xs opacity-70">
                      Sarah Johnson, Marketing Manager
                    </p>
                    <div className="flex mt-2 text-[var(--color-yellow)]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-md relative">
                      {/* Fix 3: Mike Chen profile image */}
                      <Image
                        src={profileImageUrls[1]}
                        alt="Mike Chen"
                        fill // Fills the parent div (w-8 h-8)
                        className="object-cover"
                      />
                    </div>
                    <div className="flex text-[var(--color-yellow)]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text)] mb-2">
                    &quot;Amazing platform for job seekers, the best resources I
                    have found online.&quot;
                  </p>
                  <p className="text-xs text-[var(--color-text)]/70 font-medium">
                    Mike Chen
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-md relative">
                      {/* Fix 4: Emma Davis profile image */}
                      <Image
                        src={profileImageUrls[2]}
                        alt="Emma Davis"
                        fill // Fills the parent div (w-8 h-8)
                        className="object-cover"
                      />
                    </div>
                    <div className="flex text-[var(--color-yellow)]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text)] mb-2">
                    &quot;Found my dream job in 2 weeks! The interview prep was
                    invaluable.&quot;
                  </p>
                  <p className="text-xs text-[var(--color-text)]/70 font-medium">
                    Emma Davis
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-md relative">
                      {/* Fix 5: Alex Rivera profile image */}
                      <Image
                        src={profileImageUrls[3]}
                        alt="Alex Rivera"
                        fill // Fills the parent div (w-8 h-8)
                        className="object-cover"
                      />
                    </div>
                    <div className="flex text-[var(--color-yellow)]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text)] mb-2">
                    &quot;Excellent career guidance and swift responses from the
                    support team.&quot;
                  </p>
                  <p className="text-xs text-[var(--color-text)]/70 font-medium">
                    Alex Rivera
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-md relative">
                      {/* Fix 6: Lisa Park profile image */}
                      <Image
                        src={profileImageUrls[4]}
                        alt="Lisa Park"
                        fill // Fills the parent div (w-8 h-8)
                        className="object-cover"
                      />
                    </div>
                    <div className="flex text-[var(--color-yellow)]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text)] mb-2">
                    &quot;Professional and reliable service, highly recommend to
                    all job seekers.&quot;
                  </p>
                  <p className="text-xs text-[var(--color-text)]/70 font-medium">
                    Lisa Park
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 bg-[var(--color-accent)]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Take Action Now with Hinetic!
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers
              with our comprehensive job placement and career guidance services.
            </p>

            <div>
              <WhyChooseUs />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThirdSection;
