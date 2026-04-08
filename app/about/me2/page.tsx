"use client";
import { useRouter } from "next/navigation";

export default function Me2() {
  const router = useRouter();
  return (
    <div>
      <>
        <button onClick={() => router.push("/page")}>跳转page页面</button>
        <br />
        <button onClick={() => router.replace("/page")}>替换当前页面</button>
        <br />
        <button onClick={() => router.back()}>返回上一页</button>
        <br />
        <button onClick={() => router.forward()}>跳转下一页</button>
        <br />
        <button onClick={() => router.refresh()}>刷新当前页面</button>
        <br />
        <button onClick={() => router.prefetch("/about")}>
          预获取about页面
        </button>
        <br />
      </>
    </div>
  );
}
