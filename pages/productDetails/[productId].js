import React from "react";

const productDetailsPage = () => {
  return <div>productDetailsPage</div>;
};

export default productDetailsPage;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/product");
  const products = await res.json();

  const paths = products.map((news) => ({
    params: { newsId: news.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      news: data,
    },
  };
};
