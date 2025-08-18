import Category from "@/components/modules/Home/Category";
import FeaturedProducts from "@/components/modules/Home/FeaturedProducts";
import FlashSale from "@/components/modules/Home/FlashSale/indes";
import HeroSection from "@/components/modules/Home/HeroSection";
import TopBrands from "@/components/modules/Home/TopBrands";
import { getNewAccessToken } from "@/services/Auth";

const HomePage = async () => {
  const res = await getNewAccessToken();

  console.log(res);
  return (
    <div className="my-5 md:my-10 space-y-6">
      <HeroSection />
      <Category />
      <div className="bg-white pt-5">
        <FeaturedProducts />
      </div>

      <FlashSale />
      <TopBrands />
    </div>
  );
};

export default HomePage;
