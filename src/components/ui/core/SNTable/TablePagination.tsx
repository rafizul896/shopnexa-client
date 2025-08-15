"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TablePagination = ({ totalPage }: { totalPage: number }) => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const pathName = usePathname();
  const limit = searchParams.get("limit");
  const page = searchParams.get("page");

  useEffect(() => {
    setCurrentPage(Number(page));
  }, [page]);

  console.log(currentPage);
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    router.push(`${pathName}?page=${currentPage + 1}&limit=${limit}`);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    router.push(`${pathName}?page=${currentPage - 1}&limit=${limit}`);
  };

  return (
    <div className="flex gap-3 justify-center items-center mt-5">
      <Button
        disabled={currentPage === 1}
        onClick={handlePrev}
        variant={"outline"}
        size={"sm"}
        className="w-8 h-8 rounded-full flex justify-center items-center"
      >
        <ArrowLeft />
      </Button>
      {[...Array(totalPage)].map((_, idx) => (
        <Button
          onClick={() => {
            setCurrentPage(idx + 1);
            router.push(`${pathName}?page=${idx + 1}&limit=${limit}`);
          }}
          key={idx}
          variant={currentPage === idx + 1 ? "default" : "outline"}
          size={"sm"}
          className="w-8 h-8 rounded-full flex justify-center items-center"
        >
          {idx + 1}
        </Button>
      ))}

      <Select
        onValueChange={(e) => {
          setCurrentPage(1);
          router.push(`${pathName}?page=1&limit=${e}`);
        }}
        defaultValue="10"
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="limit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>limit</SelectLabel>
            <SelectItem defaultChecked value="10">
              10
            </SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button
        disabled={currentPage === totalPage}
        onClick={handleNext}
        variant={"outline"}
        size={"sm"}
        className="w-8 h-8 rounded-full flex justify-center items-center"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TablePagination;
