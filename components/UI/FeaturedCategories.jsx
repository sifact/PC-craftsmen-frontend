import Link from "next/link";
import Header from "./Header";

const FeaturedCategories = ({ categories }) => {
  return (
    <div className="container mx-auto my-32">
      <Header
        title="Featured Categories"
        subtitle="Explore our curated selection of top categories"
      />
      <div
        className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4
      [&>div:not(:first-child)]:mt-5 
        lg:[&>div:not(:first-child)]:mt-8 
        
        "
      >
        {categories.map((category, idx) => (
          <FeatureCategory key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;

const FeatureCategory = ({ category }) => {
  const { title, img } = category;

  return (
    <Link href={`/categories/${title}`}>
      <div className="relative bg-gradient-to-tr from-gray-900 to-green-50">
        <img className="rounded-sm  mix-blend-overlay" src={img} alt="" />
        {/* <h1>{name}</h1> */}
        <div className="absolute inset-0 flex items-end p-8 ">
          <h2 className="text-white text-4xl transition font-bold cursor-pointer  hover:text-amber-500">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};
