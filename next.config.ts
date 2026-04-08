import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // React Compiler 是Next.js 用于自动优化组件渲染来提高性能的工具，在之前的话，我们需要手动优化useMemo / useCallback /memo等，现在Next.js会自动优化，你只需要写代码即可,减少心智负担
  reactCompiler:true,
  reactStrictMode:false,

};

export default nextConfig;
