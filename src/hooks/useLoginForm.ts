"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

const formSchema = z.object({
  nim_email: z
    .string()
    .min(1, { message: "Email is required!" })
    .refine(
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nimRegex = /^\d+$/;
        return emailRegex.test(value) || nimRegex.test(value);
      },
      { message: "Invalid email or NIM format" },
    ),
  password: z.string().min(1, { message: "Password is required!" }),
});

export type LoginFormValues = z.infer<typeof formSchema>;

interface ILoginFormProps {
  form: UseFormReturn<LoginFormValues>;
  onSubmit: (values: LoginFormValues) => Promise<void>;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
  accessToken: string | null;
  isLoading: boolean;
}

const useLoginForm = (): ILoginFormProps => {
  const [showPassword, setShowPassword] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  const Token = status;

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nim_email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (status === "authenticated" && session?.user?.accessToken) {
      setAccessToken(session.user.accessToken);
      session.user.user_id = session.user.accessToken;
      localStorage.setItem("accessToken", session.user.accessToken);
    }
  }, [status, session]);

  const onSubmit = async (values: LoginFormValues): Promise<void> => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        nim_email: values.nim_email,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        form.setError("root", {
          type: "manual",
          message: "Email atau password kamu salah, coba lagi!",
        });
      } else if (result?.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      form.setError("root", {
        type: "manual",
        message: "Terjadi kesalahan saat login. Silakan coba lagi.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    form,
    showPassword,
    setShowPassword,
    accessToken,
    isLoading,
  };
};

export default useLoginForm;
