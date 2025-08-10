import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProduct } from "@/services/Product";
import { ICategory, IProduct } from "@/types";
import Link from "next/link";
import React from "react";

const FeaturedProducts = async () => {
  const { data: products } = await getAllProduct();
  return (
    <div className="container mx-auto">
      <div className="md:flex justify-between items-center">
        <h1 className="text-xl text-center md:text-3xl font-bold ">
          Featured Products
        </h1>
        <Link href={"/products"}>
          <Button
            size={"lg"}
            className="rounded-full hidden md:block"
            variant="outline"
          >
            All Collection
          </Button>
        </Link>
      </div>

      <div className="my-5 grid gap-5 grid-cols-1 md:grid-col-3 lg:grid-cols-4">
        {products.map((product: IProduct, idx: number) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>

      <Link href={"/products"} className="flex justify-center">
        <Button
          size={"lg"}
          className="rounded-full  md:hidden"
          variant="outline"
        >
          All Collection
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedProducts;
