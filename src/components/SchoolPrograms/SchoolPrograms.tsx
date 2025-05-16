import React from 'react';
import { Book, Palette, Users, Siren, Brain, Lightbulb } from 'lucide-react';
import ProgramCard from './ProgramCard';

const SchoolPrograms: React.FC = () => {
  const preSchoolPrograms = [
    {
      id: 1,
      title: 'Early Literacy',
      description: 'Developing language skills through stories, songs, and interactive activities.',
      icon: <Book size={24} />,
      link: '/pre-school/literacy',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Creative Arts',
      description: 'Exploring imagination through drawing, painting, music, and creative play.',
      icon: <Palette size={24} />,
      link: '/pre-school/arts',
      color: 'accent'
    },
    {
      id: 3,
      title: 'Social Skills',
      description: 'Building confidence, empathy, and collaboration through group activities.',
      icon: <Users size={24} />,
      link: '/pre-school/social',
      color: 'secondary'
    }
  ];
  
  const primarySchoolPrograms = [
    {
      id: 1,
      title: 'Core Academics',
      description: 'Comprehensive curriculum covering mathematics, science, and language arts.',
      icon: <Brain size={24} />,
      link: '/primary-school/academics',
      color: 'secondary'
    },
    {
      id: 2,
      title: 'STEM Education',
      description: 'Hands-on learning in science, technology, engineering, and mathematics.',
      icon: <Lightbulb size={24} />,
      link: '/primary-school/stem',
      color: 'primary'
    },
    {
      id: 3,
      title: 'Physical Education',
      description: 'Sports, fitness activities, and teamwork to promote healthy development.',
      icon: <Siren size={24} />,
      link: '/primary-school/physical-education',
      color: 'accent'
    }
  ];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4">Our Educational Programs</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Discover our comprehensive curriculum designed to nurture young minds and develop well-rounded individuals with a passion for learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Pre-School Section */}
          <div>
            <div className="mb-6">
              <h3 className="mb-2 inline-block border-b-4 border-primary pb-1 text-2xl">Pre-School Programs</h3>
              <p className="text-gray-600">Ages 3-5 years</p>
            </div>
            
            <div className="space-y-6">
              {preSchoolPrograms.map(program => (
                <ProgramCard key={program.id} {...program} />
              ))}
            </div>
          </div>
          
          {/* Primary School Section */}
          <div>
            <div className="mb-6">
              <h3 className="mb-2 inline-block border-b-4 border-secondary pb-1 text-2xl">Primary School Programs</h3>
              <p className="text-gray-600">Ages 6-12 years</p>
            </div>
            
            <div className="space-y-6">
              {primarySchoolPrograms.map(program => (
                <ProgramCard key={program.id} {...program} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolPrograms;