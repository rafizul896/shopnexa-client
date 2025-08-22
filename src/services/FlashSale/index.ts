"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const addFlashSale = async (productData: any): Promise<any> => {
    const token = await getValidToken();

  try {
    console.log(productData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    revalidateTag("PRODUCT");
    revalidateTag("FLASHPRODUCTS");
    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const getFlashSaleProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`, {
      method: "GET",
      next: {
        tags: ["FLASHPRODUCTS"],
      },
    });

    const data = await res.json();
    return data;
  } catch (err: any) {
    return Error(err);
  }
};
