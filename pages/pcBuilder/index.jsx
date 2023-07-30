import RootLayout from "@/components/Layouts/RootLayout";
import BuilderItem from "@/components/UI/BuilderItem";
import Header from "@/components/UI/Header";
import { addToCart } from "@/redux/features/cart/cartSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PcBuilder = ({ categories }) => {
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto flex justify-center">
      <div className=" md:w-[85%] mb-32 mt-20 p-8 shadow-sm ">
        <Header
          title="Build Your PC"
          subtitle="Explore our curated selection of top categories"
        />

        <h1 className="text-right font-semibold text-2xl mb-8 text-amber-500">
          Total Price: Tk {total}
        </h1>
        {categories.map((category) => (
          <BuilderItem
            key={category._id}
            category={category}
            product={products.find(
              (product) => product.category === category.title
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-craftsmen-backend.vercel.app/api/category"
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      categories: data,
    },
    revalidate: 10,
  };
};
