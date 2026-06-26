"use client";
import { 
  Landmark, 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from "lucide-react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter 
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer style={{background: '#0B4D2E'}} className="text-white">
      {/* Newsletter */}
      <div style={{background: 'rgba(255,255,255,0.05)'}} className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">সেরা অফার ও আপডেট পেতে সাবস্ক্রাইব করুন</h3>
              <p className="text-white/60 text-sm">হজ্জ ও ওমরাহ সংক্রান্ত সর্বশেষ খবর সরাসরি আপনার ইমেইলে পাবেন।</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                className="px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                style={{background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0B4D2E'}}
              >
                সাবস্ক্রাইব
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <Landmark size={20} className="text-yellow-300" />
              </div>
              <div>
                <div className="font-bold text-lg">NoorTravel</div>
                <div className="text-xs" style={{color: '#C9A84C'}}>হজ্জ ও ওমরাহ</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              বাংলাদেশের বিশ্বস্ত হজ্জ ও ওমরাহ সেবা প্রদানকারী। ২০+ বছর ধরে পবিত্র ভূমিতে আপনার সফরকে অর্থবহ করে তুলছি।
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <FaYoutube size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{color: '#C9A84C'}}>দ্রুত লিংক</h4>
            <ul className="space-y-2">
              {['হজ্জ প্যাকেজ','ওমরাহ প্যাকেজ','রমজান ওমরাহ','ভিআইপি প্যাকেজ','পারিবারিক প্যাকেজ','গ্রুপ বুকিং'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <span className="text-yellow-400">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{color: '#C9A84C'}}>সেবাসমূহ</h4>
            <ul className="space-y-2">
              {['ভিসা প্রক্রিয়াকরণ','হোটেল বুকিং','বিমান টিকেট','পরিবহন সেবা','গাইড সেবা','মেডিকেল সাপোর্ট'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <span className="text-yellow-400">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{color: '#C9A84C'}}>যোগাযোগ</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow-400 mt-0.5" />
                <span>১২৩, মতিঝিল বাণিজ্যিক এলাকা, ঢাকা-১০০০</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400" />
                <span>+৮৮০ ১৭০০-০০০০০০</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400" />
                <span>info@noortravel.com.bd</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-yellow-400" />
                <span>শনি–বৃহঃ: সকাল ৯টা – রাত ৯টা</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© ২০২৬ NoorTravel। সকল স্বত্ব সংরক্ষিত। ধর্ম মন্ত্রণালয় নিবন্ধিত।</p>
          <div className="flex gap-4">
            {['গোপনীয়তা নীতি', 'শর্তাবলী', 'রিফান্ড নীতি'].map(l => (
              <a key={l} href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}