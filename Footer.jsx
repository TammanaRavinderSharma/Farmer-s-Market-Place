import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Us Section */}
          <div>
            <h4 className="font-bold text-white mb-4">About Us</h4>
            <p className="text-gray-400">
              We are a farmer marketplace connecting local farmers with consumers to bring fresh produce directly to your doorstep. Quality and sustainability are at the core of our mission.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Email: support@kisankonnect.com
            </p>
            <p className="text-gray-400">
              Phone: +91 123 456 7890
            </p>
            <p className="text-gray-400">
              Address: 123 Farm Lane, Agriculture City, India
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4">
        <p className="text-gray-400">&copy; 2025 Kisankonnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
