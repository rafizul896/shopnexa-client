"use client";

import { Button } from "@/components/ui/button";
import SNImageUploader from "@/components/ui/core/SNImageUploader";
import ImagePreviewer from "@/components/ui/core/SNImageUploader/ImagePreviewer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createCategory } from "@/services/Category";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateCategoryModal = () => {
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [isOpen, setIsopen] = useState(false);
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("icon", imageFiles[0] as File);

      const res = await createCategory(formData);

      if (res?.success) {
        toast.success(res?.message);
        form.reset();
        setImageFiles([]);
        setImagePreview([]);
        setIsopen(false);
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err?.message);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsopen}>
      <DialogTrigger asChild>
        <Button size="sm" onClick={() => setIsopen(true)}>
          Create Category
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-start">
            Create Product Category
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="md:flex items-center justify-between mt-5 ">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-36 w md:w-72"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {imagePreview?.length > 0 ? (
                <ImagePreviewer
                  className="mt-5"
                  imagePreview={imagePreview}
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                />
              ) : (
                <SNImageUploader
                  label="Upload Icon"
                  className="mt-5"
                  setImagePreview={setImagePreview}
                  setImageFiles={setImageFiles}
                />
              )}
            </div>
            <Button type="submit" className="mt-5 w-full cursor-pointer">
              {isSubmitting ? "Creating..." : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryModal;
