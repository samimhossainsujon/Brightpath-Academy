import React from 'react';
import HeroCarousel from '../components/Hero/HeroCarousel';
import SchoolPrograms from '../components/SchoolPrograms/SchoolPrograms';
import NewsSection from '../components/NewsEvents/NewsSection';
import EnrollCTA from '../components/CallToAction/EnrollCTA';
import { Star, Calendar, Award, Clock, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  const stats = [
    { 
      id: 1, 
      icon: <Star className="h-6 w-6 text-accent" />, 
      value: '20+', 
      label: 'Years of Excellence' 
    },
    { 
      id: 2, 
      icon: <Calendar className="h-6 w-6 text-accent" />, 
      value: '180', 
      label: 'School Days per Year' 
    },
    { 
      id: 3, 
      icon: <Award className="h-6 w-6 text-accent" />, 
      value: '15:1', 
      label: 'Student-Teacher Ratio' 
    },
    { 
      id: 4, 
      icon: <Clock className="h-6 w-6 text-accent" />, 
      value: '8:00', 
      label: 'AM to 3:30 PM' 
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20">
        <HeroCarousel />
      </section>
      
      {/* Stats Section */}
      <section className="bg-white py-12 shadow-md">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-50">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-gray-800 md:text-3xl">{stat.value}</p>
                <p className="text-sm text-gray-600 md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Welcome Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-6">Welcome to Brightpath Academy</h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                At Brightpath Academy, we believe in nurturing the whole child. Our comprehensive 
                approach to education balances academic excellence with social and emotional 
                development, preparing students not just for their next academic step, but for life.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our dedicated faculty creates a supportive environment where children feel safe to 
                explore, question, and grow. With small class sizes and personalized attention, 
                we ensure every child receives the guidance they need to thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/about" className="btn-primary">
                  Learn More
                </a>
                <a href="/virtual-tour" className="btn-outline-secondary">
                  Take a Virtual Tour
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8617334/pexels-photo-8617334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students in classroom"
                className="h-auto w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg md:-bottom-8 md:-left-8 md:p-6">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-800">Conveniently Located</p>
                    <p className="text-sm text-gray-600">123 Education Lane, Learning City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <SchoolPrograms />
      
      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">What Parents Say</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Hear from our community of parents about their experiences with Brightpath Academy.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-white p-6 shadow transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="fill-current text-accent" fill="#F5B041" />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="italic text-gray-600">
                  "The teachers at Brightpath Academy have been incredible. My daughter has flourished academically and socially since enrolling."
                </p>
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Parent"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Parent of Pre-School Student</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="rounded-lg bg-white p-6 shadow transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="fill-current text-accent" fill="#F5B041" />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="italic text-gray-600">
                  "We've been impressed with the rigorous curriculum and how it's balanced with creative activities. Our son loves going to school every day!"
                </p>
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Parent"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-500">Parent of Primary School Student</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="rounded-lg bg-white p-6 shadow transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="fill-current text-accent" fill="#F5B041" />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="italic text-gray-600">
                  "Transferring our children to Brightpath was the best decision we made. The personal attention and communication from staff is exceptional."
                </p>
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Parent"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Alicia Rodriguez</p>
                  <p className="text-sm text-gray-500">Parent of Multiple Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* News & Events Section */}
      <NewsSection />
      
      {/* CTA Section */}
      <EnrollCTA />
    </div>
  );
};

export default HomePage;