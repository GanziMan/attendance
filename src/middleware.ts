import { NextRequest, NextResponse } from "next/server";

const ACCESS_TOKEN_KEY =
  process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY ?? "access-token";

const REFRESH_TOKEN_KEY =
  process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY ?? "REFRESH_TOKEN";

const AUTH_PATHS = ["/signin", "/signup"];

const PRIVATE_PATHS = ["/attendancy"];

export default async function handler(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  const accessToken = req.cookies.get(ACCESS_TOKEN_KEY)?.value;
  const refreshToken = req.cookies.get(REFRESH_TOKEN_KEY)?.value;

  // 로그인 / 회원가입 페이지의 경우 로그인 되어 있을 시 메인으로 보낸다.
  if (
    accessToken != null &&
    AUTH_PATHS.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.redirect(origin);
  }

  // 비공개 route의 경우 로그인 되어 있지 않을 시 로그인 페이지로 보낸다.
  if (
    accessToken == null &&
    PRIVATE_PATHS.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.redirect(
      `${origin}?redirect_uri=` + encodeURIComponent(req.url)
    );
  }

  //   토큰 만료시 (refresh)

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
