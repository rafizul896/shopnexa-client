import AllProducts from "@/components/modules/products";
import CommonBanner from "@/components/modules/products/banner";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { getAllCategories } from "@/services/Category";
import { ICategory } from "@/types";

const AllProductsPage = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <div className="container mx-auto">
      <CommonBanner title="All Products" path="Home - Products" />

      <div className="md:flex justify-between items-center my-4">
        <h1 className="text-xl text-center md:text-3xl font-bold ">Category</h1>
        <div className="flex gap-5">
          <Button
            size={"lg"}
            className="rounded-full hidden md:block"
            variant="outline"
          >
            Previous
          </Button>
          <Button size={"lg"} className="rounded-full hidden md:block">
            Next
          </Button>
        </div>
      </div>
      
      <div className="my-5 grid gap-5 grid-cols-2 md:grid-col-4 lg:grid-cols-6">
        {categories.map((category: ICategory) => (
          <CategoryCard category={category} key={category?._id} />
        ))}
      </div>

      {/* filer and all products */}
      <AllProducts />
    </div>
  );
};

export default AllProductsPage;
