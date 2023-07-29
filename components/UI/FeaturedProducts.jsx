import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./Header";

const FeaturedProducts = ({ products }) => {
  console.log(products);
  return (
    <div>
      <Header
        title="Featured Products"
        subtitle="Discover our top-rated products crafted with care"
      />
      <div className="mb-32 grid lg:grid-cols-3 md:grid-cols-2 gap-12 container mx-auto">
        {products ? (
          products.map(
            (product, idx) =>
              idx < 6 && <FeaturedProduct key={product._id} product={product} />
          )
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;

const FeaturedProduct = ({ product }) => {
  const { _id, title, img, category, price, status } = product;
  return (
    <Link href={`{/product/${news?.id}}`}>
      <div className="shadow-md bg-gray-100 h-auto rounded-md p-4">
        <div className="h-[300px]">
          <img
            className="rounded-lg object-cover w-full h-full"
            src={img ? img : peperoni}
            alt="pizza"
          />
        </div>
        <div>
          <div className="text-center">
            <h2 className="text-lg font-bold py-2 ">{title}</h2>
            <span className="bg-gray-200 rounded-full text-sm px-4">
              {category}
            </span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold">Tk {price}</span>
            <button className="bg-amber-500 py-2 px-3 rounded-full">
              {status ? "In Stock" : "Out of stock"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
