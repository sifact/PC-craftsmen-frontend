import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedProducts from "@/components/UI/FeaturedProducts";

export default function Home({ products }) {
  return (
    <>
      <h1 className="text-4xl text-center my-32">Banner</h1>

      <FeaturedProducts products={products} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/product");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
