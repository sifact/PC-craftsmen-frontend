import Link from "next/link";
import { useState } from "react";

const Category = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    { name: "cpu", path: "/cpu" },
    { name: "gpu", path: "/gpu" },
    { name: "monitor", path: "monitor" },
    { name: "motherboard", path: "/motherboard" },
    { name: "mouse", path: "/mouse" },
    { name: "ram", path: "/ram" },
    { name: "storageDevice", path: "/storageDevice" },
  ];
  return (
    <div className="flex  items-center ">
      <div className="relative">
        <div
          className="cursor-pointer bg-white text-black text-small flex items-center justify-between gap-2 "
          onClick={() => setOpen(!open)}
        >
          <span>Categories</span>
          <img src="/down.png" width={15} height={15} alt="" />
        </div>
        {open && (
          <div className=" flex flex-col gap-4 bg-white p-4 rounded-lg absolute top-8 shadow-lg text-black z-50 ">
            {categories.map((category, idx) => {
              return (
                <>
                  <Link
                    href={`/categories/${category.path}`}
                    className="cursor-pointer"
                    onClick={() => {
                      setOpen(!open);
                    }}
                    key={idx}
                  >
                    {category.name}
                  </Link>
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
