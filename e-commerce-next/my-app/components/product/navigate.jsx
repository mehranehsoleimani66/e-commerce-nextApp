"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Navigate({ links }) {
  const pathName = usePathname();
  const router = useRouter();

  function clickHandler(page) {
    const params = new URLSearchParams();
    params.set("page", page);
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {links.slice(1, -1).map((link, index) => (
          <li
            className={link.active ? "page-item active" : "page-item"}
            key={index}
          >
            <button
              onClick={() => {
                clickHandler(link.label);
              }}
              className="page-link"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
