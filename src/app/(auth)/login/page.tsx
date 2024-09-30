"use client";

import BgAuth from "@/components/login/background/bg-auth";
import type { FC } from "react";
import useLoginForm from "@/hooks/useLoginForm";
import { EyeIcon, EyeOffIcon } from "lucide-react";
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
import Image from "next/image";
import gold from "../../../assets/svg/fragments/gold-texture.svg";
import bling from "../../../assets/img/fragments/bling.png";

const LoginPage: FC = () => {
  const { form, onSubmit, showPassword, setShowPassword } = useLoginForm();
  const { errors, isSubmitted } = form.formState;

  return (
    <main className="flex h-screen justify-center relative overflow-hidden">
      <BgAuth />
      <section className="w-screen mx-6 sm:w-4/6 lg:w-1/2 h-fit md:h-5/6 self-center grid space-y-4 gap-4 z-10">
        <div className="text-center space-y-0 grid h-max self-end justify-center">
          <div className="relative w-max mx-auto">
            <Image
              src={bling}
              alt="Brawijaya Appreciate Bling"
              className="absolute -left-11 w-max -bottom-7"
              priority={false}
            />
            <Image
              src={bling}
              alt="Brawijaya Appreciate Bling"
              className="absolute -right-11 w-max -top-7"
              priority={false}
            />
            <h1
              className="font-jaoren text-8xl sm:text-9xl text-transparent"
              id={style.title_auth}
            >
              Login
            </h1>
          </div>
          <h2 className="font-jaoren text-xl sm:text-3xl">
            Masuk Menggunakan Akun SIAM UB
          </h2>
        </div>
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void form.handleSubmit(onSubmit)(e);
                }}
                className="space-y-4 text-black"
              >
                <div className=" bg-black h-max rounded-3xl p-7 grid items-center">
                  {errors.root != null && (
                    <p className="text-sm bg-red-900 p-2 rounded-lg text-white font-medium">
                      {errors.root.message}
                    </p>
                  )}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div
                            className={`flex mt-2 relative flex-col border rounded-xl p-0.5 ${Boolean(errors.email) && Boolean(isSubmitted) ? "border-red-500" : style.inputBorder} gap-1`}
                          >
                            <div className="bg-black rounded-xl px-4 py-2">
                              <FormLabel className="text-white pt-1 text-xs sm:text-sm">
                                NIM/Email UB
                              </FormLabel>
                              <Input
                                placeholder="235150XXXXXXXXX/brawijayaapreciate@student.ub.ac.id"
                                type="email"
                                className={`bg-transparent text-white focus:bg-transparent focus:outline-none text-xs sm:text-sm`}
                                {...field}
                              />
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage
                          id={style.errorMessage}
                          className="text-xs sm:text-sm"
                        />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div
                            className={`flex mt-2 relative flex-col border rounded-xl p-0.5 ${Boolean(errors.password) && Boolean(isSubmitted) ? "border-red-500" : style.inputBorder} gap-1`}
                          >
                            <div className="bg-black rounded-xl px-4 py-2">
                              <FormLabel className="text-white pt-1 text-xs sm:text-sm">
                                Password
                              </FormLabel>
                              <Input
                                type={showPassword ? "text" : "password"}
                                className={`bg-transparent text-white focus:bg-transparent focus:outline-none text-xs sm:text-sm`}
                                placeholder="Masukkan kata sandi"
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
                          </div>
                        </FormControl>
                        <FormMessage
                          id={style.errorMessage}
                          className="text-xs sm:text-sm"
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full py-6 hover:brightness-75 relative text-white font-jaoren text-2xl sm:text-3xl border-white border-4 rounded-full overflow-hidden"
                  >
                    <Image
                      src={gold}
                      alt=""
                      className="absolute object-cover -z-10 brightness-75"
                      fill={true}
                    />
                    Masuk
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
