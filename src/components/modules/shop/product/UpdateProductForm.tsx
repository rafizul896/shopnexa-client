"use client";

import { Button } from "@/components/ui/button";
import SNImageUploader from "@/components/ui/core/SNImageUploader";
import ImagePreviewer from "@/components/ui/core/SNImageUploader/ImagePreviewer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getAllBrands } from "@/services/Brand";
import { getAllCategories } from "@/services/Category";
import { updateProduct } from "@/services/Product";
import { IBrand, ICategory, IProduct } from "@/types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";

const UpdateProductForm = ({
  productId,
  product,
}: {
  productId: string;
  product: IProduct;
}) => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>(
    product?.imageUrls || []
  );
  const [categories, setCategories] = useState<ICategory[] | []>([]);
  const [brands, setBrands] = useState<IBrand[] | []>([]);
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      price: product?.price || "",
      category: product?.category?._id || "",
      brand: product?.brand?._id || "",
      stock: product?.stock || "",
      weight: product?.weight || "",
      availableColors: product?.availableColors?.map((color) => ({
        value: color,
      })) || [{ value: "" }],
      keyFeatures: product?.keyFeatures.map((feature) => ({
        value: feature,
      })) || [{ value: "" }],
      specification: Object.entries(product?.specification || {}).map(
        ([key, value]) => ({
          key,
          value,
        })
      ) || [{ key: "", value: "" }],
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const [brandsData, categoriesData] = await Promise.all([
        getAllBrands(),
        getAllCategories(),
      ]);

      setBrands(brandsData?.data);
      setCategories(categoriesData?.data);
    };

    fetchData();
  }, []);

  const {
    formState: { isSubmitting },
  } = form;

  const { append: appendColor, fields: colorFields } = useFieldArray({
    control: form.control,
    name: "availableColors",
  });

  const addColor = () => {
    appendColor({ value: "" });
  };

  const { append: appendFeatures, fields: featureFields } = useFieldArray({
    control: form.control,
    name: "keyFeatures",
  });

  const addFeatures = () => {
    appendFeatures({ value: "" });
  };

  const { append: appendSpecification, fields: fieldsSpecification } =
    useFieldArray({
      control: form.control,
      name: "specification",
    });

  const addSpecification = () => {
    appendSpecification({ key: "", value: "" });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const availableColors = data?.availableColors.map(
      (color: { value: string }) => color.value
    );

    const keyFeatures = data?.keyFeatures.map(
      (features: { value: string }) => features.value
    );

    const specification: { [key: string]: string } = {};
    data?.specification.forEach(
      (item: { key: string; value: string }) =>
        (specification[item.key] = item.value)
    );

    const modifiedData = {
      ...data,
      availableColors,
      keyFeatures,
      specification,
      price: parseFloat(data.price),
      stock: parseInt(data.stock),
      weight: parseFloat(data.stock),
    };

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(modifiedData));

      for (const file of imageFiles) {
        formData.append("images", file);
      }

      const res = await updateProduct(productId, formData);
      
      if (res?.success) {
        toast.success(res?.message);
        router.push("/user/shop/products");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err?.message);
        console.log(err);
      }
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
      <div className="flex items-center space-x-4 mb-5 ">
        <h1 className="text-xl font-bold">Update Product</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-lg">Basic Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      step="0.01"
                      min="0"
                      value={field.value || ""}
                      onChange={(e) => {
                        const val = e.target.value;

                        if (
                          val === "" ||
                          (/^\d*\.?\d*$/.test(val) && parseFloat(val) >= 0)
                        ) {
                          field.onChange(val);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Product Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category?._id} value={category?._id}>
                          {category?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Product Brand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand?._id} value={brand?._id}>
                          {brand?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      step="0.01"
                      min="0"
                      value={field.value || ""}
                      onChange={(e) => {
                        const val = e.target.value;

                        if (
                          val === "" ||
                          (/^\d*\.?\d*$/.test(val) && parseFloat(val) >= 0)
                        ) {
                          field.onChange(val);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      step="0.01"
                      min="0"
                      value={field.value || ""}
                      onChange={(e) => {
                        const val = e.target.value;

                        if (
                          val === "" ||
                          (/^\d*\.?\d*$/.test(val) && parseFloat(val) >= 0)
                        ) {
                          field.onChange(val);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 resize-none"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-lg">Images</p>
            </div>
            <div className="flex gap-4 ">
              <SNImageUploader
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label="Upload Image"
                className="w-fit mt-0"
              />
              <ImagePreviewer
                className="flex flex-wrap gap-4"
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
              />
            </div>
          </div>
          {/* availableColors */}
          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Available Colors</p>
              <Button
                onClick={addColor}
                variant="outline"
                className="size-10"
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {colorFields.map((colorField, index) => (
                <div key={colorField.id}>
                  <FormField
                    control={form.control}
                    name={`availableColors.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Color {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* keyFeatures */}
          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Key Features</p>
              <Button
                onClick={addFeatures}
                variant="outline"
                className="size-10"
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {featureFields?.map((featureField, index) => (
                <div key={featureField?.id}>
                  <FormField
                    control={form.control}
                    name={`keyFeatures.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Key Feature {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Specification</p>
              <Button
                onClick={addSpecification}
                variant="outline"
                className="size-10"
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div>
              {fieldsSpecification?.map((spec, index) => (
                <div
                  key={spec?.id}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2 my-5"
                >
                  <FormField
                    control={form.control}
                    name={`specification.${index}.key`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feature name {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`specification.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feature Description {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="mt-5 w-full col-span-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Update Product....." : "Update Product"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateProductForm;
