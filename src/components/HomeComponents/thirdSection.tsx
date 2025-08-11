import React from "react";
import { Play, Users, Search, FileText, Star } from "lucide-react";
import ServiceSection from "./serviceSection";
import WhyChooseUs from "./whyChooseUs";

const ThirdSection: React.FC = () => {
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

                    <div className=" ">
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
                        <div className="text-2xl hover:text-[var(--color-secondary)]   text-white  w-8 h-8 flex items-center justify-center font-bold">
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
                <div className="bg-[var(--color-accent)] rounded-3xl w-80 h-96 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white" fill="white" />
                    </div>
                    <p className="text-white/80 text-sm">Watch Introduction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <ServiceSection />
            {/* <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Hinetic Service Offerings
            </h2>
            <p className="text-[var(--color-text)] mb-12 max-w-2xl mx-auto">
              Discover comprehensive solutions designed to accelerate your
              career growth
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                  Job Placement
                </h3>
                <p className="text-[var(--color-text)] text-sm leading-relaxed">
                  Connect with top employers and find your perfect career match
                  through our extensive network
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                  Career Guidance
                </h3>
                <p className="text-[var(--color-text)] text-sm leading-relaxed">
                  Get personalized advice and strategies to navigate your
                  professional journey successfully
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                  Resume Building
                </h3>
                <p className="text-[var(--color-text)] text-sm leading-relaxed">
                  Create compelling resumes that showcase your skills and
                  experience effectively
                </p>
              </div>
            </div>

            <button className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--color-purple)] transition-colors">
              Get Started
            </button> */}
          </div>
        </section>
        <section className="px-4 py-4 bg-[var(--color-accent)]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto hover:bg-white/30 transition-colors cursor-pointer">
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
                  Testimonials
                </h2>
                <p className="text-[var(--color-text)]">
                  Here's what our satisfied users have to say about their
                  experience with Hinetic
                </p>
              </div>
              <button className="bg-[var(--color-accent)] text-white px-6 py-2 rounded-full font-medium hover:bg-[var(--color-purple)] transition-colors">
                View All
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-[var(--color-accent)] rounded-3xl p-8 text-white">
                <div className="h-48 bg-white/10 rounded-2xl mb-6"></div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm opacity-90 mb-2">
                      "Hinetic transformed my career journey completely. The
                      personalized guidance was exactly what I needed."
                    </p>
                    <p className="text-xs opacity-70">
                      Sarah Johnson, Marketing Manager
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[var(--color-yellow)] rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" fill="white" />
                    </div>
                    <div className="flex text-[var(--color-yellow)]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text)] mb-2">
                    "Amazing platform for job seekers"
                  </p>
                  <p className="text-xs text-[var(--color-text)]/70">
                    Mike Chen
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[var(--color-purple)] rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" fill="white" />
                    </div>
                    <div className="flex text-[var(--color-yellow)]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text)] mb-2">
                    "Found my dream job in 2 weeks"
                  </p>
                  <p className="text-xs text-[var(--color-text)]/70">
                    Emma Davis
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" fill="white" />
                    </div>
                    <div className="flex text-[var(--color-yellow)]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text)] mb-2">
                    "Excellent career guidance"
                  </p>
                  <p className="text-xs text-[var(--color-text)]/70">
                    Alex Rivera
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[var(--color-yellow)] rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" fill="white" />
                    </div>
                    <div className="flex text-[var(--color-yellow)]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text)] mb-2">
                    "Professional and reliable service"
                  </p>
                  <p className="text-xs text-[var(--color-text)]/70">
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
              Take Action Now
              <br />
              with Hinetic!
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
