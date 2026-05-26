"use client";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../components/Home.module.css";
import Header from "../../components/Header";
import Info from "../../components/Info";
import NetworkSwitcher from "../../components/Switcher";

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <Info />
        <NetworkSwitcher />
      </main>
    </>
  );
};

export default Home;
