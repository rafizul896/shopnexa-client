import ManageBrands from "@/components/modules/shop/brand";
import { getAllBrands } from "@/services/Brand";
import React from "react";

const BrandPage = async () => {
  const { data } = await getAllBrands();
  
  return (
    <div>
      <ManageBrands brands={data} />
    </div>
  );
};

export default BrandPage;
