import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const EnrollCTA: React.FC = () => {
  const benefits = [
    'Low student-to-teacher ratio',
    'Qualified and passionate educators',
    'Modern facilities and technology',
    'Balanced academic and social development',
    'Safe and nurturing environment',
    'Regular progress reports and parent feedback'
  ];

  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 text-white md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-white">Why Choose Brightpath Academy?</h2>
            
            <ul className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="mr-3 mt-1 shrink-0 text-accent" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions/enroll" className="btn-accent">
                Apply Now
              </Link>
              <Link to="/admissions/tour" className="btn border-2 border-white bg-transparent text-white hover:bg-white/10">
                Book a Tour
              </Link>
            </div>
          </div>
          
          {/* Right Column - Image or Form */}
          <div className="relative rounded-lg bg-white p-8 shadow-xl md:p-10">
            <h3 className="mb-6 text-center text-primary">Request Information</h3>
            
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="program" className="mb-1 block text-sm font-medium text-gray-700">
                  Interested In
                </label>
                <select
                  id="program"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select a program</option>
                  <option value="preschool">Pre-School (Ages 3-5)</option>
                  <option value="primary">Primary School (Grades 1-6)</option>
                  <option value="both">Both Programs</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full py-3"
              >
                Submit Request
              </button>
              
              <p className="text-center text-xs text-gray-500">
                By submitting, you agree to our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollCTA;