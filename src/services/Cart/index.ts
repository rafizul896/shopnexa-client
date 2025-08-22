"use server";

import { getValidToken } from "@/lib/verifyToken";
import { IOrder } from "@/types/cart";

export const createOrder = async (data: IOrder) => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};
