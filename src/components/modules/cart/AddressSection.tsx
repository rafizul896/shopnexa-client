"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cities } from "@/constants/cities";
import { updateCity, updateShippingAddress } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function AddressSection() {
  const dispatch = useAppDispatch();

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Address</h1>
        <p className="text-gray-500">Enter your address.</p>
        <div className="mt-5 w-full">
          <Select onValueChange={(e) => dispatch(updateCity(e))}>
            <SelectTrigger className="mb-5 w-full">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city: string) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea
            onChange={(e) => dispatch(updateShippingAddress(e.target.value))}
            rows={5}
          />
        </div>
      </div>
    </div>
  );
}
