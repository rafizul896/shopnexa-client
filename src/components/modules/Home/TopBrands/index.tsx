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
          <div className="bg-white p-3 rounded-xl" key={idx}>
            <div className="bg-gray-100 p-2 rounded-xl h-20 w-full">
              <Image
                src={brand?.logo}
                width={50}
                height={50}
                alt="category icon"
                className="mx-auto h-full w-full object-contain"
              />
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
