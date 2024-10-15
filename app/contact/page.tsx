"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import sendMessages from "@/lib/sendMessages";
import SuccessPage from "./_components/success-page";
import { Textarea } from "@/components/ui/textarea";
import { schemaContact, SchemaContact } from "./_shema";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const form = useForm<SchemaContact>({
    defaultValues: {
      name: "",
      email: "",
      messages: "",
    },
    resolver: zodResolver(schemaContact),
    mode: "onChange",
  });

  const submit = async (value: SchemaContact) => {
    const result = await sendMessages(value);
    if (result?.error) {
      console.log(result.error);
    }
    setSuccess(true);
    form.reset();
  };
  return (
    <>
      <section className="space-y-4">
        <h1 className="font-bold text-xl">Contact</h1>
        <p className="text-gray-400">
          Feel free to get in touch and let us have a discussion about how we can work together.
        </p>
      </section>
      <hr className="border-cborder" />
      <section className={success ? "flex justify-center" : "space-y-4"}>
        {!success ? (
          <Form {...form}>
            <h1 className="font-bold">Send me a message</h1>
            <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Input your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Input your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="messages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Messages</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Input your messages"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                className="flex gap-2 group items-center text-sm w-fit py-2 px-4 rounded-md text-background bg-foreground transition"
                type="submit"
              >
                Submit
              </button>
            </form>
          </Form>
        ) : (
          <SuccessPage />
        )}
      </section>
    </>
  );
};

export default ContactPage;
