import CartProducts from "@/components/modules/cart/CartProducts";
import Coupon from "@/components/modules/cart/Coupon";
import CustomerHelpSection from "@/components/modules/cart/CustomerHelpSection";
import CommonBanner from "@/components/modules/products/banner";

const CartPage = () => {
  return (
    <div className="container mx-auto">
      <CommonBanner title="Cart Page" path="Home - Cart" />

      <div className="space-y-5 md:grid grid-cols-12 gap-8 my-5">
        <CartProducts />
        <Coupon />
      </div>

      {/* Customer Help Section */}
      <CustomerHelpSection />
    </div>
  );
};

export default CartPage;
