"use client";

import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("about layout useEffect");
    return () => {
      console.log("about layout useEffect return");
    };
  }, []);
  return (
    <div>
      <h1>about layout</h1>
      <button onClick={() => setCount(count + 1)}>
        layout点击增加count: {count}
      </button>
      {children}
    </div>
  );
}
