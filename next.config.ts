import type { NextConfig } from "next";
import { fa } from "zod/locales";

const nextConfig: NextConfig = {
  /* config options here */
  // React Compiler 是Next.js 用于自动优化组件渲染来提高性能的工具，在之前的话，我们需要手动优化useMemo / useCallback /memo等，现在Next.js会自动优化，你只需要写代码即可,减少心智负担
  reactCompiler: true,
  reactStrictMode: false,
  cacheComponents: false,
  // 跨域的图片需要动态配置remotePatterns，允许加载远程图片
  images: {
    remotePatterns: [
      {
        protocol: "https", // 协议
        hostname: "eo-img.521799.xyz", // 主机名
        pathname: "/i/pc/**", // 路径
        port: "", // 端口
      },
    ],
    formats: ["image/avif", "image/webp"], //默认是 ['image/webp']
  },
};

export default nextConfig;
