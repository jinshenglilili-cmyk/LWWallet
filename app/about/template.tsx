"use client";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("about template useEffect");
    return () => {
      console.log("about template useEffect return");
    };
  }, []);
  return (
    <div>
      <h1>这是about的template</h1>
      <button onClick={() => setCount(count + 1)}>
        template点击增加count: {count}
      </button>
      {children}
    </div>
  );
}
