"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortBy() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  function clickHandler(type) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", type);
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div>
      <label className="form-label">مرتب سازی</label>
      <div className="form-check my-2">
        <input
          checked={
            searchParams.has("sortBy") && searchParams.get("sortBy") == "max"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => {
            clickHandler("max");
          }}
        />
        <label className="form-check-label cursor-pointer">بیشترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
          checked={
            searchParams.has("sortBy") && searchParams.get("sortBy") == "min"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => {
            clickHandler("min");
          }}
        />
        <label className="form-check-label cursor-pointer">کمترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
          checked={
            searchParams.has("sortBy") &&
            searchParams.get("sortBy") == "bestseller"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => {
            clickHandler("bestseller");
          }}
        />
        <label className="form-check-label cursor-pointer">پرفروش ترین</label>
      </div>
      <div className="form-check my-2">
        <input
          checked={
            searchParams.has("sortBy") && searchParams.get("sortBy") == "sale"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => {
            clickHandler("sale");
          }}
        />
        <label className="form-check-label cursor-pointer">با تخفیف</label>
      </div>
    </div>
  );
}
