export default function Contact() {
  return (
    <main className="pt-24 min-h-screen bg-[#FBF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0B4D2E] mb-6">যোগাযোগ করুন</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-4">আমাদের সাথে যোগাযোগ</h3>
            <form className="space-y-4">
              <input type="text" placeholder="আপনার নাম" className="w-full px-4 py-3 border rounded-xl" />
              <input type="email" placeholder="ইমেইল" className="w-full px-4 py-3 border rounded-xl" />
              <textarea placeholder="বার্তা" className="w-full px-4 py-3 border rounded-xl h-32" />
              <button className="w-full py-3 rounded-xl font-bold text-white bg-[#0B4D2E]">পাঠান</button>
            </form>
          </div>
          <div className="bg-[#0B4D2E] text-white p-8 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-4">যোগাযোগের তথ্য</h3>
            <p className="mb-2">📍 ১২৩, মতিঝিল বাণিজ্যিক এলাকা, ঢাকা-১০০০</p>
            <p className="mb-2">📞 +৮৮০ ১৭০০-০০০০০০</p>
            <p className="mb-2">📧 info@noortravel.com.bd</p>
            <p>🕐 শনি–বৃহঃ: সকাল ৯টা – রাত ৯টা</p>
          </div>
        </div>
      </div>
    </main>
  );
}