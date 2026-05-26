"use client";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { mainnet, optimism, polygon, sepolia } from "wagmi/chains";
export const config = getDefaultConfig({
  appName: "RainbowKit App1",
  appIcon: "",
  projectId: "0326ffe2fc9147572ac5856270fb2ec2",
  chains: [mainnet, sepolia, polygon, optimism],
  transports: {
    // 替换之前 不可用的 https://rpc.sepolia.org/
    [mainnet.id]: http(),
    [sepolia.id]: http(
      "https://sepolia.infura.io/v3/a16415747a8946d8b1f47cd4dc31dda9",
    ),
    [polygon.id]: http(),
    [optimism.id]: http(),
  },
  ssr: true,
});

export const defaultChainId: number = sepolia.id;
