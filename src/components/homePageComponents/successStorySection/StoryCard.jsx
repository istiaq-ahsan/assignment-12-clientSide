import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const StoryCard = ({ story }) => {
  const { name, details, division, image, rating } = story || {};
  return (
    <div
      className="w-full flex flex-col gap-5 max-w-md px-8 py-4 
    mt-16 bg-white rounded-lg shadow-lg h-[280px]
    border border-gray-300 "
    >
      <div className="-mt-16 flex justify-start">
        <img
          className="object-cover w-24 h-24 border-2 "
          alt="Testimonial avatar"
          src={image}
        />
      </div>
      <Rating style={{ maxWidth: 100 }} value={rating} />
      <div className="space-y-2">
        <p className="text-sm text-gray-600 ">{details}</p>
        <p className=" text-xl font-semibold text-gray-800 ">{name}</p>
        <h2 className="font-semibold text-gray-800 ">{division}</h2>
      </div>
    </div>
  );
};

export default StoryCard;
