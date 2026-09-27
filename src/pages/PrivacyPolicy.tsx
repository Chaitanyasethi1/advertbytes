
export function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-black text-[#0A0A0C] mb-8">Privacy Policy</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-6 leading-relaxed">
          At AdvertBytes, we respect your privacy and are committed to protecting your personal data. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you visit our website or use our services. We comply with applicable data protection laws, 
          including the India Digital Personal Data Protection (DPDP) Act.
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-6 leading-relaxed">
          We only collect personal information that is necessary to provide our services. This includes:
          <ul className="list-disc ml-6 mt-2">
            <li>Contact Information: Name, email address, phone number.</li>
            <li>Usage Data: Information on how you interact with our website, such as IP address and browser type.</li>
          </ul>
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-6 leading-relaxed">
          We use the information we collect to provide and improve our services, communicate with you, 
          process transactions, and comply with legal obligations. We do not sell your personal data to third parties.
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">3. Data Security and Consent</h2>
        <p className="mb-6 leading-relaxed">
          We use administrative, technical, and physical security measures to help protect your personal information.
          By providing your contact information in our forms, you explicitly consent to us contacting you regarding 
          your inquiry and our services.
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">4. Your Rights</h2>
        <p className="mb-6 leading-relaxed">
          Under the DPDP Act and other relevant regulations, you have the right to access, correct, or request deletion 
          of your personal data. To exercise these rights, please contact us at Advertbytes@gmail.com.
        </p>
      </div>
    </div>
  );
}
