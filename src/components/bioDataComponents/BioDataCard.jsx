import { Link } from "react-router-dom";

const BioDataCard = ({ bioData }) => {
  const { _id, biodataType, name, photoURL, age, occupation, bioDataId } =
    bioData || {};
  return (
    <div>
      <div className=" rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8">
        <div className="sm:flex sm:justify-between items-center sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl uppercase">
              {name}
            </h3>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt=""
              src={photoURL}
              className="size-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col space-y-1">
          <p className="text-base text-gray-700">
            Biodata Id: <span className="font-semibold">{bioDataId}</span>
          </p>
          <p className="text-base text-gray-700">
            Biodata Type: <span className="font-semibold">{biodataType}</span>
          </p>
          <p className="text-base text-gray-700">
            Occupation: <span className="font-semibold">{occupation}</span>
          </p>
          <p className="text-base text-gray-700">
            Age: <span className="font-semibold">{age}</span>
          </p>
        </div>
        <div className="mt-3">
          <Link to={`/bioDataDetails/${_id}`}>
            <button className="bg-blue-700 px-4 py-2 hover:bg-gray-900 text-white rounded-md">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BioDataCard;
