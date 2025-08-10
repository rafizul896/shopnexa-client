import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { getAllCategories } from "@/services/Category";
import { ICategory } from "@/types";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const { data: categories } = await getAllCategories();
  return (
    <div className="container mx-auto ">
      <div className="md:flex justify-between items-center">
        <h1 className="text-xl text-center md:text-3xl font-bold ">Category</h1>
        <Link href={"/products"}>
          <Button
            size={"lg"}
            className="rounded-full hidden md:block"
            variant="outline"
          >
            View All
          </Button>
        </Link>
      </div>

      <div className="my-5 grid gap-5 grid-cols-2 md:grid-col-4 lg:grid-cols-6">
        {Array(12).fill(categories[0]).map((category: ICategory) => (
          <CategoryCard category={category} key={category?._id} />
        ))}
      </div>

       <Link href={"/products"} className="flex justify-center">
          <Button
            size={"lg"}
            className="rounded-full  md:hidden"
            variant="outline"
          >
            View All
          </Button>
        </Link>
    </div>
  );
};

export default Category;
