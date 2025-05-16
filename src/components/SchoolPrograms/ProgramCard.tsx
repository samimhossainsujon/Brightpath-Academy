import React from 'react';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon,
  link,
  color
}) => {
  let bgColorClass = '';
  let borderColorClass = '';
  let iconBgClass = '';
  
  switch (color) {
    case 'primary':
      bgColorClass = 'bg-primary-50';
      borderColorClass = 'border-primary';
      iconBgClass = 'bg-primary text-white';
      break;
    case 'secondary':
      bgColorClass = 'bg-secondary-50';
      borderColorClass = 'border-secondary';
      iconBgClass = 'bg-secondary text-white';
      break;
    case 'accent':
      bgColorClass = 'bg-accent-50';
      borderColorClass = 'border-accent';
      iconBgClass = 'bg-accent text-white';
      break;
    default:
      bgColorClass = 'bg-gray-50';
      borderColorClass = 'border-gray-300';
      iconBgClass = 'bg-gray-700 text-white';
  }

  return (
    <div className={`card card-hover border-t-4 ${borderColorClass} ${bgColorClass} h-full p-6`}>
      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${iconBgClass}`}>
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="mb-5 text-gray-600">{description}</p>
      <Link
        to={link}
        className="group inline-flex items-center font-medium text-gray-700 transition-colors hover:text-primary"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ProgramCard;