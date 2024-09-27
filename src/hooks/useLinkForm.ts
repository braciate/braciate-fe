import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  link: z.string().min(1, { message: "Link is required!" }),
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
      link: "",
    },
  });

  const onSubmit = async (values: LinkFormValues): Promise<void> => {
    if (values.link != null) {
      alert("link submitted");
    } else {
      form.setError("link", {
        type: "manual",
        message: "Link is required!",
      });
      form.setError("root", {
        type: "manual",
        message: "Please enter a valid link",
      });
    }
  };

  return { form, onSubmit };
};

export default useLinkForm;
