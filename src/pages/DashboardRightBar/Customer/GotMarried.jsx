import { toast } from "react-toastify";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const GotMarried = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const divisions = [
    "Dhaka",
    "Chattogram",
    "Rangpur",
    "Barisal",
    "Khulna",
    "Mymensingh",
    "Sylhet",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const selfId = parseInt(form.selfBiodataId.value);
    const partnerTd = parseInt(form.partnerBiodataId.value);
    const image = form.coupleImage.value;
    const rating = parseInt(form.rating.value);
    const details = form.successStory.value;
    const marriageDate = form.marriageDate.value;
    const division = form.division.value;
    const email = user?.email;
    const name = user?.displayName;

    const storyData = {
      selfId,
      partnerTd,
      image,
      rating,
      details,
      email,
      division,
      marriageDate,
      name,
    };
    console.log(storyData);

    try {
      // post
      await axiosSecure.post(`/success-story`, storyData);
      toast.success("Thanks for sharing your story");
    } catch (err) {
      console.log(err);
    } finally {
      form.reset();
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Share Your Success Story
        </h2>

        <div className="flex flex-col md:flex-row gap-8  justify-center items-center">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Self Biodata ID
              </label>
              <input
                type="number"
                name="selfBiodataId"
                placeholder="Enter your biodata ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Partner Biodata ID
              </label>
              <input
                type="number"
                name="partnerBiodataId"
                placeholder="Enter partner's biodata ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Couple Image
              </label>
              <input
                type="url"
                name="coupleImage"
                placeholder="Image link"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Marriage Date
              </label>
              <input
                type="date"
                name="marriageDate"
                placeholder="Date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block font-medium text-gray-700">
                Division
              </label>
              <select
                name="division"
                className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Select</option>
                {divisions.map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Rating
              </label>
              <select
                name="rating"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                name="successStory"
                rows="5"
                placeholder="Describe your feelings for using this website..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GotMarried;
