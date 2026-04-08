import Link from "next/link";

export default function home() {
  return (
    <div>
      <Link href="/about">跳转About</Link>
      <br />
      <Link href={{ pathname: "about/me1", query: { id: "4042000" } }}>
        跳转aboubt待参数
      </Link>
      <br />
      <Link href="/page" prefetch={true}>
        预获取page页面
      </Link>
      <br />
      <Link href="/xm" scroll={true}>
        保持滚动位置
      </Link>
      <Link href="/about" replace={true}>
        替换当前页面
      </Link>
      <br />
    </div>
  );
}
