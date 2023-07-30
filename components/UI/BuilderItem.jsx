import Link from "next/link";
import React from "react";

const BuilderItem = ({ category }) => {
  return (
    <>
      <div className="flex justify-between my-4 items-center">
        <div className="flex gap-4 items-center">
          <div className="w-[100px] h-[100px]  ">
            <img
              className="object-cover w-full h-full rounded-md"
              src={category.img}
              alt=""
            />
          </div>
          <span>{category.title}</span>
        </div>
        <div>
          <Link href={`/builder/${category.title}`}>
            <button className="px-2 py-1 bg-amber-500 rounded-bl-[15%] text-white rounded-sm ">
              Choose
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BuilderItem;
