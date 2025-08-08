export const getAllProduct = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?page=${page}`,
      {
        method: "GET",
        next: {
          tags: ["PRODUCT"],
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (err: any) {
    return Error(err);
  }
};
