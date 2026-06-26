export default function HajjPackages() {
  return (
    <main className="pt-24 min-h-screen bg-[#FBF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0B4D2E] mb-6">হজ্জ প্যাকেজ</h1>
        <p className="text-gray-600 mb-8">আপনার বাজেট অনুযায়ী সেরা হজ্জ প্যাকেজ বেছে নিন।</p>
        {/* এখানে আপনার হজ্জ প্যাকেজের কার্ড বা কন্টেন্ট যোগ করবেন */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* উদাহরণ কার্ড */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">সরকারি হজ্জ প্যাকেজ</h3>
            <p className="text-gray-500 text-sm">৪০ দিন, ৩ স্টার হোটেল</p>
            <p className="text-2xl font-bold text-[#0B4D2E] mt-2">৳ ৫,৮০,০০০</p>
          </div>
        </div>
      </div>
    </main>
  );
}