import BackButton from "@/app/components/BackButton";
import { POST, Product, Products } from "@/app/lib/data";
import Link from "next/link";

export default async function ProductsInterception({
  params,
}: {
  params: Promise<{ productid: string }>;
}) {
  const ID = (await params).productid;

  const res = await fetch(`https://dummyjson.com/products/${ID}`);
  const Products: Product = await res.json();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 ">
      <div className="h-[250px] w-[250px] rounded-lg shadow-md bg-black/60 relative">
        <div className="flex justify-end p-2">
          <BackButton />
        </div>
        <div className="flex flex-col items-center">
          <img className="h-[150px]" src={Products.thumbnail} alt="" />
          <h1>{Products.title}</h1>
          <div className=" flex gap-5">
            <h1 className="text-green-600">
              {Products.stock > 0 ? "Available" : "Out of Stock"}
            </h1>
            <h1>Discount:{Products.discountPercentage}%</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
