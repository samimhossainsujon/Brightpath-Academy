import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, ChevronDown, GraduationCap as Graduation, Book, CalendarDays, Image, Users, Home, } from 'lucide-react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

interface NavItemProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
  hasDropdown?: boolean;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, icon, hasDropdown = false, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => hasDropdown && setIsOpen(true)}
      onMouseLeave={() => hasDropdown && setIsOpen(false)}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-1 rounded-md px-3 py-2 transition-all duration-300 ${isActive
            ? 'font-semibold text-primary'
            : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
          }`
        }
        onClick={() => hasDropdown && setIsOpen(!isOpen)}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {label}
        {hasDropdown && <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
      </NavLink>

      {hasDropdown && isOpen && (
        <div className="absolute left-0 z-20 mt-1 min-w-[200px] origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for changing header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <li>
                <NavItem to="/" label="Home" icon={<Home size={18} />} />
              </li>
              {/* <li>
                <NavItem 
                  to="/about" 
                  label="About Us" 
                  icon={<InfoIcon size={18} />} 
                  hasDropdown
                >
                  <Link to="/about/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Mission</Link>
                  <Link to="/about/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Team</Link>
                  <Link to="/about/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our History</Link>
                  <Link to="/about/facilities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Facilities</Link>
                </NavItem>
              </li> */}
              <li>
                <NavItem
                  to="/pre-school"
                  label="Pre-School"
                  icon={<Graduation size={18} />}
                  hasDropdown
                >
                  <Link to="/pre-school/curriculum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Curriculum</Link>
                  <Link to="/pre-school/daily-schedule" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Daily Schedule</Link>
                  <Link to="/pre-school/facilities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Facilities</Link>
                </NavItem>
              </li>
              <li>
                <NavItem
                  to="/primary-school"
                  label="Primary School"
                  icon={<Book size={18} />}
                  hasDropdown
                >
                  <Link to="/primary-school/curriculum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Curriculum</Link>
                  <Link to="/primary-school/subjects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Subjects</Link>
                  <Link to="/primary-school/extra-curricular" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Extra-curricular</Link>
                </NavItem>
              </li>
              <li>
                <NavItem to="/admissions" label="Admissions" icon={<Users size={18} />} />
              </li>
              <li>
                <NavItem to="/news-events" label="News & Events" icon={<CalendarDays size={18} />} />
              </li>
              <li>
                <NavItem to="/gallery" label="Gallery" icon={<Image size={18} />} />
              </li>

            </ul>
          </nav>

          {/* Quick-access buttons */}
          <div className="items-center hidden gap-3 lg:flex">
            <Link to="/admissions/enroll" className="btn-accent">
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-gray-700 rounded-full hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;