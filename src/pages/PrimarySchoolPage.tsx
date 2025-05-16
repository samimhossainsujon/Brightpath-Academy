import React from 'react';

const PrimarySchoolPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Primary School</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          Our primary school program provides a strong foundation in core academic subjects while fostering creativity, critical thinking, and personal growth.
        </p>
        {/* Placeholder content - replace with actual content as needed */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Curriculum Overview</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Mathematics and Sciences</li>
              <li>Language Arts and Literature</li>
              <li>Social Studies and History</li>
              <li>Arts and Music Education</li>
              <li>Physical Education and Health</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Small class sizes for personalized attention</li>
              <li>Project-based learning opportunities</li>
              <li>Regular progress assessments</li>
              <li>Extracurricular activities</li>
              <li>Parent-teacher collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimarySchoolPage;