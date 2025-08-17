"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  citySelector,
  clearCartProducts,
  orderConfirmSelector,
  shippingAddressSelector,
  shippingCostSelector,
  subTotalSelector,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createOrder } from "@/services/Cart";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function PaymentDetails() {
  const subTotal = useAppSelector(subTotalSelector);
  const shippingConst = useAppSelector(shippingCostSelector);
  const orderInfo = useAppSelector(orderConfirmSelector);
  const grandTotal = subTotal + shippingConst;
  const city = useAppSelector(citySelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);
  const dispatch = useAppDispatch();
  const user = useUser();
  const router = useRouter();

  const handleOrder = async () => {
    const orderLoading = toast.loading("Order is being placed");
    try {
      if (!subTotal) {
        throw new Error("Your cart is empty..!");
      }

      if (!user?.user) {
        router.push("/login");
        throw new Error("Please login first");
      }

      if (!city) {
        throw new Error("City is missing..!");
      }

      if (!shippingAddress) {
        throw new Error("Shipping address is missing..!");
      }

      const res = await createOrder(orderInfo);
      console.log(res);
      if (res.success) {
        toast.success(res?.message, { id: orderLoading });
        dispatch(clearCartProducts());
        router.push(res?.data?.paymentUrl);
      }

      if (!res?.success) {
        toast.error(res?.message, { id: orderLoading });
      }
    } catch (err: any) {
      toast.error(err?.message, { id: orderLoading });
    }
  };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{currencyFormatter(subTotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">{currencyFormatter(0)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{currencyFormatter(shippingConst)}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{currencyFormatter(grandTotal)}</p>
      </div>
      <Button
        onClick={handleOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
}
