import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";

export default function Home({ products, categories }) {
  return (
    <>
      <h1 className="text-4xl text-center my-32">Banner</h1>

      <FeaturedProducts products={products} />
      <FeaturedCategories categories={categories} />
    </>
  );
}

export const getStaticPropsProducts = async () => {
  const res = await fetch("http://localhost:5000/api/product");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};

export const getStaticPropsCategories = async () => {
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

export async function getStaticProps() {
 
  const productsData = await getStaticPropsProducts();

 
  const categoriesData = await getStaticPropsCategories();

  return {
    props: {
      products: productsData.props.products,
      categories: categoriesData.props.categories,
    },
    revalidate: 10,
  };
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
