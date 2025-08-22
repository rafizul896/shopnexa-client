"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createCategory = async (data: FormData) => {
    const token = await getValidToken();
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });

    revalidateTag("CATEGORY");

    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      method: "GET",
      next: {
        tags: ["CATEGORY"],
      },
    });

    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const deleteCategory = async (categoryId: string) => {
  const token = await getValidToken();
  
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category/${categoryId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );

    revalidateTag("CATEGORY");

    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};
