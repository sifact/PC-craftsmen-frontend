import RootLayout from "@/components/Layouts/RootLayout";
import Header from "@/components/UI/Header";
import Reviews from "@/components/UI/Reviews";

const ProductDetails = ({ product }) => {
  return (
    <div className="container mx-auto my-12">
      <Header
        title="Product Details"
        subtitle="Explore our curated selection of top categories"
      />
      <div className="my-32 flex gap-12 justify-center items-center ">
        <div className="sm:w-[40%] h-[300px]">
          <img
            className="object-cover mx-auto w-full rounded-md h-full"
            src={product?.img}
            alt=""
          />
        </div>
        <div className="sm:w-[40%] flex flex-col gap-4 p-8 justify-center ">
          <h1 className="text-xl font-bold">{product?.title}</h1>
          <p className="text-lg">{product?.category}</p>
          <p className="text-sm opacity-60">{product?.description}</p>
          <span className="text-lg font-bold">Tk {product?.price}</span>
          <button
            className="bg-amber-500 py-2 px-3 rounded-full"
            style={{ width: "fit-content" }}
          >
            {product.status ? "In Stock" : "Out of stock"}
          </button>
          <ul className=" list-inside mt-2">
            {product.keyFeatures.map((feature) => {
              return (
                <li className="relative pl-6 pb-2">
                  <span className="absolute left-0 top-1 w-3 h-3 bg-amber-500 transform rotate-45"></span>
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Reviews />

      {/* <Reviews id={id!} /> */}
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-craftsmen-backend.vercel.app/api/product"
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://pc-craftsmen-backend.vercel.app/api/product/${params.productId}`
  );

  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
