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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

const DiscountModal = () => {
  const [isOpen, setIsopen] = useState(false);
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form || {};

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsopen}>
      <DialogTrigger asChild>
        <Button size="sm" onClick={() => setIsopen(true)}>
          Add Falsh Sale
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-start">Add Falsh Sale</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="discountPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount Percentage</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ""}
                      placeholder="discountPercentage"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full rounded-sm">
              {isSubmitting ? "Adding...." : "Add"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountModal;
