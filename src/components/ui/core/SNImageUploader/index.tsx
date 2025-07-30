import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../input";
import Image from "next/image";

type TImageUploaderProps = {
  imageFiles: File[] | [];
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
};

const SNImageUploader = ({
  imageFiles,
  setImageFiles,
}: TImageUploaderProps) => {
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);

      event.target.value = "";
    }
  };

  return (
    <div>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-uploader"
      />
      <label
        htmlFor="image-uploader"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        Upload Logo
      </label>
      <div>
        {imagePreview.map((prev, idx) => (
          <Image src={prev} width={500} height={500} key={idx} alt="Image" />
        ))}
      </div>
    </div>
  );
};

export default SNImageUploader;
