import { Button } from "@/components/ui/button";
import { getAllBrands } from "@/services/Brand";
import { IBrand } from "@/types";
import Image from "next/image";
import Link from "next/link";

const TopBrands = async () => {
  const { data: brands } = await getAllBrands();

  return (
    <div className="my-10 container mx-auto">
      <div className="md:flex justify-between items-center">
        <h1 className="text-xl text-center md:text-3xl font-bold ">
          Top Brand
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10 ">
        {brands?.slice(0, 4)?.map((brand: IBrand, idx: number) => (
          <div
            key={brand._id}
            className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <div className="h-20 w-full mb-3 flex items-center justify-center">
              <Image
                src={brand?.logo}
                width={50}
                height={50}
                alt="category icon"
                className="max-h-14 max-w-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Brand Name */}
            <div className="text-center">
              <h3 className="text-base font-medium text-gray-800 truncate group-hover:text-primary transition-colors duration-300">
                {brand?.name}
              </h3>
            </div>
          </div>
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

export default TopBrands;
