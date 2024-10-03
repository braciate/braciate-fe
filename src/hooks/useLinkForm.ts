import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  link: z.string().url("Link is required!"),
  lkm: z.string().min(1, "LKM is required!"),
});

export type LinkFormValues = z.infer<typeof formSchema>;

export interface LinkFormProps {
  form: UseFormReturn<LinkFormValues>;
  onSubmit: (values: LinkFormValues) => Promise<void>;
}

const useLinkForm = (): LinkFormProps => {
  const form = useForm<LinkFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lkm: "",
      link: "",
    },
  });

  const onSubmit = async (values: LinkFormValues): Promise<void> => {
    if (values.link != null) {
      alert(values.lkm);
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

  return { form, onSubmit };
};

export default useLinkForm;
