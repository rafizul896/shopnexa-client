"use client";

import { Button } from "@/components/ui/button";
import {
  citySelector,
  orderConfirmSelector,
  shippingAddressSelector,
  shippingCostSelector,
  subTotalSelector,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";

export default function PaymentDetails() {
  const subTotal = useAppSelector(subTotalSelector);
  const shippingConst = useAppSelector(shippingCostSelector);
  const orderInfo = useAppSelector(orderConfirmSelector);
  const grandTotal = subTotal + shippingConst;
  const city = useAppSelector(citySelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);

  console.log(city && shippingAddress ? true : false);
  const handleOrder = () => {
    console.log(orderInfo);
  };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{subTotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">{0}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{shippingConst}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{grandTotal}</p>
      </div>
      <Button
        disabled={city && shippingAddress ? false : true}
        onClick={handleOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
}
