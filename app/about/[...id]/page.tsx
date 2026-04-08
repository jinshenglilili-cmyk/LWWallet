"use client";
import { useParams } from "next/navigation";
export default function PageDatail() {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      <p>Page ID: {id}</p>
    </div>
  );
}
