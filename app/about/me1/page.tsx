"use client";
import { useSearchParams } from "next/navigation";

export default function Me1() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const age = searchParams.get("age");
  const ids = searchParams.getAll("id");
  const istrue = searchParams.has("id");
  console.log(id);
  console.log(age);
  console.log(ids);
  console.log(istrue);

  return (
    <div>
      <p>这个是me1的ID: {id}</p>
      <p>这个是me1的年龄: {age}</p>
      <p>这个是me1的ID列表: {ids.join(", ")}</p>
      <p>这个是me1的ID是否存在: {!istrue ? "存在" : "不存在"}</p>
    </div>
  );
}
