"use client";
import { useState } from "react";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Star, 
  Sparkles, 
  Moon,
  CheckCircle
} from "lucide-react";
import { FaMosque } from "react-icons/fa6";

export default function Hero() {
  const [tripType, setTripType] = useState<'hajj' | 'umrah'>('umrah');
  const [from, setFrom] = useState('ঢাকা, বাংলাদেশ');
  const [month, setMonth] = useState('');
  const [travelers, setTravelers] = useState('২ জন');

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - আপনার ভিডিও ফাইল */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-[20s] hover:scale-100"
        >
          <source src="/videos/kaaba-video.mp4" type="video/mp4" />
          
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=80')`,
            }}
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] opacity-40" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto text-center lg:text-left mb-12 lg:mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border shadow-lg mx-auto lg:mx-0" 
               style={{background: 'rgba(201, 168, 76, 0.15)', border: '1px solid rgba(201,168,76,0.4)', color: '#E8C97A', boxShadow: '0 0 30px rgba(201,168,76,0.15)'}}>
            <span className="animate-pulse"><Sparkles size={16} /></span>
            <span>বিশ্বস্ত হজ্জ ও ওমরাহ সেবা প্রদানকারী</span>
          </div>

          {/* ============ h1 সাইজ কমিয়ে দেওয়া হয়েছে ============ */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            পবিত্র ভূমিতে{' '}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              আপনার স্বপ্নের
            </span>
            <br />সফর শুরু করুন
          </h1>
          {/* ================================================== */}

          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
            মক্কা ও মদিনায় নিরাপদ ও আরামদায়ক হজ্জ এবং ওমরাহ প্যাকেজ।
            ২০+ বছরের অভিজ্ঞতায় ৫০,০০০+ হাজি/ওমরাহকারীকে সেবা দিয়েছি।
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-10">
            {[
              { num: '৫০,০০০+', label: 'সন্তুষ্ট হাজি' },
              { num: '২০+', label: 'বছরের অভিজ্ঞতা' },
              { num: '৯৮%', label: 'সাফল্যের হার' },
              { num: '২৪/৭', label: 'সাপোর্ট' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                  {s.num}
                </div>
                <div className="text-xs sm:text-sm text-white/80 mt-1 font-medium tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Glassmorphism Search Card */}
        <div className="w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20 relative overflow-hidden" 
             style={{boxShadow: '0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
          
          <div className="absolute inset-0 rounded-3xl border border-yellow-300/30 animate-pulse" />
          
          {/* Trip Type Tabs */}
          <div className="flex flex-wrap gap-3 mb-6 border-b border-white/10 pb-5">
            {(['hajj', 'umrah'] as const).map(type => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  tripType === type
                    ? 'text-white shadow-lg scale-105'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
                style={tripType === type ? {
                  background: 'linear-gradient(135deg, #0B4D2E, #1A6B3A)',
                  boxShadow: '0 4px 25px rgba(11, 77, 46, 0.5)'
                } : {}}
              >
                <span className="text-lg">
                  {type === 'hajj' ? <FaMosque size={20} /> : <Sparkles size={20} />}
                </span>
                {type === 'hajj' ? 'হজ্জ' : 'ওমরাহ'}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">যাত্রার স্থান</label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-yellow-300 transition-colors">
                  <MapPin size={18} />
                </span>
                <input
                  type="text"
                  value={from}
                  onChange={e => setFrom(e.target.value)}
                  className="w-full pl-9 pr-3 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white placeholder-white/50 focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 transition-all duration-300"
                  placeholder="যাত্রার স্থান"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">গন্তব্য</label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                  <FaMosque size={18} />
                </span>
                <input
                  type="text"
                  value="মক্কা ও মদিনা"
                  readOnly
                  className="w-full pl-9 pr-3 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white cursor-not-allowed"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">মাস / সময়</label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-yellow-300 transition-colors">
                  <Calendar size={18} />
                </span>
                <select
                  className="w-full pl-9 pr-3 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 transition-all duration-300 appearance-none"
                  value={month}
                  onChange={e => setMonth(e.target.value)}
                >
                  <option value="" className="text-gray-800">মাস বেছে নিন</option>
                  <option className="text-gray-800">জানুয়ারি ২০২৬</option>
                  <option className="text-gray-800">ফেব্রুয়ারি ২০২৬</option>
                  <option className="text-gray-800">মার্চ ২০২৬</option>
                  <option className="text-gray-800">রমজান ২০২৬</option>
                  <option className="text-gray-800">হজ্জ ২০২৬</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">যাত্রী সংখ্যা</label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-yellow-300 transition-colors">
                  <Users size={18} />
                </span>
                <select
                  className="w-full pl-9 pr-3 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 transition-all duration-300 appearance-none"
                  value={travelers}
                  onChange={e => setTravelers(e.target.value)}
                >
                  <option className="text-gray-800">১ জন</option>
                  <option className="text-gray-800">২ জন</option>
                  <option className="text-gray-800">৩ জন</option>
                  <option className="text-gray-800">৪ জন</option>
                  <option className="text-gray-800">৫+ জন</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-xs text-white/60">
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-yellow-300" /> কোনো লুকানো চার্জ নেই
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-yellow-300" /> সহজ বাতিলযোগ্য
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-yellow-300" /> সরকার অনুমোদিত
              </span>
            </div>
            <button
              className="w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl font-bold text-white text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A, #C9A84C)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 3s ease-in-out infinite',
                boxShadow: '0 8px 40px rgba(201, 168, 76, 0.4)'
              }}
            >
              <Search size={18} /> প্যাকেজ খুঁজুন
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(15deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 10s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}