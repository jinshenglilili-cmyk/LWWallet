import { Box } from "@mui/material";
import { Address, formatUnits } from "viem";
import { useReadContract } from "wagmi";
import { stakeAbi } from "../../abi/stakeAbi";
import { Pid, RccTokenContract } from "../../lib/utils";
import { abi } from "../../abi/abi";

const RccBalance = ({ address }: { address: Address }) => {
  const result = useReadContract({
    abi: stakeAbi,
    address: RccTokenContract,
    functionName: "stakingBalance",
    args: [BigInt(Pid), address as Address],
  });

  return <Box>{result.data && formatUnits(result.data, 18)}Rcc</Box>;
};

export default RccBalance;
