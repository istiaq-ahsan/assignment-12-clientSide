import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70 -mt-20">
        <div className="text-center flex flex-col gap-3 text-white">
          <h3 className="text-2xl font-bold">#1 MATRIMONY</h3>
          <h1 className="text-5xl font-bold mx-auto flex flex-col">
            <span>Find your</span>
            <span className="">
              <span className="text-red-600">Right Match </span> here
            </span>
          </h1>
          <p className="text-xl font-bold mt-4">
            Most trusted Matrimony Brand in the World.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
