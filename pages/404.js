import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
    //   router.go(-1);
    router.push('/')
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>oopss....</h1>
      <h2>That page con not found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>HomePage</a>
        </Link>{" "}
      </p>
    </div>
  );
}
