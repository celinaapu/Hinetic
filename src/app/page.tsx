import Footer from "@/components/HomeComponents/footer";
import HeroSection from "@/components/HomeComponents/HeroSection";
import MiddleSections from "@/components/HomeComponents/MiddleSection";
import ThirdSection from "@/components/HomeComponents/thirdSection";
import WhyChooseUs from "@/components/HomeComponents/whyChooseUs";

const HomePage: React.FC = () => {
  return (
    <div className="w-[100%] h-screen mx-auto">
      <HeroSection />
      <MiddleSections />
      <ThirdSection />
      <Footer />
    </div>
  );
};

export default HomePage;
