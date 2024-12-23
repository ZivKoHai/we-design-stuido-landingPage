"use client";

import { useState } from "react";

import Input from "./ui/Input";
import TextArea from "./ui/textArea";
import Button from "./ui/Button";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    e.preventDefault();
    console.log("submitted", e);
    // get the form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    console.log(name, email, phone, message);

    // after promise is resolved set isLoading to false
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, message }),
    });
    console.log(response);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <form
      className="w-full flex flex-col items-end gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <p className="text-foreground">טוען...</p>
        </div>
      ) : (
        <>
          <Input name="name" placeholder="שם" type="text" />
          <Input name="email" placeholder="אימייל" type="email" />
          <Input name="phone" placeholder="טלפון" type="tel" />
          <TextArea name="message" placeholder="הודעה" />
          <Button>שלח</Button>
        </>
      )}
    </form>
  );
}
