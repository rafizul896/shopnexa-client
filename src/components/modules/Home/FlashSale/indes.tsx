import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getFlashSaleProducts } from "@/services/FlashSale";
import { IProduct } from "@/types";
import Link from "next/link";
import React from "react";
import CountDown from "./CountDown";

const FlashSale = async () => {
  const { data: products } = await getFlashSaleProducts();
  return (
    <div className="container mx-auto">
      <div className="md:flex justify-between items-center">
        <div className="flex flex-col md:flex-row gap-5">
          <h1 className="text-xl text-center md:text-3xl font-bold ">
            Flash Deals
          </h1>
          <CountDown />
        </div>
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
        {products?.slice(0, 2).map((product: IProduct, idx: number) => (
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

export default FlashSale;
