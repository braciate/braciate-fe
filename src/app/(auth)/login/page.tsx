"use client";

import BgAuth from "@/components/login/background/bg-auth";
import type { FC } from "react";
import useLoginForm from "@/hooks/useLoginForm";
import { Lock, EyeIcon, EyeOffIcon } from "lucide-react";
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
import style from "@/components/login/style/auth.module.css";

const LoginPage: FC = () => {
  const { form, onSubmit, showPassword, setShowPassword } = useLoginForm();
  const { errors, isSubmitted } = form.formState;

  return (
    <main className="flex h-screen justify-center relative">
      <BgAuth />
      <section className="w-1/2 mx-5 md:mx-8 h-fit md:h-5/6 self-center grid space-y-4 z-10">
        <div className="text-center space-y-0">
          <h1
            className="font-jaoren text-9xl text-transparent"
            id={style.title_auth}
          >
            Login
          </h1>
          <h2 className="font-jaoren text-3xl tracking-wider">
            Masuk Menggunakan Akun UB
          </h2>
        </div>
        <div className=" bg-black rounded-3xl">
          <div className="flex flex-col md:flex-row h-full">
            <div className="p-7 w-full my-auto">
              <Form {...form}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void form.handleSubmit(onSubmit)(e);
                  }}
                  className="space-y-4 text-black"
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
                              className={`py-6 focus:border-green-400 focus:border-2 focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-200 ${Boolean(errors.email) && Boolean(isSubmitted) && " border-red-500"}`}
                              {...field}
                            />
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
                              type={showPassword ? "text" : "password"}
                              className={`py-6 focus:border-green-400 focus:border-2 focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-200 ${Boolean(errors.password) && Boolean(isSubmitted) ? "border-red-500" : null} `}
                              placeholder="Password"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                              {showPassword ? (
                                <EyeOffIcon className="h-5 w-5" />
                              ) : (
                                <EyeIcon className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full py-6 hover:brightness-75 text-black font-jaoren text-3xl border-white border-2"
                      id={style.submitButton}
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
