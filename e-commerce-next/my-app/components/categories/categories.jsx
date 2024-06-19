"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Categories({ categories }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleClick(id) {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.set("category", id);
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <ul>
      {categories.map((item) => {
        return (
          <li
            className={
              searchParams.has("category") &&
              searchParams.get("category") == item.id
                ? "filter-list-active"
                : "my-2 cursor-pointer"
            }
            key={item.id}
            onClick={() => {
              handleClick(item.id);
            }}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
