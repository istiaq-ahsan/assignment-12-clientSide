import { Link } from "react-router-dom";

const BioDataCard = ({ bioData }) => {
  const { _id, biodataType, name, photoURL, age, occupation, bioDataId } =
    bioData || {};
  return (
    <Link
      to={`/bioDataDetails/${_id}`}
      className="hover:scale-[1.03] transition-all"
    >
      <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src={photoURL}
          />
        </div>

        <h2 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white md:mt-0 overflow-hidden text-ellipsis whitespace-nowrap">
          Name: {name}
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          Biodata Id: {bioDataId}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          Biodata Type: {biodataType}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          Age: {age}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          Occupation: {occupation}
        </p>

        <div className="flex justify-end mt-4"></div>
      </div>
    </Link>
  );
};

export default BioDataCard;
