"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const TablePagination = ({ totalPage }: { totalPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const pathName = usePathname();

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    router.push(`${pathName}?page=${currentPage + 1}`);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    router.push(`${pathName}?page=${currentPage - 1}`);
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
            router.push(`${pathName}?page=${idx + 1}`);
          }}
          key={idx}
          variant={currentPage === idx + 1 ? "default" : "outline"}
          size={"sm"}
          className="w-8 h-8 rounded-full flex justify-center items-center"
        >
          {idx + 1}
        </Button>
      ))}
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
