import RootLayout from "@/components/Layouts/RootLayout";
import BuilderItem from "@/components/UI/BuilderItem";
import Header from "@/components/UI/Header";
import React from "react";

const PcBuilder = ({ categories }) => {
  return (
    <div className="container mx-auto flex justify-center">
      <div className=" md:w-[70%] mb-32 mt-20 p-8 shadow-sm ">
        <Header
          title="Build Your PC"
          subtitle="Explore our curated selection of top categories"
        />
        {categories.map((category) => (
          <BuilderItem category={category} />
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
  const res = await fetch("http://localhost:5000/api/category");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      categories: data,
    },
    revalidate: 10,
  };
};
