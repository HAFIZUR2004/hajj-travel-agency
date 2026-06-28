"use client";
import { useState } from "react";
import { X, Sparkles, ZoomIn } from "lucide-react";

const images = [
  {
    id: 1,
    url: 'https://i.ibb.co.com/SDS9hQG6/Bijnor-se-Bhaiyon-aur-Bahnon-ke-liye-Al-Fahad.jpg',
    title: 'আল-ফাহাদ ট্যুর এন্ড ট্রাভেল',
    desc: 'হজ্জ ও ওমরাহ যাত্রীদের জন্য বিশ্বস্ত সেবা প্রদানকারী প্রতিষ্ঠান।',
  },
  {
    id: 2,
    url: 'https://i.ibb.co.com/S4wkFwW2/Book-Your-Umrah-with-Al-Fahad-Tour-and-Travel.jpg',
    title: 'ওমরাহ বুকিং করুন',
    desc: 'আল-ফাহাদ ট্যুর এন্ড ট্রাভেলের সাথে আপনার ওমরাহ যাত্রা বুক করুন।',
  },
  {
    id: 3,
    url: 'https://i.ibb.co.com/B50pnTVx/Haji-s-Received-at-Airport-Warm-welcome-to-our.jpg',
    title: 'বিমানবন্দরে হাজীদের স্বাগতম',
    desc: 'হাজীদের বিমানবন্দরে উষ্ণ স্বাগতম জানানো হচ্ছে।',
  },
  {
    id: 4,
    url: 'https://i.ibb.co.com/KpWdKTdS/We-Welcome-to-Jeddah-Haji-s-We-re-thrille.jpg',
    title: 'জেদ্দায় হাজীদের স্বাগতম',
    desc: 'জেদ্দা বিমানবন্দরে হাজীদের উদ্দেশ্যে উষ্ণ অভ্যর্থনা।',
  },
  {
    id: 5,
    url: 'https://i.ibb.co.com/W4yd4PkZ/Collecting-Zamzam-water-at-the-airport-with-Al.jpg',
    title: 'বিমানবন্দরে জমজম পানি বিতরণ',
    desc: 'আল-ফাহাদ ট্যুরের পক্ষ থেকে হাজীদের জমজম পানি বিতরণ।',
  },
  {
    id: 6,
    url: 'https://i.ibb.co.com/1JYJz9tL/Al-Fahad-Tour-and-Travel-Pilgrims-Embark-on.jpg',
    title: 'হাজীদের যাত্রা শুরু',
    desc: 'আল-ফাহাদ ট্যুরের সাথে হাজীদের পবিত্র যাত্রা শুরু।',
  },
  {
    id: 7,
    url: 'https://i.ibb.co.com/1G2P5vdM/Here-s-a-potential-content-for-welcoming-Hajis-at.jpg',
    title: 'হাজীদের স্বাগতম',
    desc: 'হাজীদের উদ্দেশ্যে বিশেষ স্বাগতম বার্তা।',
  },
  {
    id: 8,
    url: 'https://i.ibb.co.com/rfx2sKwx/Assalamu-Alaikum-Dear-Hajis-Al-Fahad-Tour-and.jpg',
    title: 'হাজীদের প্রতি সালাম',
    desc: 'আল-ফাহাদ ট্যুরের পক্ষ থেকে হাজীদের প্রতি শুভেচ্ছা।',
  },
  {
    id: 9,
    url: 'https://i.ibb.co.com/wFdrJrn1/Embark-on-a-Spiritual-Journey-of-a-Lifetime.jpg',
    title: 'জীবনের পবিত্র যাত্রা',
    desc: 'হজ্জ ও ওমরাহ — জীবনের এক অনন্য পবিত্র যাত্রা।',
  },
  {
    id: 10,
    url: 'https://i.ibb.co.com/RGZZWsNG/amr.jpg',
    title: 'আমরার পবিত্র দৃশ্য',
    desc: 'ওমরাহ পালনরত মুসল্লিদের পবিত্র দৃশ্য।',
  },
  {
    id: 11,
    url: 'https://i.ibb.co.com/bgpmZ7C0/ar.jpg',
    title: 'আরাফাতের ময়দান',
    desc: 'হজ্জের অন্যতম প্রধান রুকন — আরাফাতের ময়দান।',
  },
  {
    id: 12,
    url: 'https://i.ibb.co.com/b5d6qR7D/fjfj.jpg',
    title: 'মিনায় তাঁবু',
    desc: 'হজ্জের সময় মিনায় লক্ষ লক্ষ হাজির তাঁবু।',
  },
  {
    id: 13,
    url: 'https://i.ibb.co.com/qFxmsr9s/fff.jpg',
    title: 'কাবা শরিফের দৃশ্য',
    desc: 'পবিত্র কাবা শরিফ, মুসলিমদের কিবলা।',
  },
  {
    id: 14,
    url: 'https://i.ibb.co.com/hRB6rhsP/ppp.jpg',
    title: 'মসজিদে নববী, মদিনা',
    desc: 'রাসূল (সা.)-এর মসজিদ, হজ্জ যাত্রীদের দ্বিতীয় পবিত্র স্থান।',
  },
  {
    id: 15,
    url: 'https://i.ibb.co.com/mr6wv1qJ/dd.jpg',
    title: 'মক্কার রাতের দৃশ্য',
    desc: 'রাতের বেলা কাবা শরিফের জ্যোতির্ময় দৃশ্য।',
  },
  {
    id: 16,
    url: 'https://i.ibb.co.com/N6Rkt7MC/jpgjpgjpg.jpg',
    title: 'মদিনার রাস্তা',
    desc: 'মদিনার শান্ত ও পবিত্র রাস্তা, হজ্জ যাত্রীদের স্মরণীয় স্থান।',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-[#FBF8F0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
               style={{background: 'rgba(201, 168, 76, 0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)'}}>
            <Sparkles size={14} />
            <span>গ্যালারি</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3" style={{color: '#0B4D2E'}}>
            হজ্জ ও ওমরাহর <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">পবিত্র স্মৃতি</span>
          </h1>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #C9A84C, #E8C97A)'}} />
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            পবিত্র ভূমির সৌন্দর্য ও হজ্জ-ওমরাহর পবিত্র মুহূর্তগুলো আমাদের গ্যালারিতে তুলে ধরা হলো।
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-sm">{image.title}</h3>
                <p className="text-white/80 text-xs mt-1">{image.desc}</p>
                <div className="absolute top-4 right-4 text-white/80">
                  <ZoomIn size={20} className="animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox (Full Screen View) */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-5xl max-h-[90vh] relative">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain rounded-2xl" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl">
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/80 text-sm mt-1">{selectedImage.desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}