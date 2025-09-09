export interface POST {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  thumbnail: string;
}

export interface Products {
  products: POST[];
}

export interface Product extends POST {
  rating: number;
  stock: number;
  discountPercentage: number;
}

export async function posts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}
