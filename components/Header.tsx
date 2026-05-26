"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./Home.module.css";
import Link from "next/link";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>Dapp Frontend LW</div>
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2, // 等价于 16px
            padding: 2,
          }}
        >
          <Link href={"/"}>home</Link>
          <Link href={"/stake"}>stake</Link>
          <Link href={"/withdraw"}>withdraw</Link>
          <Link href={"/claim"}>claim</Link>
          <ConnectButton />
        </Box>
      </div>
    </div>
  );
};

export default Header;
