import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 w-full text-white">
      <div className="mx-auto px-4 pt-6">
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-8">
          <div className="md:w-[40%]">
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Welcome to Hinetic, the AI-powered job platform that connects
              talented professionals with incredible opportunities. Whether
              you&apos;re a skilled tradesperson, a creative professional, or a
              company seeking top talent, we make finding the perfect fit easier
              than ever.
            </p>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                <FiGithub className="text-xl" />
              </a>
            </div>
          </div>

          <div className="md:w-[25%]">
            <h3 className="text-white font-semibold mb-4">Address</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>184 Main St, Suite 306</p>
              <p>New York, NY 10001</p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>+234 7080084120</p>
                <p>apucelina13@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="md:w-[15%]">
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["About Us", "Services", "Events"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center group transition-colors"
                  >
                    <span className="group-hover:underline">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-[15%]">
            <h3 className="text-white font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Customer Support",
                "How It Works",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center group transition-colors"
                  >
                    <span className="group-hover:underline">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © 2025 Hinetic. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Designed by Celina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
