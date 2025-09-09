import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen w-screen p-5">
      <h1 className="text-3xl font-bold">Server Side rendering</h1>
      <main className="flex  mt-10 flex-col items-center">
        <h1 className="text-2xl font-semibold">Click To see Products</h1>
        <Link
          href={"/products"}
          className="text-white text-xl w-25 text-center rounded mt-2 bg-yellow-600"
        >
          Click Here
        </Link>
      </main>
    </div>
  );
}
