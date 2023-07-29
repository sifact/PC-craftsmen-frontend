import React from "react";

const FeaturedProducts = ({ products }) => {
  console.log(products);
  return (
    <div>
      {/* <div className="my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 container mx-auto">
        {data ? (
          data.map((book) => <Book key={book._id} book={book} />)
        ) : (
          <>Loading...</>
        )}
      </div> */}
    </div>
  );
};

export default FeaturedProducts;

// const FeaturedProduct = ({ book }) => {
//   return (
//     <div className="relative space-y-6">
//       <div className="relative h-[300px]  bg-gradient-to-tr from-gray-900 to-green-50 rounded-lg">
//         <img
//           className="object-cover w-full h-full rounded-lg mix-blend-overlay"
//           src={img}
//           alt=""
//         />
//       </div>

//       <Link to={`/bookDetails/${_id}`}>
//         <div className="rounded-lg space-y-3 ">
//           <div className="flex justify-between items-center">
//             <h1 className="text-xl font-semibold">{title}</h1>
//             <p className="opacity-60 text-xl">{genre}</p>
//           </div>
//           <div className="opacity-60 font-semibold flex justify-between">
//             <div>
//               <p>{author}</p>
//               <p>{publishedDate}</p>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };
