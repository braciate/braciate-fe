import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import { useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useSession } from "next-auth/react";
import axios from "axios";

const formSchema = z.object({
  url: z.string().url("Link is required!"),
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
  setNominationId: Dispatch<SetStateAction<string>>;
  formValues: LinkFormValues | null;
  handleKeyValidation: (values: KeyValidationValues) => Promise<void>;
  submissionState: "idle" | "submitting" | "submitted";
}

const useLinkForm = (): LinkFormProps => {
  const [nominationId, setNominationId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState<LinkFormValues | null>(null);
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "submitted"
  >("idle");
  const { data: session } = useSession();
  const router = useRouter();
  const form = useForm<LinkFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lkm: "",
      url: "",
    },
  });

  const keyValidationForm = useForm<KeyValidationValues>({
    resolver: zodResolver(keyValidationSchema),
    defaultValues: {
      key: "",
    },
  });

  const onSubmit = async (values: LinkFormValues): Promise<void> => {
    if (values.url != null && values.lkm != null) {
      setFormValues(values);
      setIsModalOpen(true);
    } else {
      form.setError("lkm", {
        type: "manual",
        message: "Lkm is required!",
      });
      form.setError("url", {
        type: "manual",
        message: "Link is required!",
      });
      form.setError("root", {
        type: "manual",
        message: "Please enter a link or lkm",
      });
    }
  };
  const handleKeyValidation = async (
    values: KeyValidationValues
  ): Promise<void> => {
    const validKey = process.env.NEXT_PUBLIC_LKM_KEY;
    const URL = "/api/assets";
    if (validKey && values.key === validKey) {
      setSubmissionState("submitting");
      try {
        const { data } = await axios.post(
          URL,
          {
            user_id: session?.user.user_id,
            lkm_id: formValues?.lkm,
            nomination_id: nominationId,
            url: formValues?.url,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": validKey,
            },
          }
        );
      } catch (err) {
        console.error(err);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmissionState("submitted");
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
    setNominationId,
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
