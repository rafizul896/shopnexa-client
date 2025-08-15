import ManageProducts from "@/components/modules/shop/product";
import { getAllProduct } from "@/services/Product";
import React from "react";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string; limit: string }>;
}) => {
  const { page, limit } = await searchParams;
  const { data, meta } = await getAllProduct(page, limit);

  return (
    <div>
      <ManageProducts products={data} meta={meta} />
    </div>
  );
};

export default ProductPage;
