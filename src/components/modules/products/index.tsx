import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types";
import React from "react";
import FilterSidebar from "./filterSidebar";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex gap-5 md:gap-10 mt-10">
      <div>
        <FilterSidebar />
      </div>

      <div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product: IProduct, idx: number) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
