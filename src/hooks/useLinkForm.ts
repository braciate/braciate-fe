import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";

const formSchema = z.object({
  link: z.string().url("Link is required!"),
  lkm: z.string().min(1, "LKM is required!"),
});
const keyValidationSchema = z.object({
  key: z.string().min(1, "Key is required"),
});

export type LinkFormValues = z.infer<typeof formSchema>;
export type KeyValidationValues = z.infer<typeof keyValidationSchema>;
export interface LinkFormProps {
  form: UseFormReturn<LinkFormValues>;
  keyValidationForm: UseFormReturn<KeyValidationValues>;
  onSubmit: (values: LinkFormValues) => Promise<void>;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  formValues: LinkFormValues | null;
  handleKeyValidation: (values: KeyValidationValues) => Promise<void>;
  submissionState: "idle" | "submitting" | "submitted";
}

const useLinkForm = (): LinkFormProps => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState<LinkFormValues | null>(null);
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "submitted"
  >("idle");
  const router = useRouter();
  const form = useForm<LinkFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lkm: "",
      link: "",
    },
  });

  const keyValidationForm = useForm<KeyValidationValues>({
    resolver: zodResolver(keyValidationSchema),
    defaultValues: {
      key: "",
    },
  });

  const onSubmit = async (values: LinkFormValues): Promise<void> => {
    if (values.link != null && values.lkm != null) {
      setFormValues(values);
      setIsModalOpen(true);
    } else {
      form.setError("lkm", {
        type: "manual",
        message: "Lkm is required!",
      });
      form.setError("link", {
        type: "manual",
        message: "Link is required!",
      });
      form.setError("root", {
        type: "manual",
        message: "Please enter a link or lkm",
      });
    }
  };
  const handleKeyValidation = async (values: KeyValidationValues) => {
    const validKey = process.env.NEXT_PUBLIC_LKM_KEY;
    if (validKey && values.key === validKey) {
      setSubmissionState("submitting");
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Submitting form with values:", formValues);
      setSubmissionState("submitted");
      console.log(JSON.stringify(formValues));

      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/");
    } else {
      keyValidationForm.setError("key", {
        type: "manual",
        message: "Invalid key",
      });
    }
  };

  return {
    keyValidationForm,
    form,
    onSubmit,
    isModalOpen,
    setIsModalOpen,
    formValues,
    handleKeyValidation,
    submissionState,
  };
};

export default useLinkForm;
