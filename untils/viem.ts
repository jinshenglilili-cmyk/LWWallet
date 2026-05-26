import { sepolia } from "viem/chains";
import { PublicClient, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
// 获取多个客户端的对象，通过链的id获取对应的客户端对象
export const viemClients = (chaiId: number): PublicClient => {
  const clients: {
    [key: number]: PublicClient;
  } = {
    [sepolia.id]: createPublicClient({
      chain: sepolia,
      transport: http(
        "https://sepolia.infura.io/v3/d8ed0bd1de8242d998a1405b6932ab33",
      ),
    }),
    // 1. 以太坊主网
    [mainnet.id]: createPublicClient({
      chain: mainnet,
      transport: http(
        "https://mainnet.infura.io/v3/d8ed0bd1de8242d998a1405b6932ab33",
      ),
    }),
  };
  return clients[chaiId];
};
