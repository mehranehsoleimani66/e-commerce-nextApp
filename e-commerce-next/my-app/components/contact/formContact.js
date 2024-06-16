"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { Create } from "../../actions/create";
import SubmitButton from "../submitButton";
export default function FormContact() {
  const [state, formAction] = useFormState(Create, {});
  useEffect(() => {
    if (state?.status === "error") {
      toast(state.message);
    } else if (state?.status === "success") {
      toast(state.message);
    }
  }, [state]);
  return (
    <div class="form_container">
      <form action={formAction}>
        <div>
          <input
            name="name"
            type="text"
            class="form-control"
            placeholder="نام و نام خانوادگی"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            class="form-control"
            placeholder="ایمیل"
          />
        </div>
        <div>
          <input
            name="text"
            type="text"
            class="form-control"
            placeholder="موضوع پیام"
          />
        </div>
        <div>
          <textarea
            rows="10"
            name="text"
            style={{ height: "100px" }}
            class="form-control"
            placeholder="متن پیام"
          ></textarea>
        </div>
        <div class="btn_box">
          <SubmitButton title="ارسال پیام" />
        </div>
      </form>
    </div>
  );
}
