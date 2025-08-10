import Category from "@/components/modules/Home/Category";
import FeaturedProducts from "@/components/modules/Home/FeaturedProducts";
import HeroSection from "@/components/modules/Home/HeroSection";

const HomePage = () => {
  return (
    <div className="my-5 md:my-10 space-y-6">
      <HeroSection />
      <Category />
      <div className="bg-white pt-5">
      <FeaturedProducts />
      </div>
    </div>
  );
};

export default HomePage;
