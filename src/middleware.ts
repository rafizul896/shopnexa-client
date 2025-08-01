import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/Auth";

const authRoutes = ["/login", "/register"];

export const middleware = async (request: NextRequest) => {
  const {pathName} = request.nextUrl;
  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathName)) {
        return NextResponse.next()
    }
  }
};

export const config = {
  matcher: ["/login", "/create-shop"],
};
