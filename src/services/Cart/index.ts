"use server";

import { IOrder } from "@/types/cart";
import { cookies } from "next/headers";

export const createOrder = async (data: IOrder) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};
