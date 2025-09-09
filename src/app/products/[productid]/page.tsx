import { POST, Product } from "@/app/lib/data";
import Link from "next/link";
import React from "react";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productid: number }>;
}) {
  const ID = (await params).productid;

  const res = await fetch(`https://dummyjson.com/products/${ID}`);
  const Products: Product = await res.json();

  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <div className="flex flex-col bg-white/20 rounded-lg p-5 h-[500px] w-[700px]">
        <h1 className="text-center text-xl font-semibold">{Products.title}</h1>
        <div className="flex justify-center mt-1">
          <img src={Products.thumbnail} className="w-[250px] " alt="" />
        </div>
        <p className="text-white/50">{Products.description}</p>
        <div className="flex justify-between mt-3">
          <h1 className="text-xl mt-1 font-bold text-blue-400">
            {Products.stock > 0 ? "Available" : "Out Of Stock"}
          </h1>
          <h1 className="text-semibold">Price: {Products.price}</h1>
        </div>
        <div className="flex justify-between">
          <h1> Ratings: {Products.rating}</h1>
          <Link className="text-yellow-400" href={"/products"}>
            go to Products
          </Link>
        </div>
        <h1>Discounts: {Products.discountPercentage}%</h1>
        <h1 className="text-2xl text-green-400">{Products.brand}</h1>
      </div>
    </div>
  );
}
