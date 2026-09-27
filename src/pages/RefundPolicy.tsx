
export function RefundPolicy() {
  return (
    <div className="bg-white dark:bg-[#0A0A0C] min-h-screen pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-black text-[#0A0A0C] mb-8">Refund Policy</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-6 leading-relaxed">
          At AdvertBytes, we are committed to providing high-quality digital marketing services. Due to the nature of our business, our refund policy is outlined below.
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">1. Service Fees</h2>
        <p className="mb-6 leading-relaxed">
          All service fees for media buying, campaign management, and creative production are generally non-refundable once work has commenced. 
          This is because our time, expertise, and resources are immediately deployed upon agreement.
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">2. Ad Spend</h2>
        <p className="mb-6 leading-relaxed">
          Ad spend is paid directly to platforms (such as Meta or Google) and is entirely non-refundable by AdvertBytes. Any requests for refunds on ad spend must be directed to the respective advertising platforms in accordance with their policies.
        </p>
        <h2 className="text-2xl font-bold text-[#0A0A0C] mt-8 mb-4">3. Exceptional Circumstances</h2>
        <p className="mb-6 leading-relaxed">
          Refund requests may be considered on a case-by-case basis under exceptional circumstances, such as a major failure to deliver agreed-upon initial setup services before launch. If you believe a refund is warranted, please contact us at Advertbytes@gmail.com with detailed reasoning.
        </p>
      </div>
    </div>
  );
}
