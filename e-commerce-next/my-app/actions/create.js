"use server";

import { PostFetch } from "../utils/fetch";
import { messageHandler } from "../utils/helper";

async function Create(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("text");
  if (text === "" || name === "" || email === "" || subject === "") {
    return {
      status: "error",
      message: "وارد کردن تمامی فیلدها الزامی هست",
    };
  }

  const data = await PostFetch("/contact-us", { name, email, subject, text });
  if (data.status === "success") {
    return {
      status: data.status,
      message: messageHandler(data.message),
    };
  } else {
    return {
      status: data.status,
      message: messageHandler(data.message),
    };
  }
}
export { Create };
