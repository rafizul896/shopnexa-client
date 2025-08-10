"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllProduct = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?page=${page}`,
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
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
      method: "POST",
      body: productData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
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
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        method: "PATCH",
        body: productData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
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
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    revalidateTag("PRODUCT")
    return res.json()
  } catch (err: any) {
    return Error(err);
  }
};
