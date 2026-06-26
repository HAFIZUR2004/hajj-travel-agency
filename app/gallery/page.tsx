export default function Gallery() {
  return (
    <main className="pt-24 min-h-screen bg-[#FBF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0B4D2E] mb-6">গ্যালারি</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md aspect-square">
              <img src={`https://images.unsplash.com/photo-${i}?w=400&q=80`} alt="Gallery" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}