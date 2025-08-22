"use server";

import { getNewAccessToken } from "@/services/Auth";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const isTokenExpired = async (token: string): Promise<boolean> => {
  if (!token) {
    return true;
  }

  try {
    const decoded: { exp: number } = jwtDecode(token);

    return decoded.exp * 1000 < Date.now();
  } catch (err: any) {
    console.log(err);
    return true;
  }
};

export const getValidToken = async () => {
  const cokieStore = await cookies();
  let token = cokieStore.get("accessToken")!.value;

  if (!token || (await isTokenExpired(token))) {
    const { data } = await getNewAccessToken();
    token = data?.accessToken;
    cokieStore.set("accessToken", token);
  }

  return token;
};
