"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { Create } from "../../actions/create";
import SubmitButton from "../submitButton";
export default function FormContact() {
  const [state, formAction] = useFormState(Create, {});
  useEffect(() => {
    toast(state?.message, { type: `${state.status}` });
  }, [state]);
  return (
    <div className="form_container">
      <form action={formAction}>
        <div>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="نام و نام خانوادگی"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="ایمیل"
          />
        </div>
        <div>
          <input
            name="text"
            type="text"
            className="form-control"
            placeholder="موضوع پیام"
          />
        </div>
        <div>
          <textarea
            rows="10"
            name="text"
            style={{ height: "100px" }}
            className="form-control"
            placeholder="متن پیام"
          ></textarea>
        </div>
        <div className="btn_box">
          <SubmitButton title="ارسال پیام" />
        </div>
      </form>
    </div>
  );
}
