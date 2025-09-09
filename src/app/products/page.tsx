import { posts } from "../lib/data";
import ProductList from "./ProductList";

export default async function ProductsPage() {
  const products = await posts();

  return (
    <div>
      <h1 className="text-center text-3xl m-5 font-bold">Product List</h1>
      <ProductList products={products} />
    </div>
  );
}
