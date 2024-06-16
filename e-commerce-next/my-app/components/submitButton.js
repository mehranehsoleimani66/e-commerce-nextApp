"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ title, style }) {
  const { pending } = useFormStatus();
  return (
    <>
      <button className={style} disabled={pending} type="submit">
        {title}
      </button>
      {pending && <div className="spinner-border spinner-grow-sm ms-2"></div>}
    </>
  );
}
