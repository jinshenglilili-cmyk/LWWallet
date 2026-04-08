import Link from "next/link";
import { redirect } from "next/navigation";
export default async function about() {
  if (true) {
    redirect("/about/me1");
  }
  return (
    <div>
      <br />
      <Link prefetch={false} href="/about/me1">
        me1
      </Link>
      <br />
      <Link href="/about/me2">me2</Link>
      <br />
    </div>
  );
}
