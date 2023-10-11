

// pages/privacy-policy.js
import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="bg-bgCol h-full w-full p-8 mt-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          Effective Date: [Date]
        </p>
        <p className="mb-4">
          This Privacy Policy outlines how Which we collects, uses, discloses, and protects the personal information of our users and customers.
        </p>
        <p className="mb-4">
          Which is committed to protecting your privacy and ensuring the security of your personal information. By using our services, you consent to the practices described in this Privacy Policy.
        </p>
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We collect various types of information, including but not limited to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal information such as name and email address.</li>
          <li>Demographic information.</li>
          <li>Usage data, including IP address and browser information.</li>
          <li>Cookies and tracking technologies.</li>
        </ul>
        {/* Add more content here */}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
