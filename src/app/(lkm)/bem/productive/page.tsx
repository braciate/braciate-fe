"use client";
import type { FC } from "react";
import BgKategori from "@/components/lkm/background/bg-main";
import style from "../../page.module.css";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gold from "../../../../assets/svg/fragments/gold-texture.svg";
import useLinkForm from "@/hooks/useLinkForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import ListLkm from "@/utils/dropdown";

const Page: FC = () => {
  const { onSubmit, form } = useLinkForm();
  const { errors, isSubmitted } = form.formState;
  return (
    <main className="w-screen min-h-screen relative flex justify-center">
      <BgKategori />
      <section className="flex flex-col items-center space-y-3 w-full max-w-6xl px-4 py-12">
        <div className="font-jaoren text-center mt-12 mb-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl">
            Badan Eskutif Mahasiswa
          </h1>
          <h2 id={style.text_clip} className="text-4xl sm:text-5xl md:text-6xl">
            Best Productive
          </h2>
        </div>
        <div className="border-2 rounded-3xl border-white w-full sm:w-11/12 md:w-10/12 lg:w-9/12 p-6 sm:p-10">
          <div className="grid gap-6">
            <div className="gap-4 flex flex-col">
              <h1
                id={style.text_clip}
                className="font-jaoren text-3xl sm:text-4xl"
              >
                Ketentutan pengiriman
              </h1>
            </div>
            <div>
              <p className="font-semibold mb-2">Indikator:</p>
              <p className="text-sm sm:text-base mb-4 text-justify md:text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                alias doloremque, architecto tempore eos, ad rem voluptatum unde
                quisquam accusamus commodi dolores totam aut amet inventore
                maiores ducimus, tenetur ut!
              </p>
              <Form {...form}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void form.handleSubmit(onSubmit)(e);
                  }}
                  className="space-y-4 text-white"
                >
                  <FormField
                    control={form.control}
                    name="lkm"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ListLkm
                            {...field}
                            error={Boolean(errors.lkm) && isSubmitted}
                            lkm="BEM"
                          />
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
                    name="link"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative flex w-full mt-3">
                            <Input
                              className={`bg-transparent border-2 rounded-2xl py-3 px-12 w-full text-white ${Boolean(errors.link) && Boolean(isSubmitted) ? "border-red-500 " : null} `}
                              placeholder="Link pengumpulan"
                              type="text"
                              {...field}
                            />
                            <Link className="absolute bottom-3 left-4 text-gray-300" />
                          </div>
                        </FormControl>
                        <FormMessage
                          id={style.errorMessage}
                          className="text-xs sm:text-sm"
                        />
                      </FormItem>
                    )}
                  />
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
                      SUBMIT NOW
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

export default Page;
