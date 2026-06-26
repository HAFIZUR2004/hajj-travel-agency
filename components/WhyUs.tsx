"use client";
import { 
  ShieldCheck, 
  Headset, 
  PlaneTakeoff, 
  BadgeCheck, 
  Coins,
  Phone
} from "lucide-react";
import { FaMosque } from "react-icons/fa6"; // ← এই লাইনটি যোগ করুন

const features = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-emerald-600" />,
    title: 'সরকার অনুমোদিত',
    desc: 'ধর্ম মন্ত্রণালয় ও হজ্জ অফিস কর্তৃক নিবন্ধিত ও অনুমোদিত প্রতিষ্ঠান।',
  },
  {
    icon: <Coins className="w-6 h-6 text-emerald-600" />,
    title: 'সর্বোত্তম মূল্য',
    desc: 'আমরা গ্যারান্টি দিচ্ছি যে আমাদের দাম বাজারের সেরা। কোথাও কম পেলে আমরা মেলাবো।',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: 'নিরাপদ ভ্রমণ',
    desc: 'প্রতিটি যাত্রায় অভিজ্ঞ গাইড, মেডিকেল সাপোর্ট এবং ইন্স্যুরেন্স সহ সম্পূর্ণ নিরাপত্তা।',
  },
  {
    icon: <Headset className="w-6 h-6 text-emerald-600" />,
    title: '২৪/৭ সাপোর্ট',
    desc: 'দিনে রাতে যেকোনো সমস্যায় আমাদের দেশীয় বাংলায় সাপোর্ট টিম সবসময় প্রস্তুত।',
  },
  {
    icon: <PlaneTakeoff className="w-6 h-6 text-emerald-600" />,
    title: 'সহজ ভিসা প্রক্রিয়া',
    desc: 'আমরা সকল ভিসার কাগজপত্র প্রক্রিয়াকরণ করি। আপনাকে কোনো ঝামেলা পোহাতে হবে না।',
  },
  {
    icon: <FaMosque className="w-6 h-6 text-emerald-600" />,
    title: 'অভিজ্ঞ আলেম গাইড',
    desc: 'প্রতিটি দলের সাথে হজ্জ/ওমরাহর সকল নিয়মকানুন জানা অভিজ্ঞ আলেম গাইড থাকবেন।',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FBF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
               style={{background: 'rgba(201, 168, 76, 0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)'}}>
            <span>কেন আমাদের বেছে নেবেন</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3" style={{color: '#0B4D2E'}}>
            আমাদের সেবার <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">বিশেষত্ব</span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #C9A84C, #E8C97A)'}} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                style={{background: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)'}}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{color: '#0B4D2E'}}>{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Clean Green Banner CTA (No Icons, No Effects) */}
        <div className="mt-16 rounded-3xl overflow-hidden relative">
          <div className="relative bg-[#0B4D2E] p-10 sm:p-16 text-center rounded-3xl">
            
            {/* Minimal Green Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B4D2E] via-[#1A6B3A] to-[#0B4D2E]" />

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
                   style={{background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)'}}>
                <span>সীমিত আসন</span>
              </div>
              
              <h3 className="text-3xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                রমজান ওমরাহ ২০২৬
              </h3>
              <p className="text-xl text-white/80 mb-2 font-medium">— এখনই বুক করুন —</p>
              <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                এই রমজানে পবিত্র মক্কায় ইবাদতের এই সুযোগ হাতছাড়া করবেন না।
                আসন সীমিত — এখনই নিশ্চিত করুন।
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Primary Button - Gold Gradient */}
                <button 
                  className="px-10 py-4 rounded-2xl font-bold text-sm shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A, #C9A84C)',
                    color: '#0B4D2E',
                    boxShadow: '0 8px 30px rgba(201, 168, 76, 0.3)'
                  }}
                >
                  এখনই বুকিং করুন
                </button>

                {/* Secondary Button - Clean White Border */}
                <button 
                  className="px-10 py-4 rounded-2xl font-semibold text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  কল করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}