import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';
import Logo from '../Header/Logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 pt-16 text-gray-300">
      <div className="container">
        {/* Top section with columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="mb-6 text-white">
              <Logo />
            </div>
            <p className="mb-6">
              Brightpath Academy is dedicated to providing a nurturing and stimulating environment 
              where children can develop a lifelong love of learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h5 className="mb-6 text-white">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="inline-block transition-colors hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/pre-school" className="inline-block transition-colors hover:text-primary">Pre-School</Link>
              </li>
              <li>
                <Link to="/primary-school" className="inline-block transition-colors hover:text-primary">Primary School</Link>
              </li>
              <li>
                <Link to="/admissions" className="inline-block transition-colors hover:text-primary">Admissions</Link>
              </li>
              <li>
                <Link to="/news-events" className="inline-block transition-colors hover:text-primary">News & Events</Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block transition-colors hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h5 className="mb-6 text-white">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 shrink-0 text-primary" />
                <span>123 Education Lane, Learning City, LC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 shrink-0 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 shrink-0 text-primary" />
                <a href="mailto:info@brightpathacademy.edu" className="transition-colors hover:text-primary">
                  info@brightpathacademy.edu
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h5 className="mb-6 text-white">Newsletter</h5>
            <p className="mb-4">
              Subscribe to our newsletter for updates on school events, educational tips, and more.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md border-gray-700 bg-gray-800 py-2 pl-4 pr-12 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-primary hover:text-primary-300"
                  aria-label="Subscribe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 6 6 9-9"/>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
        
        {/* Bottom section with copyright and secondary links */}
        <div className="mt-12 border-t border-gray-800 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Brightpath Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="transition-colors hover:text-primary">Terms of Service</Link>
              <Link to="/accessibility" className="transition-colors hover:text-primary">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;