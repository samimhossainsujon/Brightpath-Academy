import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-primary transition-all duration-300 hover:opacity-90">
      <GraduationCap size={32} className="text-primary" strokeWidth={2.5} />
      <div className="flex flex-col">
        <span className="font-heading text-lg font-bold leading-tight md:text-xl">Brightpath</span>
        <span className="text-xs font-medium leading-tight text-gray-600 md:text-sm">Academy</span>
      </div>
    </Link>
  );
};

export default Logo;