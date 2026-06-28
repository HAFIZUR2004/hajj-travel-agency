"use client";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  User, 
  MessageCircle
} from "lucide-react";
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter 
} from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-[#FBF8F0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
               style={{background: 'rgba(201, 168, 76, 0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)'}}>
            <MessageCircle size={14} />
            <span>যোগাযোগ করুন</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3" style={{color: '#0B4D2E'}}>
            আমাদের সাথে <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">যোগাযোগ</span> করুন
          </h1>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #C9A84C, #E8C97A)'}} />
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            হজ্জ ও ওমরাহ সম্পর্কিত যেকোনো প্রশ্ন থাকলে নির্দ্বিধায় আমাদের জানান। আমরা ২৪/৭ আপনার সেবায় প্রস্তুত।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h3 className="font-bold text-xl mb-6" style={{color: '#0B4D2E'}}>আপনার বার্তা পাঠান</h3>
            <form className="space-y-5">
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#C9A84C] transition-colors">
                  <User size={18} />
                </span>
                <input 
                  type="text" 
                  placeholder="আপনার নাম" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                />
              </div>
              
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#C9A84C] transition-colors">
                  <Mail size={18} />
                </span>
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                />
              </div>
              
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#C9A84C] transition-colors">
                  <Phone size={18} />
                </span>
                <input 
                  type="tel" 
                  placeholder="আপনার ফোন নম্বর" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                />
              </div>
              
              <div className="relative group">
                <span className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#C9A84C] transition-colors">
                  <MessageCircle size={18} />
                </span>
                <textarea 
                  placeholder="আপনার বার্তা" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all h-32 resize-none"
                />
              </div>
              
              <button 
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all hover:shadow-xl hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #0B4D2E, #2E9B5A)',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(11, 77, 46, 0.3)'
                }}
              >
                <Send size={18} />
                বার্তা পাঠান
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#0B4D2E] text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-6 text-[#C9A84C]">যোগাযোগের তথ্য</h3>
              
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#C9A84C] mt-0.5" />
                  <div>
                    <p className="font-semibold text-white/80">ঠিকানা</p>
                    <p className="text-white/60">১২৩, মতিঝিল বাণিজ্যিক এলাকা, ঢাকা-১০০০</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#C9A84C]" />
                  <div>
                    <p className="font-semibold text-white/80">ফোন</p>
                    <p className="text-white/60">+৮৮০ ১৭০০-০০০০০০</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#C9A84C]" />
                  <div>
                    <p className="font-semibold text-white/80">ইমেইল</p>
                    <p className="text-white/60">info@noortravel.com.bd</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-[#C9A84C]" />
                  <div>
                    <p className="font-semibold text-white/80">সময়</p>
                    <p className="text-white/60">শনি–বৃহঃ: সকাল ৯টা – রাত ৯টা</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/8801700000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <FaWhatsapp size={20} />
                হোয়াটসঅ্যাপে চ্যাট করুন
              </a>
            </div>

            {/* Social Media */}
            <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-3">আমাদের ফলো করুন</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <FaFacebookF size={18} className="text-white/80" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <FaInstagram size={18} className="text-white/80" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <FaYoutube size={18} className="text-white/80" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <FaTwitter size={18} className="text-white/80" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9025!2d90.4175!3d23.7396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b4f0f0f0f1%3A0x0!2sMotijheel%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
            width="100%"
            height="300"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NoorTravel Location"
          />
        </div>
      </div>
    </main>
  );
}