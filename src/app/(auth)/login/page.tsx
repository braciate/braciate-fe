"use client";

import BgAuth from "@/components/login/background/bg-auth";
import type { FC } from "react";
import useLoginForm from "@/hooks/useLoginForm";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const LoginPage: FC = () => {
  const { form, onSubmit } = useLoginForm();
  const { errors, isSubmitted } = form.formState;

  return (
    <main className="flex h-screen justify-center relative">
      <BgAuth />
      <section className="w-1/2 mx-5 md:mx-8 h-fit md:h-5/6 self-center grid">
        <h2 className="font-jaoren text-4xl text-white text-center">Login</h2>
        <div className=" bg-black rounded-3xl">
          <div className="flex flex-col md:flex-row h-full">
            <div className="p-7 w-full my-auto">
              <Form {...form}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void form.handleSubmit(onSubmit)(e);
                  }}
                  className="space-y-4"
                >
                  {errors.root != null && (
                    <p className="text-sm bg-red-100 p-3 rounded-lg text-red-500 font-medium">
                      {errors.root.message}
                    </p>
                  )}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Email address"
                              type="email"
                              className={`py-6 focus:border-green-400 focus:border-2 focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-200${Boolean(errors.email) && Boolean(isSubmitted) && " border-red-500"}`}
                              {...field}
                            />
                            <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="password"
                              className={`py-6 focus:border-green-400 focus:border-2 focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-200 ${Boolean(errors.password) && Boolean(isSubmitted) ? "border-red-500" : null} `}
                              placeholder="Password"
                              {...field}
                            />
                            <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full py-6 bg-green-500 hover:bg-green-600 text-white"
                    >
                      Masuk
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
