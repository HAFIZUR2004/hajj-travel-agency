"use client";
import { useState } from "react";
import Image from "next/image";
import { 
  Clock, 
  Hotel, 
  Plane, 
  Utensils, 
  Tent, 
  AlertCircle,
  CheckCircle,
  XCircle,
  Phone,
  BadgeCheck,
  ArrowRight,
  Star
} from "lucide-react";

// প্যাকেজের ডেটা
const packages = [
  {
    id: 1,
    name: 'ইকোনমি হজ্জ প্যাকেজ',
    duration: '৩০ দিন',
    price: '৫,৮০,০০০',
    oldPrice: '৬,৫০,০০০',
    hotelMakkah: '৩ স্টার হোটেল, কাবা থেকে ৮০০ মি',
    hotelMadinah: '৩ স্টার হোটেল, মসজিদে নববী থেকে ৫০০ মি',
    flight: 'বিমান বাংলাদেশ, সরাসরি ফ্লাইট',
    food: '২ বেলা বাঙালি খাবার (বুফে)',
    tent: 'সাধারণ তাঁবু, মিনা থেকে জামারাত ১৫ মিনিট',
    badge: 'সাশ্রয়ী',
    badgeColor: '#3B82F6',
    includes: ['বিমান টিকেট', 'ভিসা', 'থাকা-খাওয়া', 'পরিবহন', 'মিনা/আরাফাত তাঁবু'],
    excludes: ['কুরবানি (Dum)', 'ব্যক্তিগত খরচ', 'গাইড ফি'],
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1564769625392-651b89c25c66?w=400&q=80',
    license: 'হজ্জ লাইসেন্স: HB-২০২৫-০০১',
  },
  {
    id: 2,
    name: 'স্ট্যান্ডার্ড হজ্জ প্যাকেজ',
    duration: '৪০ দিন',
    price: '৮,৫০,০০০',
    oldPrice: '৯,৮০,০০০',
    hotelMakkah: '৪ স্টার হোটেল, কাবা থেকে ৩০০ মি',
    hotelMadinah: '৪ স্টার হোটেল, মসজিদে নববী থেকে ২০০ মি',
    flight: 'বিমান বাংলাদেশ, সরাসরি ফ্লাইট',
    food: '৩ বেলা বাঙালি ও আন্তর্জাতিক খাবার (বুফে)',
    tent: 'ভিআইপি তাঁবু, মিনা থেকে জামারাত ৫ মিনিট',
    badge: 'জনপ্রিয়',
    badgeColor: '#C9A84C',
    includes: ['বিমান টিকেট', 'ভিসা', 'থাকা-খাওয়া', 'পরিবহন', 'মিনা/আরাফাত তাঁবু', 'গাইড সেবা'],
    excludes: ['কুরবানি (Dum)', 'ব্যক্তিগত খরচ'],
    color: '#C9A84C',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80',
    popular: true,
    license: 'হজ্জ লাইসেন্স: HB-২০২৫-০০২',
  },
  {
    id: 3,
    name: 'ভিআইপি হজ্জ প্যাকেজ',
    duration: '৪৫ দিন',
    price: '১৪,০০,০০০',
    oldPrice: '১৬,০০,০০০',
    hotelMakkah: '৫ স্টার হোটেল, কাবা থেকে ১০০ মি (হেরা)',
    hotelMadinah: '৫ স্টার হোটেল, মসজিদে নববী থেকে ৫০ মি',
    flight: 'বিজনেস ক্লাস, সৌদি এয়ারলাইন্স',
    food: '৩ বেলা প্রিমিয়াম বুফে + ২৪/৭ স্ন্যাকস',
    tent: 'এক্সক্লুসিভ ভিআইপি তাঁবু, মিনা থেকে জামারাত ২ মিনিট',
    badge: 'এক্সক্লুসিভ',
    badgeColor: '#0B4D2E',
    includes: ['বিজনেস ক্লাস', 'ভিসা', 'সকল খাবার', 'প্রাইভেট পরিবহন', 'ব্যক্তিগত গাইড', 'মিনা/আরাফাত ভিআইপি তাঁবু', 'জিয়ারত ট্যুর'],
    excludes: ['কুরবানি (Dum)'],
    color: '#0B4D2E',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80',
    license: 'হজ্জ লাইসেন্স: HB-২০২৫-০০৩',
  },
  {
    id: 4,
    name: 'পরিবারিক হজ্জ প্যাকেজ',
    duration: '৪০ দিন',
    price: '৯,৫০,০০০',
    oldPrice: '১১,০০,০০০',
    hotelMakkah: '৪ স্টার হোটেল, কাবা থেকে ৪০০ মি',
    hotelMadinah: '৪ স্টার হোটেল, মসজিদে নববী থেকে ৩০০ মি',
    flight: 'বিমান বাংলাদেশ, সরাসরি ফ্লাইট',
    food: '৩ বেলা বাঙালি ও পরিবারিক খাবার (বুফে)',
    tent: 'ভিআইপি তাঁবু, মিনা থেকে জামারাত ৬ মিনিট',
    badge: 'পরিবার-বান্ধব',
    badgeColor: '#10B981',
    includes: ['বিমান টিকেট', 'ভিসা', 'থাকা-খাওয়া', 'পরিবহন', 'মিনা/আরাফাত তাঁবু', 'গাইড সেবা', 'বাচ্চাদের সুবিধা'],
    excludes: ['কুরবানি (Dum)', 'ব্যক্তিগত খরচ'],
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1564769625392-651b89c25c66?w=400&q=80',
    license: 'হজ্জ লাইসেন্স: HB-২০২৫-০০৪',
  },
  {
    id: 5,
    name: 'বেসরকারি হজ্জ প্যাকেজ',
    duration: '৪৫ দিন',
    price: '১০,৫০,০০০',
    oldPrice: '১২,০০,০০০',
    hotelMakkah: '৪ স্টার হোটেল, কাবা থেকে ২৫০ মি',
    hotelMadinah: '৪ স্টার হোটেল, মসজিদে নববী থেকে ১৫০ মি',
    flight: 'সৌদি এয়ারলাইন্স, সরাসরি ফ্লাইট',
    food: '৩ বেলা আন্তর্জাতিক বুফে',
    tent: 'ভিআইপি তাঁবু, মিনা থেকে জামারাত ৪ মিনিট',
    badge: 'সেরা সুবিধা',
    badgeColor: '#C9A84C',
    includes: ['বিমান টিকেট', 'ভিসা', 'থাকা-খাওয়া', 'পরিবহন', 'মিনা/আরাফাত তাঁবু', 'গাইড সেবা', 'জিয়ারত ট্যুর'],
    excludes: ['কুরবানি (Dum)', 'ব্যক্তিগত খরচ'],
    color: '#C9A84C',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80',
    popular: true,
    license: 'হজ্জ লাইসেন্স: HB-২০২৫-০০৫',
  },
  {
    id: 6,
    name: 'প্রিমিয়াম প্লাস হজ্জ প্যাকেজ',
    duration: '৫০ দিন',
    price: '১৮,০০,০০০',
    oldPrice: '২২,০০,০০০',
    hotelMakkah: '৫ স্টার হোটেল, কাবা থেকে ৫০ মি (হেরা)',
    hotelMadinah: '৫ স্টার হোটেল, মসজিদে নববী থেকে ২০ মি',
    flight: 'বিজনেস ক্লাস, সৌদি এয়ারলাইন্স',
    food: '২৪/৭ প্রিমিয়াম খাবার + শেফ সেবা',
    tent: 'এক্সক্লুসিভ ভিআইপি তাঁবু, মিনা থেকে জামারাত ১ মিনিট',
    badge: 'আল্ট্রা প্রিমিয়াম',
    badgeColor: '#7C3AED',
    includes: ['বিজনেস ক্লাস', 'ভিসা', 'সকল খাবার', 'প্রাইভেট পরিবহন', 'ব্যক্তিগত গাইড', 'মিনা/আরাফাত ভিআইপি তাঁবু', 'জিয়ারত ট্যুর', 'হেলথ কেয়ার'],
    excludes: ['কুরবানি (Dum)'],
    color: '#7C3AED',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80',
    license: 'হজ্জ লাইসেন্স: HB-২০২৫-০০৬',
  },
];

export default function HajjPackages() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FBF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
               style={{background: 'rgba(201, 168, 76, 0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)'}}>
            <Star size={14} />
            <span>হজ্জ প্যাকেজ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3" style={{color: '#0B4D2E'}}>
            আপনার বাজেট অনুযায়ী <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">সেরা হজ্জ</span> বেছে নিন
          </h1>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #C9A84C, #E8C97A)'}} />
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            ইকোনমি থেকে আল্ট্রা প্রিমিয়াম — ৬টি ভিন্ন বাজেটের হজ্জ প্যাকেজ। সকল প্যাকেজে সরকার অনুমোদিত সেবা ও স্বচ্ছতা নিশ্চিত।
          </p>
        </div>

        {/* Package Cards - ৬টি কার্ড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={`hajj-pkg-${pkg.id}`}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative ${pkg.popular ? 'ring-2 ring-offset-2' : ''}`} 
              style={pkg.popular ? { 
                boxShadow: `0 10px 40px ${pkg.color}20`,
                // ✅ ringColor সরানো হয়েছে, Tailwind এর ring ক্লাস ব্যবহার করা হচ্ছে
              } : {}}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm shadow-lg" 
                   style={{background: `linear-gradient(135deg, ${pkg.popular ? pkg.color : pkg.badgeColor}, ${pkg.popular ? pkg.color + 'CC' : pkg.badgeColor + 'CC'})`}}>
                {pkg.popular ? 'সেরা পছন্দ' : pkg.badge}
              </div>

              {/* Image - Optimized with Next.js Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={pkg.image} 
                  alt={pkg.name} 
                  width={400} 
                  height={200} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={pkg.popular}
                />
                <div className="absolute inset-0" style={{background: `linear-gradient(to top, rgba(11,77,46,0.6) 0%, transparent 50%)`}} />
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Clock size={14} />
                  {pkg.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{pkg.name}</h3>
                
                {/* মূল্য */}
                <div className="flex items-end gap-2 mb-3">
                  <p className="text-2xl font-bold" style={{color: '#0B4D2E'}}>৳ {pkg.price}</p>
                  <p className="text-xs text-gray-400 line-through">৳ {pkg.oldPrice}</p>
                </div>

                {/* হোটেল ও ফ্লাইট */}
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-start gap-2">
                    <Hotel size={16} className="text-[#C9A84C] mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-700">মক্কা: {pkg.hotelMakkah}</p>
                      <p className="text-gray-500">মদিনা: {pkg.hotelMadinah}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane size={16} className="text-[#C9A84C]" />
                    <span>{pkg.flight}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils size={16} className="text-[#C9A84C]" />
                    <span>{pkg.food}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tent size={16} className="text-[#C9A84C]" />
                    <span>{pkg.tent}</span>
                  </div>
                </div>

                {/* লাইসেন্স */}
                <div className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full mb-4 w-fit">
                  <BadgeCheck size={14} />
                  {pkg.license}
                </div>

                {/* বিস্তারিত বাটন */}
                <button
                  onClick={() => toggleExpand(pkg.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all hover:shadow-md"
                  style={{
                    borderColor: pkg.color,
                    color: pkg.color,
                  }}
                >
                  {expandedId === pkg.id ? 'সংক্ষিপ্ত করুন' : 'বিস্তারিত দেখুন'}
                  <ArrowRight size={16} className={`transition-transform duration-300 ${expandedId === pkg.id ? 'rotate-90' : ''}`} />
                </button>

                {/* বিস্তারিত প্যানেল */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedId === pkg.id ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">✅ অন্তর্ভুক্ত</p>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.includes.map((item) => (
                          <span key={item} className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg bg-green-50 text-green-700">
                            <CheckCircle size={12} />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">❌ অন্তর্ভুক্ত নয়</p>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.excludes.map((item) => (
                          <span key={item} className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg bg-red-50 text-red-600">
                            <XCircle size={12} />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-xl text-xs text-yellow-700 flex items-start gap-2">
                      <AlertCircle size={16} className="mt-0.5" />
                      <div>
                        <p className="font-semibold">মনে রাখবেন:</p>
                        <p className="text-yellow-600">কুরবানি (Dum) এবং ব্যক্তিগত খরচ প্যাকেজের বাইরে। বিস্তারিত জানতে আমাদের কল করুন।</p>
                      </div>
                    </div>
                    <button
                      className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                      style={{
                        background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}CC)`,
                        boxShadow: `0 4px 15px ${pkg.color}40`
                      }}
                    >
                      এখনই বুকিং করুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* জরুরি যোগাযোগ - সলিড গ্রিন ব্যাকগ্রাউন্ড */}
        <div className="mt-16 bg-[#0B4D2E] rounded-3xl p-8 sm:p-12 text-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
                 style={{background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)'}}>
              <BadgeCheck size={14} />
              <span>সরকারি নিবন্ধিত</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              আপনার হজ্জ যাত্রা নিশ্চিত করুন
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm">
              আমাদের অভিজ্ঞ টিম আপনার সকল প্রশ্নের উত্তর দিতে প্রস্তুত। 
              হজ্জ সংক্রান্ত যেকোনো বিষয়ে নির্দ্বিধায় কল করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={22} className="text-[#C9A84C]" />
                <span className="font-semibold text-lg">+৮৮০ ১৭০০-০০০০০০</span>
              </div>
              <div className="hidden sm:block text-white/30">|</div>
              <div className="text-white/80 text-sm border-l-2 border-white/20 pl-6">
                লাইসেন্স নম্বর: HB-২০২৫-১০০১
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}