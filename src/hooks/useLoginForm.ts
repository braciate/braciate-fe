import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

//* Data for checking validate login form
const dataDummy = {
  id: 1,
  email: "dummy@gmail.com",
  password: "Admin123",
};

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required!" }),
});

export type LoginFormValues = z.infer<typeof formSchema>;

interface ILoginFormProps {
  form: UseFormReturn<LoginFormValues>;
  onSubmit: (values: LoginFormValues) => Promise<void>;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
}

const useLoginForm = (): ILoginFormProps => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues): Promise<void> => {
    if (
      values.email === dataDummy.email &&
      values.password === dataDummy.password
    ) {
      alert("submitted");
      router.push("/");
    } else {
      form.setError("email", {
        type: "manual",
        message: "",
      });
      form.setError("password", {
        type: "manual",
        message: "",
      });
      form.setError("root", {
        type: "manual",
        message: "Email atau password kamu salah, coba lagi!",
      });
    }
  };
  return { onSubmit, form, showPassword, setShowPassword };
};

export default useLoginForm;
