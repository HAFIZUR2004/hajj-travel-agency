"use client";
import { useState } from "react";
import { 
  Clock, 
  Hotel, 
  MapPin, 
  CheckCircle, 
  Star, 
  Sparkles,
  ArrowRight,
  Package,
  Users
} from "lucide-react";

const packages = [
  {
    id: 1,
    type: 'umrah',
    name: 'ইকোনমি ওমরাহ প্যাকেজ',
    duration: '১৫ দিন',
    hotel: '৩ স্টার হোটেল',
    distance: 'কাবা থেকে ৮০০ মি',
    price: '৯৯,০০০',
    oldPrice: '১,২০,০০০',
    badge: 'সাশ্রয়ী',
    badgeColor: '#3B82F6',
    includes: ['বিমান টিকেট', 'ভিসা', 'থাকা-খাওয়া', 'পরিবহন'],
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1564769625392-651b89c25c66?w=400&q=80',
  },
  {
    id: 2,
    type: 'umrah',
    name: 'স্ট্যান্ডার্ড ওমরাহ প্যাকেজ',
    duration: '২১ দিন',
    hotel: '৪ স্টার হোটেল',
    distance: 'কাবা থেকে ৩০০ মি',
    price: '১,৬৫,০০০',
    oldPrice: '১,৯৫,০০০',
    badge: 'জনপ্রিয়',
    badgeColor: '#C9A84C',
    includes: ['বিমান টিকেট', 'ভিসা', 'থাকা-খাওয়া', 'পরিবহন', 'গাইড'],
    color: '#C9A84C',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80',
    popular: true,
  },
  {
    id: 3,
    type: 'umrah',
    name: 'ভিআইপি ওমরাহ প্যাকেজ',
    duration: '২৮ দিন',
    hotel: '৫ স্টার হোটেল',
    distance: 'কাবা থেকে ১০০ মি',
    price: '২,৮০,০০০',
    oldPrice: '৩,৫০,০০০',
    badge: 'প্রিমিয়াম',
    badgeColor: '#0B4D2E',
    includes: ['বিজনেস ক্লাস', 'ভিসা', 'সকল খাবার', 'প্রাইভেট পরিবহন', 'ব্যক্তিগত গাইড', 'জিয়ারত ট্যুর'],
    color: '#0B4D2E',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80',
  },
  {
    id: 4,
    type: 'hajj',
    name: 'সরকারি হজ্জ প্যাকেজ',
    duration: '৪০ দিন',
    hotel: '৩ স্টার হোটেল',
    distance: 'কাবা থেকে ১ কিমি',
    price: '৫,৮০,০০০',
    oldPrice: '৬,৫০,০০০',
    badge: 'সরকারি',
    badgeColor: '#3B82F6',
    includes: ['বিমান টিকেট', 'ভিসা', 'থাকা-খাওয়া', 'পরিবহন', 'গাইড'],
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1564769625392-651b89c25c66?w=400&q=80',
  },
  {
    id: 5,
    type: 'hajj',
    name: 'বেসরকারি হজ্জ প্যাকেজ',
    duration: '৪৫ দিন',
    hotel: '৪ স্টার হোটেল',
    distance: 'কাবা থেকে ৫০০ মি',
    price: '৮,৫০,০০০',
    oldPrice: '৯,৮০,০০০',
    badge: 'সেরা সুবিধা',
    badgeColor: '#C9A84C',
    includes: ['বিমান টিকেট', 'ভিসা', 'থাকা-খাওয়া', 'পরিবহন', 'গাইড', 'জিয়ারত'],
    color: '#C9A84C',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80',
    popular: true,
  },
  {
    id: 6,
    type: 'hajj',
    name: 'ভিআইপি হজ্জ প্যাকেজ',
    duration: '৪৫ দিন',
    hotel: '৫ স্টার হোটেল',
    distance: 'কাবা থেকে ১০০ মি',
    price: '১৪,০০,০০০',
    oldPrice: '১৬,০০,০০০',
    badge: 'এক্সক্লুসিভ',
    badgeColor: '#0B4D2E',
    includes: ['বিজনেস ক্লাস', 'ভিসা', 'সকল খাবার', 'প্রাইভেট পরিবহন', 'ব্যক্তিগত গাইড', 'জিয়ারত'],
    color: '#0B4D2E',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80',
  },
];

export default function Packages() {
  const [active, setActive] = useState<'all' | 'hajj' | 'umrah'>('all');

  const filtered = active === 'all' ? packages : packages.filter(p => p.type === active);

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-[#FBF8F0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" 
               style={{background: 'rgba(201, 168, 76, 0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)'}}>
            <Sparkles size={14} />
            <span>আমাদের প্যাকেজ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3" style={{color: '#0B4D2E'}}>
            আপনার বাজেট অনুযায়ী<br />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              সেরা প্যাকেজ
            </span> বেছে নিন
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #C9A84C, #E8C97A)'}} />
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            ইকোনমি থেকে ভিআইপি — সব বাজেটে আমাদের বিশেষ প্যাকেজ রয়েছে। সকল প্যাকেজে সরকার অনুমোদিত সেবা অন্তর্ভুক্ত।
          </p>
        </div>

        {/* Filter Tabs - No Emoji */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { key: 'all', label: 'সব প্যাকেজ', icon: <Package size={16} /> },
            { key: 'umrah', label: 'ওমরাহ', icon: <Star size={16} /> },
            { key: 'hajj', label: 'হজ্জ', icon: <Users size={16} /> },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key as typeof active)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === tab.key 
                  ? 'text-white shadow-lg scale-105' 
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-sm border border-gray-200'
              }`}
              style={active === tab.key ? {
                background: 'linear-gradient(135deg, #0B4D2E, #2E9B5A)',
                boxShadow: '0 4px 20px rgba(11, 77, 46, 0.3)'
              } : {}}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(pkg => (
            <div 
              key={pkg.id} 
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative ${pkg.popular ? 'ring-2' : ''}`} 
              style={pkg.popular ? {ringColor: pkg.color, boxShadow: `0 10px 40px ${pkg.color}20`} : {}}
            >
              {/* Badge - আইকন বাদ দেওয়া হয়েছে, শুধু টেক্সট */}
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm shadow-lg" 
                   style={{background: `linear-gradient(135deg, ${pkg.popular ? pkg.color : pkg.badgeColor}, ${pkg.popular ? pkg.color + 'CC' : pkg.badgeColor + 'CC'})`}}>
                {pkg.popular ? 'সেরা পছন্দ' : pkg.badge}
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{background: `linear-gradient(to top, rgba(11,77,46,0.6) 0%, transparent 50%)`}} />
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Clock size={14} />
                  {pkg.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{pkg.name}</h3>
                
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Hotel size={14} />
                    <span>{pkg.hotel}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{pkg.distance}</span>
                  </div>
                </div>

                {/* Includes */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {pkg.includes.slice(0, 3).map(inc => (
                    <span key={inc} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg font-medium" 
                          style={{background: `${pkg.color}15`, color: pkg.color}}>
                      <CheckCircle size={12} />
                      {inc}
                    </span>
                  ))}
                  {pkg.includes.length > 3 && (
                    <span className="text-xs px-2.5 py-1 rounded-lg font-medium text-gray-400 bg-gray-50">
                      +{pkg.includes.length - 3}
                    </span>
                  )}
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 line-through">৳ {pkg.oldPrice}</p>
                    <p className="text-2xl font-bold" style={{color: '#0B4D2E'}}>
                      ৳ {pkg.price}
                    </p>
                    <p className="text-xs text-gray-500">প্রতি জনের জন্য</p>
                  </div>
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}CC)`,
                      boxShadow: `0 4px 15px ${pkg.color}40`
                    }}
                  >
                    বিস্তারিত
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105" 
            style={{
              background: 'linear-gradient(135deg, #0B4D2E, #2E9B5A)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(11, 77, 46, 0.3)'
            }}
          >
            সকল প্যাকেজ দেখুন
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}