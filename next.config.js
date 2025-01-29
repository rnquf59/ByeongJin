// Next.js 서버를 설정하는 파일

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/:id",
        destination: "/items/:id",
        permanent: true, // 웹브라우저에 주삭 바뀌었다는 사실을 저장하게 하려면 true, 아니면 false
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/codeitmall/**",
      },
    ],
  },
};

export default nextConfig;
