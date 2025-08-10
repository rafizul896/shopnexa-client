import Category from "@/components/modules/Home/Category";
import HeroSection from "@/components/modules/Home/HeroSection";

const HomePage = () => {
  return (
    <div className="my-5 md:my-10 space-y-6">
      <HeroSection />
      <Category />
    </div>
  );
};

export default HomePage;
