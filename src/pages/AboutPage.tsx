import React from 'react';
import { MapPin, Clock, Phone, Mail, BookOpen, Users, Award, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: 'Academic Excellence',
      description: 'We hold high standards and challenge students to reach their full potential through engaging, rigorous curriculum.'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Community',
      description: 'We foster a strong sense of belonging where students, parents, and staff work together to support education.'
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Character Development',
      description: 'We emphasize integrity, respect, responsibility, and compassion in all aspects of student life.'
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: 'Inclusivity',
      description: 'We celebrate diversity and create an environment where all students feel valued and respected.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-white">About Brightpath Academy</h1>
          <p className="mx-auto max-w-2xl text-lg text-white">
            Creating pathways to success through exceptional education since 2005.
          </p>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-center">
              <MapPin className="mr-3 h-6 w-6 text-primary" />
              <div>
                <h6 className="text-gray-900">Location</h6>
                <p className="text-gray-600">123 Education Lane, Learning City</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="mr-3 h-6 w-6 text-primary" />
              <div>
                <h6 className="text-gray-900">School Hours</h6>
                <p className="text-gray-600">Monday-Friday: 8:00 AM - 3:30 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="mr-3 h-6 w-6 text-primary" />
              <div>
                <h6 className="text-gray-900">Contact</h6>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Brightpath Academy exists to provide an exceptional educational experience that 
                nurtures intellectual curiosity, fosters personal growth, and instills a lifelong 
                love of learning in a supportive and inclusive environment.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                We are committed to developing well-rounded individuals who possess the knowledge, 
                skills, and character to succeed in an ever-changing world and contribute positively 
                to their communities.
              </p>
            </div>
            <div>
              <h2 className="mb-6">Our Vision</h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                To be recognized as a leading educational institution where students are empowered 
                to achieve their highest potential academically, socially, and emotionally.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                We envision a learning community where innovative teaching practices, personalized 
                attention, and strong partnerships between school and family create an environment 
                where every child can thrive and excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These guiding principles shape our approach to education and define our school culture.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="h-full rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4">Our History</h2>
            <p className="text-lg text-gray-600">
              From humble beginnings to the thriving institution we are today.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 ml-6 h-full w-0.5 bg-primary md:left-1/2 md:-ml-0.5"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2005 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-10 flex w-full flex-col md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                  <h3 className="mb-2 text-xl font-semibold">2005</h3>
                  <p className="text-gray-600">Brightpath Academy was founded with just two classrooms and 30 students.</p>
                </div>
                <div className="absolute left-0 top-0 ml-4 h-8 w-8 rounded-full border-4 border-white bg-primary md:left-1/2 md:-ml-4"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* 2010 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-10 flex w-full flex-col md:mb-0 md:w-1/2 md:pr-8 md:text-right md:order-2">
                  <h3 className="mb-2 text-xl font-semibold">2010</h3>
                  <p className="text-gray-600">Expanded to include a primary school program and doubled our campus size.</p>
                </div>
                <div className="absolute left-0 top-0 ml-4 h-8 w-8 rounded-full border-4 border-white bg-primary md:left-1/2 md:-ml-4"></div>
                <div className="md:w-1/2 md:pl-8 md:order-1"></div>
              </div>

              {/* 2015 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-10 flex w-full flex-col md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                  <h3 className="mb-2 text-xl font-semibold">2015</h3>
                  <p className="text-gray-600">Built state-of-the-art science and technology labs to enhance our STEM curriculum.</p>
                </div>
                <div className="absolute left-0 top-0 ml-4 h-8 w-8 rounded-full border-4 border-white bg-primary md:left-1/2 md:-ml-4"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* 2020 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-10 flex w-full flex-col md:mb-0 md:w-1/2 md:pr-8 md:text-right md:order-2">
                  <h3 className="mb-2 text-xl font-semibold">2020</h3>
                  <p className="text-gray-600">Received accreditation for educational excellence and launched our innovative arts program.</p>
                </div>
                <div className="absolute left-0 top-0 ml-4 h-8 w-8 rounded-full border-4 border-white bg-primary md:left-1/2 md:-ml-4"></div>
                <div className="md:w-1/2 md:pl-8 md:order-1"></div>
              </div>

              {/* Present */}
              <div className="relative md:flex md:items-center">
                <div className="mb-10 flex w-full flex-col md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                  <h3 className="mb-2 text-xl font-semibold">Present</h3>
                  <p className="text-gray-600">Today, Brightpath Academy serves over 500 students with a staff of 50 dedicated educators.</p>
                </div>
                <div className="absolute left-0 top-0 ml-4 h-8 w-8 rounded-full border-4 border-white bg-primary md:left-1/2 md:-ml-4"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-white">Have Questions?</h2>
            <p className="mb-8 text-lg text-white/90">
              We'd love to hear from you and show you around our campus.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/contact" className="btn-accent">Contact Us</a>
              <a href="/admissions/tour" className="btn border-2 border-white bg-transparent text-white hover:bg-white/10">
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;