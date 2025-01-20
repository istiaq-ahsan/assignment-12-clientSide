import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import LoadingSpinner from "../../shared/LoadingSpinner";

const Profile = () => {
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["userProfile", user],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/profile/${user?.email}`);
      return data;
    },
  });

  const { image, email, name, role, status } = profileData || {};
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative  w-full bg-white border border-gray-300 rounded-lg shadow-md ">
        {/* Image Section */}
        <div className="absolute top-[-30%] left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white z-10">
          <img
            src={image}
            alt="profileImage"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Profile Info */}
        <div className="pt-20 pb-6 pl-6 pr-6 text-left z-0">
          <h2 className="text-2xl font-semibold text-gray-800">Name: {name}</h2>
          <p className="text-gray-600 mt-2">Email: {email}</p>
          <p className="text-gray-600 mt-2">Role: {role}</p>
          <p className="text-gray-600 mt-2">Status: {status}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
