import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  date,
  category,
  image
}) => {
  let categoryColorClass = '';
  
  switch (category.toLowerCase()) {
    case 'event':
      categoryColorClass = 'bg-accent text-white';
      break;
    case 'announcement':
      categoryColorClass = 'bg-primary text-white';
      break;
    case 'news':
      categoryColorClass = 'bg-secondary text-white';
      break;
    default:
      categoryColorClass = 'bg-gray-700 text-white';
  }

  return (
    <article className="card card-hover h-full overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${categoryColorClass}`}>
          {category}
        </span>
      </div>
      
      <div className="p-5">
        <div className="mb-3 flex items-center text-sm text-gray-500">
          <CalendarDays size={16} className="mr-1" />
          <span>{date}</span>
        </div>
        
        <h4 className="mb-2 line-clamp-2 font-heading font-bold">
          <Link 
            to={`/news-events/${id}`}
            className="transition-colors hover:text-primary"
          >
            {title}
          </Link>
        </h4>
        
        <p className="mb-4 line-clamp-3 text-gray-600">{excerpt}</p>
        
        <Link
          to={`/news-events/${id}`}
          className="group inline-flex items-center font-medium text-primary transition-colors"
        >
          Read More
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
    </article>
  );
};

export default NewsCard;