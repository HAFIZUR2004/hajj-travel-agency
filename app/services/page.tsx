export default function Services() {
  return (
    <main className="pt-24 min-h-screen bg-[#FBF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0B4D2E] mb-6">আমাদের সেবাসমূহ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['ভিসা প্রক্রিয়াকরণ', 'হোটেল বুকিং', 'বিমান টিকেট', 'পরিবহন সেবা', 'গাইড সেবা', 'মেডিকেল সাপোর্ট'].map(service => (
            <div key={service} className="bg-white p-6 rounded-2xl shadow-md text-center">
              <h3 className="font-bold text-lg text-[#0B4D2E]">{service}</h3>
              <p className="text-gray-500 text-sm mt-2">পেশাদার সেবা নিশ্চিত করা হয়।</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}