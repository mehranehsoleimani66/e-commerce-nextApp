"use server";
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
  } else {
    return {
      status: "success",
      message: "اطلاعات با موفقیت ارسال شد",
    };
  }
}
export { Create };
