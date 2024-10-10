"use server";

import { schemaContact, SchemaContact } from "@/app/contact/_shema";

const sendMessages = async (payload: SchemaContact) => {
  const safePayload = schemaContact.safeParse(payload);

  if (!safePayload.success) return { error: "Invalid payload!" };

  try {
    const { name, email, messages } = safePayload.data;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("messages", messages);
    formData.append("access_key", process.env.CONTACT_FORM_KEY!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      cache: "no-store",
    });
    const result = await response.json();

    if (!result.success) {
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};

export default sendMessages;
