import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reviews = [
  {
    id: 1,
    name: "Moshiur Sifat",
    review:
      "The computer parts I purchased were top-notch quality, delivering excellent performance and seamless compatibility. The fast delivery and well-packaged items made the shopping experience a breeze.",
    rating: 4,
  },
  {
    id: 2,
    name: "Sakib Khan",
    review:
      "Unfortunately, the computer parts I received had minor compatibility issues, causing some frustration during setup. The lack of clear instructions and slow customer support added to the inconvenience.",
    rating: 2,
  },
  {
    id: 1,
    name: "Rasel Bro",
    review:
      "The computer parts I purchased were top-notch quality, delivering excellent performance and seamless compatibility. The fast delivery and well-packaged items made the shopping experience a breeze.",
    rating: 4,
  },
];
const Reviews = () => {
  return (
    <div>
      <Carousel showThumbs={false} showStatus={false}>
        {reviews ? (
          reviews.map((review) => <Review key={review.id} review={review} />)
        ) : (
          <>Loading..</>
        )}
      </Carousel>
    </div>
  );
};

export default Reviews;

const Review = ({ review }) => {
  return (
    <div className="flex container mx-auto justify-center mb-12">
      <div className="w-[40%] space-y-6 flex flex-col  items-start justify-center">
        <p className="-mr-16 z-50 text-start">{review.review}</p>
        <div className="pt-12">
          <div className="flex gap-2 mb-4">
            {review.rating && (
              <>
                {Array(Math.round(review.rating))
                  .fill()
                  .map((item, i) => (
                    <img
                      className="w-[20px] h-[25px]"
                      key={i}
                      src="/star.png"
                      alt=""
                    />
                  ))}

                {/* <span>{Math.round(data.totalStars / data.starNumber)}</span> */}
              </>
            )}
          </div>
          <div className="text-start">{review.name}</div>
        </div>
      </div>

      <div className="w-[30%]">
        <img
          className="object-cover h-full w-full rounded-[50%]"
          src="/user.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
