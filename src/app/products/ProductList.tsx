"use client";

import React, { useState } from "react";
import { POST, Products } from "../lib/data";
import Posts from "../components/posts";
import Link from "next/link";

export default function ProductList({ products }: { products: Products }) {
  const [Products, setProducts] = useState<POST[]>(products.products);
  const [pages, setPages] = useState(1);
  const MaxPage = Math.ceil(Products.length / 6);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        {pages > 1 && (
          <button
            onClick={() => setPages(pages - 1)}
            className={`text-xl m-1 px-2 rounded text-center text-black bg-yellow-600 `}
          >
            ◀
          </button>
        )}
        {[...Array(Math.ceil(Products?.length / 6))].map((_, index) => (
          <button
            key={index}
            onClick={() => setPages(index + 1)}
            className={`text-xl cursor-pointer rounded text-black m-1 px-3 ${
              index === pages - 1
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-yellow-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        {pages !== MaxPage && (
          <button
            onClick={() => setPages(pages + 1)}
            className="text-xl m-1 px-2 rounded text-center text-black bg-yellow-600"
          >
            ▶
          </button>
        )}
      </div>
      <ul className="h-screen w-[60%] flex flex-wrap">
        {Products?.slice(pages * 7 - 7, pages * 7).map((items: POST) => {
          return (
            <Link
              key={items.id}
              href={`/products/${items.id}`}
              prefetch={false}
            >
              <div className="flex flex-wrap ">
                <Posts items={items} />
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
