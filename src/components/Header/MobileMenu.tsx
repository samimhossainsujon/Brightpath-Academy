import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, GraduationCap as Graduation, Book, CalendarDays, Image, Phone, Users, Home, InfoIcon } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/about', icon: <InfoIcon size={20} />, label: 'About Us' },
    { to: '/pre-school', icon: <Graduation size={20} />, label: 'Pre-School' },
    { to: '/primary-school', icon: <Book size={20} />, label: 'Primary School' },
    { to: '/admissions', icon: <Users size={20} />, label: 'Admissions' },
    { to: '/news-events', icon: <CalendarDays size={20} />, label: 'News & Events' },
    { to: '/gallery', icon: <Image size={20} />, label: 'Gallery' },
    { to: '/contact', icon: <Phone size={20} />, label: 'Contact' },
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 transform bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      aria-hidden={!isOpen}
    >
      <div className="flex h-full flex-col overflow-y-auto">
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-5">
          <p className="font-heading text-xl font-bold text-primary">Menu</p>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) => 
                    `flex items-center gap-3 rounded-md px-4 py-3 transition-colors ${
                      isActive 
                        ? 'bg-primary-50 font-semibold text-primary' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="border-t border-gray-100 px-4 py-5">
          <div className="flex flex-col gap-3">
            <a 
              href="#" 
              className="btn-primary w-full justify-center text-center"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              Parent Portal
            </a>
            <a 
              href="#" 
              className="btn-accent w-full justify-center text-center"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;