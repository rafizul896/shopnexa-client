import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  decrementOrderQuantity,
  ICartProduct,
  incrementOrderQuantity,
  removeProductFormCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

export default function CartProductCard({
  product,
}: {
  product: ICartProduct;
}) {
  const dispatch = useAppDispatch();

  const handleIncrement = (id: string) => {
    dispatch(incrementOrderQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementOrderQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeProductFormCart(id));
  };

  return (
    <div className="bg-white rounded-lg flex flex-col md:flex-row p-3 md:p-5 gap-5">
      <div className="h-full md:w-32 rounded-md overflow-hidden">
        <Image
          src={product?.imageUrls?.[0]}
          height={200}
          width={200}
          alt="product"
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-semibold">{product?.name}</h1>
        <div className="flex gap-5 my-2">
          <p>
            <span className="text-gray-500">Color:</span>{" "}
            <span className="font-semibold">Black</span>
          </p>
          <p>
            <span className="text-gray-500">Stock Availability:</span>{" "}
            <span className="font-semibold">{product?.stock}</span>
          </p>
        </div>
        <hr className="my-1" />
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <h2>
            Price:
            {product.offerPrice
              ? currencyFormatter(product.offerPrice)
              : currencyFormatter(product.price)}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 font-semibold">Quantity</p>
            <Button
              disabled={product.orderQuantity === 1}
              onClick={() => handleDecrement(product?._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Minus />
            </Button>
            <p className="font-semibold text-xl p-2">
              {product?.orderQuantity}
            </p>
            <Button
              disabled={product.orderQuantity === product.stock}
              onClick={() => handleIncrement(product._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Plus />
            </Button>
            <Button
              onClick={() => handleRemove(product?._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
