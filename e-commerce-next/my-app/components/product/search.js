"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [term, setTerm] = useState("");
  function searchHandler(remove) {
    const params = new URLSearchParams();
    if (remove) {
      params.delete("search");
      params.delete("page");
      setTerm("");
    } else {
      params.set("search", term);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div>
      <label className="form-label">جستجو</label>
      {searchParams.has("search") && (
        <span
          onClick={() => searchHandler(true)}
          className="text-danger fs-4 cursor-pointer"
        >
          <i class="bi bi-x"></i>
        </span>
      )}
      <div className="input-group mb-3">
        <input
          type="text"
          value={term}
          className="form-control"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          placeholder="نام محصول ..."
        />
        <button
          onClick={() => term !== "" && searchHandler()}
          className="input-group-text"
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
}
