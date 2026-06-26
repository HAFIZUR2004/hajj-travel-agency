import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testmonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero />
      <Packages/>
      <WhyUs/>
      <Testimonials/>
      
    </div>
  );
}