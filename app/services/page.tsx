"use client";
import { 
  FileText, 
  Hotel, 
  Plane, 
  Bus, 
  User, 
  HeartPulse, 
  Phone,
  BadgeCheck,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'ভিসা প্রক্রিয়াকরণ',
    desc: 'আমরা সকল ভিসার কাগজপত্র প্রক্রিয়াকরণ করি। হজ্জ ও ওমরাহ ভিসা সংক্রান্ত সকল ঝামেলা আমাদের দায়িত্বে।',
    details: ['সৌদি ভিসা আবেদন', 'প্রয়োজনীয় কাগজপত্র সংগ্রহ', 'ভিসা ফি পরিশোধ', 'ট্র্যাকিং সেবা'],
    color: '#3B82F6',
    bgColor: '#EFF6FF',
  },
  {
    icon: <Hotel className="w-8 h-8" />,
    title: 'হোটেল বুকিং',
    desc: 'মক্কা ও মদিনায় আপনার বাজেট অনুযায়ী সেরা হোটেল বুকিং করে দিই। কাবা ও মসজিদে নববীর নিকটবর্তী হোটেল।',
    details: ['হোটেল নির্বাচন', 'বেস্ট প্রাইস গ্যারান্টি', 'রুম শেয়ারিং ব্যবস্থা', 'চেক-ইন/আউট সাপোর্ট'],
    color: '#C9A84C',
    bgColor: '#FFFBEB',
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: 'বিমান টিকেট',
    desc: 'বিমান বাংলাদেশ, সৌদি এয়ারলাইন্স সহ সকল এয়ারলাইন্সের টিকেট কম দামে পাই। সরাসরি ও ভায়া ফ্লাইটের ব্যবস্থা।',
    details: ['ফ্লাইট বুকিং', 'সিট নির্বাচন', 'ব্যাগেজ লিমিট', 'ফ্লাইট পরিবর্তন সাপোর্ট'],
    color: '#10B981',
    bgColor: '#ECFDF5',
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: 'পরিবহন সেবা',
    desc: 'মক্কা, মদিনা, মিনা, আরাফাত ও জামারাতের মধ্যে AC বাস ও প্রাইভেট কার পরিবহন ব্যবস্থা।',
    details: ['AC বাস সেবা', 'প্রাইভেট কার', 'গ্রুপ পরিবহন', 'জিয়ারত ট্যুর'],
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
  },
  {
    icon: <User className="w-8 h-8" />,
    title: 'গাইড সেবা',
    desc: 'হজ্জ ও ওমরাহর সকল নিয়মকানুন জানা অভিজ্ঞ আলেম ও পেশাদার গাইড প্রতিটি দলের সাথে থাকবেন।',
    details: ['আলেম গাইড', 'বাংলা ভাষায় নির্দেশনা', 'গ্রুপ ও ব্যক্তিগত', 'জিয়ারত ট্যুর গাইড'],
    color: '#F59E0B',
    bgColor: '#FFFBEB',
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'মেডিকেল সাপোর্ট',
    desc: 'হজ্জ ও ওমরাহ যাত্রায় আপনার স্বাস্থ্যের নিরাপত্তা নিশ্চিত করতে ২৪/৭ মেডিকেল টিম প্রস্তুত।',
    details: ['ডাক্তার সেবা', 'প্রাথমিক চিকিৎসা', 'হাসপাতাল রেফারাল', 'ঔষধ সরবরাহ'],
    color: '#EF4444',
    bgColor: '#FEF2F2',
  },
];

export default function Services() {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-[#FBF8F0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
               style={{background: 'rgba(201, 168, 76, 0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)'}}>
            <Sparkles size={14} />
            <span>আমাদের সেবাসমূহ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3" style={{color: '#0B4D2E'}}>
            আমরা <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">সর্বোচ্চ মানের</span> সেবা প্রদান করি
          </h1>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #C9A84C, #E8C97A)'}} />
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            হজ্জ ও ওমরাহ যাত্রায় আপনার প্রতিটি পদক্ষেপে আমরা পাশে আছি। ভিসা থেকে মেডিকেল — সব সেবা এক প্ল্যাটফর্মে।
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Top Decorative Bar */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{background: `linear-gradient(90deg, ${service.color}, ${service.color}CC)`}} />

              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                style={{background: service.bgColor, color: service.color}}
              >
                {service.icon}
              </div>

              <h3 className="font-bold text-xl mb-2" style={{color: '#0B4D2E'}}>{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.desc}</p>

              {/* Details */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-5">
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">আমরা প্রদান করি:</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.details.map((detail, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg font-medium" style={{background: `${service.bgColor}`, color: service.color}}>
                      ✓ {detail}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <Link 
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-md hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                  color: 'white'
                }}
              >
                সেবা নিন
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Extra Support Section */}
        <div className="mt-16 bg-[#0B4D2E] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
                 style={{background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)'}}>
              <BadgeCheck size={14} />
              <span>২৪/৭ সাপোর্ট</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              যে কোনো সময়, যে কোনো প্রশ্নে
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm">
              আমাদের অভিজ্ঞ কাস্টমার সাপোর্ট টিম ২৪ ঘন্টা আপনার সেবায় প্রস্তুত। 
              হজ্জ ও ওমরাহ যাত্রায় যেকোনো সমস্যা বা প্রশ্ন থাকলে আজই কল করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 text-white/90 text-sm">
                <Phone size={22} className="text-[#C9A84C]" />
                <span className="font-semibold text-lg">+৮৮০ ১৭০০-০০০০০০</span>
              </div>
              <div className="hidden sm:block text-white/30">|</div>
              <div className="text-white/80 text-sm border-l-2 border-white/20 pl-6">
                সেবা নম্বর: SVC-২০২৫-১০০১
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}