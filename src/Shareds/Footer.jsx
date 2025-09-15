// Footer.jsx
import React from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import {
  FaFacebook,
  FaProductHunt,
  FaMedium,
  FaGithub,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-red-200 via-red-100 to-red-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-3">
              {/* <img
                src="/logo.png"
                alt="Softgency Logo"
                className="w-28 h-28 object-contain"
              /> */}
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="text-red-600">Soft</span>
                  <span className="text-gray-900">gency</span>
                </h3>
                <p className="text-sm text-gray-600">
          Imagine. Implement. Inspire.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-700">
              We craft modern digital experiences — social media growth, website
              development, data & online business management.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              <span className="text-red-600">Contact</span>{" "}
              <span className="text-gray-900">Info</span>
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="text-gray-800">Address</p>
                  <p className="text-gray-600 text-sm">
                    Kushtia, Khulna, Bangladesh
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="text-gray-800">Phone</p>
                  <a
                    href="tel:+8801959939059"
                    className="text-sm text-gray-600 hover:text-red-600"
                  >
                    +880 1959-939059
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="text-gray-800">WhatsApp</p>
                  <a
                    href="https://wa.me/8801959939059"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-600 hover:text-red-600"
                  >
                    +880 1959-939059
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="text-gray-800">Email</p>
                  <a
                    href="mailto:sglsahosskhan@gmail.com"
                    className="text-sm text-gray-600 hover:text-red-600"
                  >
                    sglsahosskhan@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              <span className="text-red-600">Quick</span>{" "}
              <span className="text-gray-900">Links</span>
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-red-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-red-600">
                  Career
                </a>
              </li>
              <li>
                <a href="/appointment" className="hover:text-red-600">
                  Make an Appointment
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-red-600">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              <span className="text-red-600">Connect</span>{" "}
              <span className="text-gray-900">With Us</span>
            </h4>

            <div className="flex gap-4 text-2xl">
              <a
                href="https://facebook.com/softgency"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.producthunt.com/@softgency"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
              >
                <FaProductHunt />
              </a>
              <a
                href="https://medium.com/@softgency"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
              >
                <FaMedium />
              </a>
              <a
                href="https://github.com/softgency"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://youtube.com/@softgency"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://discord.gg/softgency"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-black/80 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Trade License No:</span>{" "}
            <span className="text-gray-600">123456789</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            &copy; 2025 Softgency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
