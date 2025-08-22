"use server";
import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const getAllProduct = async (page?: string, limit?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?page=${page}&limit=${limit}`,
      {
        method: "GET",
        next: {
          tags: ["PRODUCT"],
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (err: any) {
    return Error(err);
  }
};

export const getSingleProduct = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        method: "GET",
        next: {
          tags: ["SINGLE-PRODUCT"],
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (err: any) {
    return Error(err);
  }
};

export const addProduct = async (productData: FormData) => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
      method: "POST",
      body: productData,
      headers: {
        Authorization: token,
      },
    });

    revalidateTag("PRODUCT");
    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const updateProduct = async (
  productId: string,
  productData: FormData
) => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        method: "PATCH",
        body: productData,
        headers: {
          Authorization: token,
        },
      }
    );

    revalidateTag("PRODUCT");
    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const deleteProduct = async (productId: string) => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );

    revalidateTag("PRODUCT");
    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};
