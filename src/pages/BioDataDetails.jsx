import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import LoadingSpinner from "../shared/LoadingSpinner";
import UseAuth from "../hooks/UseAuth";
import { toast } from "react-toastify";
import UseAxiosSecure from "../hooks/UseAxiosSecure";

const BioDataDetails = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  console.log(id);
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const { data = {}, isLoading } = useQuery({
    queryKey: ["combinedData", id, user?.email],
    queryFn: async () => {
      const [userDataResponse, bioDataResponse] = await Promise.all([
        axiosSecure.get(`/userInfo/${user?.email}`),
        axiosSecure.get(`/bioDataDetails/${id}`),
      ]);

      return {
        userData: userDataResponse.data,
        oneBioData: bioDataResponse.data,
      };
    },
  });

  if (isLoading) return <LoadingSpinner />;

  const { userData, oneBioData } = data;

  console.log(userData, oneBioData);
  console.log(userData);

  const {
    _id,
    bioDataId,
    biodataType,
    name,
    photoURL,
    fatherName,
    motherName,
    dateOfBirth,
    height,
    weight,
    age,
    occupation,
    race,
    presentDivision,
    permanentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    email,
    mobileNumber,
  } = oneBioData || {};

  const selectedBioData = {
    bioDataId,
    name,
    occupation,
    permanentDivision,
    customerEmail: user?.email,
  };

  const handleAddFavourite = async () => {
    try {
      await axiosSecure.post(`/favouriteBio`, selectedBioData);
      toast.success("Successfully add to favourite");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-10 px-4 md:px-10 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Photo Section */}
        <div className="md:w-[40%] ">
          <img
            className="w-80 h-80 object-cover rounded-lg shadow-md mx-auto"
            src={photoURL}
            alt="Profile"
          />
          <div className="mt-10 text-center flex gap-3 justify-center">
            {userData && userData?.member !== "premium" ? (
              <Link to={`/checkOut/${_id}`}>
                <button
                  className="px-2 py-1 md:px-4 md:py-2 rounded-md bg-blue-700 text-white
               hover:bg-gray-900"
                >
                  Request Contact Information
                </button>
              </Link>
            ) : (
              <h2 className="font-medium">Contact: {mobileNumber}</h2>
            )}
            <Link>
              <button
                onClick={handleAddFavourite}
                className="px-2 py-1 md:px-4 md:py-2 rounded-md bg-orange-500 text-white
               hover:bg-gray-800"
              >
                Add to Favourite
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-[60%] flex flex-col gap-8 text-gray-800">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-bold text-xl text-center text-gray-900 mb-4 underline">
              Personal Information
            </h3>
            <div className="text-base grid grid-cols-2 gap-y-3">
              <h2>
                <span className="font-medium">Name:</span> {name}
              </h2>
              <h2>
                <span className="font-medium">Gender:</span> {biodataType}
              </h2>
              <h2>
                <span className="font-medium">Date of Birth:</span>{" "}
                {dateOfBirth}
              </h2>
              <h2>
                <span className="font-medium">Age:</span> {age}
              </h2>
              <h2>
                <span className="font-medium">Occupation:</span> {occupation}
              </h2>
              <h2>
                <span className="font-medium">Skin Tone:</span> {race}
              </h2>
              <h2>
                <span className="font-medium">Height:</span> {height}
              </h2>
              <h2>
                <span className="font-medium">Weight:</span> {weight}
              </h2>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-bold text-xl text-center text-gray-900 mb-4 underline">
              Family Information
            </h3>
            <div className="text-base space-y-3">
              <h2>
                <span className="font-medium">Father Name:</span> {fatherName}
              </h2>
              <h2>
                <span className="font-medium">Mother Name:</span> {motherName}
              </h2>
              <h2>
                <span className="font-medium">Present Address:</span>{" "}
                {presentDivision}
              </h2>
              <h2>
                <span className="font-medium">Permanent Address:</span>{" "}
                {permanentDivision}
              </h2>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-bold text-xl text-center text-gray-900 mb-4 underline">
              Preference
            </h3>
            <div className="text-base space-y-3">
              <h2>
                <span className="font-medium">Partner Age:</span>{" "}
                {expectedPartnerAge}
              </h2>
              <h2>
                <span className="font-medium">Partner Height:</span>{" "}
                {expectedPartnerHeight}
              </h2>
              <h2>
                <span className="font-medium">Partner Weight:</span>{" "}
                {expectedPartnerWeight}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioDataDetails;
