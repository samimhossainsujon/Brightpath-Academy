import React from 'react';

const AdmissionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Admissions</h1>
      <div className="grid gap-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admission Process</h2>
          <p className="text-gray-600 mb-4">
            We welcome applications from families who share our vision for excellence in education.
            Our admission process is designed to ensure that each child will thrive in our learning environment.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800">Step 1: Initial Inquiry</h3>
              <p className="text-gray-600">Contact our admissions office to schedule a campus tour</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800">Step 2: Application Submission</h3>
              <p className="text-gray-600">Complete and submit the application form with required documents</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800">Step 3: Assessment</h3>
              <p className="text-gray-600">Student assessment and family interview</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800">Step 4: Decision</h3>
              <p className="text-gray-600">Admission decision and enrollment contract</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Required Documents</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Completed application form</li>
            <li>Previous school records (if applicable)</li>
            <li>Birth certificate</li>
            <li>Immunization records</li>
            <li>Recent photograph</li>
            <li>Application fee payment receipt</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Age Requirements</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-gray-800">Pre-School</h3>
              <p className="text-gray-600">Children must be 3-4 years old by September 1st</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Primary School</h3>
              <p className="text-gray-600">Children must be 5 years old by September 1st for Kindergarten</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdmissionsPage;