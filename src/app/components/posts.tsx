import { POST } from "../lib/data";

const Posts = ({ items }: { items: POST }) => {
  return (
    <div className="flex flex-col h-[220px] w-[240px] items-center rounded-lg bg-white/10 m-2">
      <h1>{items.id}</h1>
      <img className="w-40 m-1 " src={items.thumbnail} alt={items.title} />
      <div className="flex">
        <h1 className="truncate w-[100px] mx-3 ">{items.title}</h1>
        <h1 className="font-semibold">RS:{items.price}</h1>
      </div>
    </div>
  );
};

export default Posts;
