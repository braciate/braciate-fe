"use client";
import { useEffect } from "react";
import React from "react";
import Image from "next/image";
import { Link, Loader2, CheckCircle } from "lucide-react";
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
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ListLkm from "@/utils/dropdown";
import useLinkForm from "@/hooks/useLinkForm";
import style from "@/app/(lkm)/page.module.css";
import gold from "@/assets/svg/fragments/gold-texture.png";

interface UploaderComponentProps {
  title: string;
  subtitle: string;
  description: string;
  lkm: string;
  id: string;
  type: string;
  nomination_id: string;
}

export function UploaderComponent({
  title,
  subtitle,
  description,
  lkm,
  id,
  type,
  nomination_id,
}: UploaderComponentProps) {
  const {
    form,
    onSubmit,
    isModalOpen,
    setIsModalOpen,
    handleKeyValidation,
    keyValidationForm,
    submissionState,
    setNominationId,
  } = useLinkForm();
  const { errors, isSubmitted } = form.formState;
  useEffect(() => {
    setNominationId(nomination_id);
  }, [nomination_id, setNominationId]);
  return (
    <section className="flex flex-col items-center space-y-3 w-full max-w-6xl px-4 py-12">
      <div className="font-jaoren text-center mt-12 mb-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl">{title}</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl" id={style.text_clip}>
          {subtitle}
        </h2>
      </div>
      <div className="border-2 rounded-3xl border-white w-full sm:w-11/12 md:w-10/12 lg:w-9/12 p-6 sm:p-10">
        <div className="grid gap-6">
          <div className="gap-4 flex flex-col">
            <h1
              className="font-jaoren text-3xl sm:text-4xl"
              id={style.text_clip}
            >
              Ketentutan pengiriman
            </h1>
          </div>
          <div>
            <p className="font-semibold mb-2">Indikator:</p>
            <p className="text-sm sm:text-base mb-4 text-justify md:text-start font-poppins">
              {description}
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
                          lkm={lkm}
                          id={id}
                          type={type}
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
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative flex w-full mt-3">
                          <Input
                            className={`bg-transparent border-2 rounded-2xl py-3 px-12 w-full text-white ${
                              Boolean(errors.url) && Boolean(isSubmitted)
                                ? "border-red-500"
                                : ""
                            }`}
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
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogContent className={`bg-black border-spacing-0.5`}>
                <Form {...keyValidationForm}>
                  <form
                    onSubmit={keyValidationForm.handleSubmit(
                      handleKeyValidation,
                    )}
                    className="space-y-4"
                  >
                    <FormField
                      control={keyValidationForm.control}
                      name="key"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-center">
                          <FormLabel className="font-jaoren text-3xl mb-4">
                            Masukkan Key
                          </FormLabel>
                          <FormControl>
                            <div
                              className={`${style.inputBorder} w-full p-[1.5px] rounded-lg`}
                            >
                              <div className="bg-black rounded-lg">
                                <Input
                                  {...field}
                                  placeholder="Password hanya dimiliki organisasi"
                                  className={`text-center p-2 rounded-lg text-white focus:bg-transparent focus:outline-none text-xs sm:text-sm bg-transparent`}
                                />
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="relative">
                      <Button
                        type="submit"
                        className="border-2 w-full rounded-full font-jaoren text-white text-2xl"
                        disabled={submissionState !== "idle"}
                      >
                        <Image
                          src={gold}
                          alt=""
                          className="absolute object-cover -z-10 brightness-75 rounded-full"
                          fill={true}
                        />
                        {submissionState === "idle" && "Verifikasi"}
                        {submissionState === "submitting" && (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting
                          </>
                        )}
                        {submissionState === "submitted" && (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Submitted
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
