import React from 'react';

export function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-black text-[#0A0A0C] mb-8">Terms and Conditions</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-6 leading-relaxed">
          Welcome to AdvertBytes. These terms and conditions outline the rules and regulations for the use of our website and services.
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use AdvertBytes if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">1. License</h2>
        <p className="mb-6 leading-relaxed">
          Unless otherwise stated, AdvertBytes and/or its licensors own the intellectual property rights for all material on AdvertBytes. All intellectual property rights are reserved. You may access this from AdvertBytes for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">2. Service Terms</h2>
        <p className="mb-6 leading-relaxed">
          Our services involve digital marketing, media buying, and creative production. Results (such as ROAS or lead volume) depend on various market factors. While we strive to achieve optimal performance, we do not guarantee specific numerical outcomes. Past performance is not a guarantee of future results.
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">3. User Responsibilities</h2>
        <p className="mb-6 leading-relaxed">
          You agree to provide accurate and complete information when interacting with our services or filling out forms on our website. You are responsible for ensuring that you have the right to share any data you provide to us.
        </p>
      </div>
    </div>
  );
}
