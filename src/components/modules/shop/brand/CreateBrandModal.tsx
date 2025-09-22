import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { createBrand } from "@/services/Brand";
import ImagePreviewer from "@/components/ui/core/SNImageUploader/ImagePreviewer";
import SNImageUploader from "@/components/ui/core/SNImageUploader";
import { Loader2 } from "lucide-react";

const CreateBrandModal = () => {
  const [isOpen, setIsopen] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form || {};

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("logo", imageFiles[0] as File);

      const res = await createBrand(formData);

      if (res.success) {
        toast.success(res.message);
        form.reset();
        setImageFiles([]);
        setImagePreview([]);
        setIsopen(false);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsopen}>
      <DialogTrigger asChild>
        <Button size="sm" onClick={() => setIsopen(true)}>
          Create Brand
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[430px]">
        <DialogHeader>
          <DialogTitle className="text-start">Create Product Brand</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-center">
          {imagePreview?.length > 0 ? (
            <ImagePreviewer
              setImageFiles={setImageFiles}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
            />
          ) : (
            <SNImageUploader
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
              label="Upload Logo"
            />
          )}
        </div>

        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      placeholder="Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full rounded-sm flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {isSubmitting ? "Creating..." : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBrandModal;
