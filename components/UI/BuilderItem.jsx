import { removeOne } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const BuilderItem = ({ category, product }) => {
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between my-4 items-center">
        <div className="flex justify-between w-full items-center mr-8">
          <div className="flex gap-4 items-center">
            <div className="w-[100px] h-[100px]  ">
              <img
                className="object-cover w-full h-full rounded-md"
                src={product ? product?.img : category?.img}
                alt=""
              />
            </div>
            <span className="text-xl font-semibold">
              {product ? product?.title : category?.title}
            </span>
          </div>

          {product && (
            <span className="font-bold text-xl">Tk {product?.price}</span>
          )}
        </div>

        <>
          {product && (
            <button
              className="px-6 py-3 font-bold bg-red-500 rounded-bl-[15%] text-white text-xl rounded-sm "
              onClick={() => dispatch(removeOne(product))}
            >
              Remove
            </button>
          )}
          <Link href={`/builder/${category?.title}`}>
            {!product && (
              <button className="px-6 py-3 font-bold bg-amber-500 rounded-bl-[15%] text-white text-xl rounded-sm ">
                Choose
              </button>
            )}
          </Link>
        </>
      </div>
      <hr />
    </>
  );
};

export default BuilderItem;
