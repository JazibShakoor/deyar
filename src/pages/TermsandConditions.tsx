// pages/terms-and-conditions.js
import React from 'react';

function TermsAndConditions() {
  return (
    <div className="bg-bgCol h-full w-full p-8 mt-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-semibold mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">
          Effective Date: [Date]
        </p>
        <p className="mb-4">
          These Terms and Conditions (Terms) govern your use of which services and website. By using our services, you agree to comply with and be bound by these Terms.
        </p>
        <h2 className="text-xl font-semibold mb-2">Use of Our Services</h2>
        <p className="mb-4">
         which provides various services, and your use of these services is subject to these Terms and any additional terms and policies provided.
        </p>
        <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
        <p className="mb-4">
          When using our services, you agree to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Comply with all applicable laws and regulations.</li>
          <li>Provide accurate and truthful information.</li>
          <li>Not engage in any illegal or harmful activities.</li>
        </ul>
        {/* Add more content here */}
      </div>
    </div>
  );
}

export default TermsAndConditions;
