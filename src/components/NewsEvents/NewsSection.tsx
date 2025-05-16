import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';

const newsData = [
  {
    id: 1,
    title: 'Annual Science Fair Winners Announced',
    excerpt: 'Congratulations to all participants in our annual Science Fair! The creativity and scientific thinking on display was truly impressive.',
    date: 'May 15, 2025',
    category: 'Event',
    image: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'New Arts Program Launching Fall 2025',
    excerpt: 'We\'re excited to announce our expanded arts program featuring specialized instruction in music, visual arts, and drama.',
    date: 'April 28, 2025',
    category: 'Announcement',
    image: 'https://images.pexels.com/photos/8612704/pexels-photo-8612704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Summer Camp Registration Now Open',
    excerpt: 'Secure your child\'s spot in our popular summer camp program. Activities include swimming, sports, arts & crafts, and field trips.',
    date: 'April 10, 2025',
    category: 'Announcement',
    image: 'https://images.pexels.com/photos/8471753/pexels-photo-8471753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Brightpath Students Excel in Math Competition',
    excerpt: 'Our students brought home several medals from the Regional Mathematics Olympiad. Read about their achievements.',
    date: 'March 22, 2025',
    category: 'News',
    image: 'https://images.pexels.com/photos/8493231/pexels-photo-8493231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const NewsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'News', 'Event', 'Announcement'];
  
  const filteredNews = activeFilter === 'All' 
    ? newsData 
    : newsData.filter(item => item.category === activeFilter);
  
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Latest News & Upcoming Events</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Stay updated with the latest happenings at Brightpath Academy, from student achievements to upcoming events and important announcements.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredNews.map(news => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link to="/news-events" className="btn-outline-secondary">
            View All News & Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;