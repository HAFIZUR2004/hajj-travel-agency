"use client";
import { useState } from "react";
import { Star, Landmark, Users, Award, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: 'মোঃ রফিকুল ইসলাম',
    location: 'ঢাকা',
    text: 'আলহামদুলিল্লাহ! NoorTravel-এর সাথে হজ্জ সম্পন্ন করলাম। সবকিছু এত সুন্দরভাবে সাজানো ছিল। হোটেল থেকে পরিবহন, সব নিখুঁত। আলেম গাইড সব নিয়মকানুন বুঝিয়ে দিলেন।',
    rating: 5,
    package: 'ভিআইপি হজ্জ প্যাকেজ',
    year: '২০২৫',
  },
  {
    name: 'সুলতানা বেগম',
    location: 'চট্টগ্রাম',
    text: 'প্রথমবার ওমরাহ করলাম NoorTravel-এর মাধ্যমে। মহিলাদের জন্য আলাদা গাইড ব্যবস্থা খুবই সহায়ক ছিল। কাবা থেকে হোটেল খুবই কাছে। সকল সুবিধা যেমন প্রতিশ্রুতি দিয়েছিল তেমনই ছিল।',
    rating: 5,
    package: 'স্ট্যান্ডার্ড ওমরাহ প্যাকেজ',
    year: '২০২৫',
  },
  {
    name: 'আব্দুল করিম',
    location: 'সিলেট',
    text: 'পরিবারসহ ৫ জন ওমরাহ করলাম। বাচ্চাদের জন্য বিশেষ সুবিধা করে দিয়েছিল। দাম একটু বেশি মনে হলেও পরিষেবার মান দেখে মনে হল সম্পূর্ণ মূল্য পেয়েছি।',
    rating: 5,
    package: 'ইকোনমি ওমরাহ প্যাকেজ',
    year: '২০২৪',
  },
  {
    name: 'ফাতেমা আক্তার',
    location: 'খুলনা',
    text: 'মাত্র ১০ দিনে ওমরাহ সম্পন্ন করলাম। NoorTravel-এর টিম সবসময় ফোনে ছিল। কোনো সমস্যা হলে সাথে সাথে সমাধান করে দিয়েছে। খুবই পেশাদার।',
    rating: 5,
    package: 'স্পেশাল ওমরাহ প্যাকেজ',
    year: '২০২৫',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FBF8F0] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
               style={{background: 'rgba(201, 168, 76, 0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)'}}>
            <Star size={14} />
            <span>যাত্রীদের অভিজ্ঞতা</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3" style={{color: '#0B4D2E'}}>
            আমাদের <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">হাজি/ওমরাহকারীরা</span> কী বলছেন
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{background: 'linear-gradient(90deg, #C9A84C, #E8C97A)'}} />
        </div>

        {/* Slider Section */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1" style={{background: 'linear-gradient(90deg, #C9A84C, #E8C97A)'}} />

                  <div className="flex gap-1 mb-4">
                    {Array.from({length: t.rating}).map((_, j) => (
                      <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-medium" 
                          style={{background: '#F0FDF4', color: '#0B4D2E'}}>
                      <Landmark size={12} />
                      {t.package}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{background: 'linear-gradient(135deg, #0B4D2E, #2E9B5A)'}}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.location} · {t.year}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors hidden md:flex items-center justify-center" style={{color: '#0B4D2E'}}>
            <ChevronLeft size={28} />
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors hidden md:flex items-center justify-center" style={{color: '#0B4D2E'}}>
            <ChevronRight size={28} />
          </div>
        </div>

        {/* Trust indicators - Premium */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { num: '৫০,০০০+', label: 'সন্তুষ্ট হাজি/ওমরাহকারী', icon: <Users size={24} /> },
            { num: '৪.৯/৫', label: 'গড় রেটিং', icon: <Star size={24} /> },
            { num: '৯৮%', label: 'পুনরাবৃত্তি গ্রাহক', icon: <Award size={24} /> },
            { num: '১০০%', label: 'ভিসা সাফল্য', icon: <CheckCircle size={24} /> },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex justify-center mb-2" style={{color: '#C9A84C'}}>
                {s.icon}
              </div>
              <div className="text-3xl font-bold mb-1" style={{color: '#0B4D2E'}}>
                {s.num}
              </div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}