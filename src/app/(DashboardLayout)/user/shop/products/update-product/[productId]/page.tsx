import UpdateProductForm from "@/components/modules/shop/product/UpdateProductForm";
import { getSingleProduct } from "@/services/Product";
import React from "react";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleProduct(productId);

  return (
    <div className="flex justify-center items-center">
      <UpdateProductForm productId={productId} product={product} />
    </div>
  );
};

export default UpdateProductPage;
