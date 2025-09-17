"use client";
import { Button } from "@/components/ui/button";
import { addProductInStore } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IProduct } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [imageIdx, setImgeIdx] = useState(0);
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: IProduct) => {
    dispatch(addProductInStore(product));
    toast.success('Product added to Cart')
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl">
      <div className="my-5 rounded-md">
        <Image
          src={product?.imageUrls[imageIdx]}
          width={500}
          height={500}
          alt={`Product Image`}
          className="rounded-md w-full object-cover"
        />
        <div className="grid grid-cols-3 gap-5 mt-3 rounded-sm">
          {product?.imageUrls?.map((image: string, idx) => (
            <Image
              onClick={() => setImgeIdx(idx)}
              key={product._id}
              src={image}
              width={500}
              height={500}
              alt={`Product Image`}
              className="rounded-sm w-full object-cover"
            />
          ))}
        </div>
      </div>

      <div className="bg-white/70 my-5 p-5 rounded-md">
        <h2 className="font-bold text-xl mb-4">{product?.name}</h2>
        <p className="text-justify text-gray-500 font-light text-sm">
          {product?.description}
        </p>
        <div className="flex flex-wrap gap-3 items-center justify-between my-5 text-gray-500 text-xs">
          <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center justify-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            {product?.averageRating} Ratings
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Stock: {product?.stock}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Brand: {product?.brand?.name}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Category: {product?.category?.name}
          </p>
        </div>
        <hr />
        <p className="my-2 font-bold">
          Price:{" "}
          {product?.offerPrice ? (
            <>
              <span className="font-semibold mr-2 text-orange-400">
                $ {product?.offerPrice}
              </span>
              <del className="font-semibold text-xs">$ {product?.price}</del>
            </>
          ) : (
            <span className="font-semibold">$ {product?.price}</span>
          )}
        </p>
        <hr />

        <Button
          onClick={() => handleAddProduct(product)}
          variant="outline"
          className="w-full my-5"
        >
          Add To Cart
        </Button>
        <Button className="w-full">Buy Now</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
