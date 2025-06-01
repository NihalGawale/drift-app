"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  //   console.log(segments);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return { label, href };
  });

  console.log(breadcrumbs);

  return (
    <nav
      aria-label="breadcrumb"
      className="text-sm text-[#4B4B4B]  flex items-center flex-wrap gap-3 pr-4 py-2 tracking-wide"
    >
      <Link href="/" className="font-semibold text-black hover:underline">
        Home
      </Link>
       {breadcrumbs.map((crumb, index) => (
        <span key={crumb.href} className="flex items-center gap-3">
          <span className="text-xl text-[#9b9999]">•</span>
          {index === breadcrumbs.length - 1 ? (
            <span>{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="font-semibold text-black hover:underline"
            >
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
