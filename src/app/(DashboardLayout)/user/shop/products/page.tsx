import ManageProducts from "@/components/modules/shop/product";
import { getAllProduct } from "@/services/Product";
import React from "react";

const ProductPage = async () => {
  const { data, meta } = await getAllProduct();

  return (
    <div>
      <ManageProducts products={data} meta={meta} />
    </div>
  );
};

export default ProductPage;
