"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { schemaContact, SchemaContact } from "./_shema";
import sendMessages from "@/lib/sendMessages";
import SuccessPage from "./_components/success-page";
import { Textarea } from "@/components/ui/textarea";

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

  // const { isSubmiting } = form.formState;

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
        <h1 className="font-bold text-xl">About</h1>
        <p className="text-gray-400">
          An insightful glimpse into who I am - because every detail adds depth
          to the canvas of life.
        </p>
      </section>
      <section className={success ? 'flex justify-center' : ''}>
        {!success ? (
          <Form {...form}>
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
                    {/* <Input placeholder="Input your messages" {...field} /> */}
                    <Textarea placeholder="Input your messages" className="resize-none" {...field} />
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
        ) : <SuccessPage/>}
      </section>
    </>
  );
};

export default ContactPage;
