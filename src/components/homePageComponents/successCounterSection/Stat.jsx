import { FaFemale, FaMale, FaUsers } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
const Stat = ({ totalBioData, totalMaleBio, totalFemaleBio, couplePaired }) => {
  return (
    <div className="mx-auto">
      <div className="text-green-800 mt-6 grid grid-cols-1 gap-4 divide-y divide-gray-900 border-t-2 border-b-2 border-gray-700 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        <div className="relative px-4 py-8 text-center flex justify-center items-center gap-4">
          <div className="border border-gray-500 p-1 rounded-lg">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold  md:text-4xl">
              {totalBioData}
            </h1>
            <p className="order-last text-base font-medium mt-2">
              Total Biodata
            </p>
          </div>
        </div>
        <div className="relative px-4 py-8 text-center flex justify-center items-center gap-4">
          <div className="border border-gray-500 p-1 rounded-lg">
            <FaMale className="text-3xl"></FaMale>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold  md:text-4xl">
              {totalMaleBio}
            </h1>
            <p className="order-last text-base font-medium mt-2">Mens</p>
          </div>
        </div>
        <div className="relative px-4 py-8 text-center flex justify-center items-center gap-4">
          <div className="border border-gray-500 p-1 rounded-lg">
            <FaFemale className="text-3xl"></FaFemale>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold  md:text-4xl">
              {totalFemaleBio}
            </h1>
            <p className="order-last text-base font-medium mt-2">Womens</p>
          </div>
        </div>
        <div className="relative px-4 py-8 text-center flex justify-center items-center gap-4">
          <div className="border border-gray-500 p-1 rounded-lg">
            <IoMdHeartEmpty className="text-3xl"></IoMdHeartEmpty>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold  md:text-4xl">
              {couplePaired}
            </h1>
            <p className="order-last text-base font-medium mt-2">
              Couple Pared
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
