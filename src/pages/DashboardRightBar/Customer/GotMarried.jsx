const GotMarried = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const selfId = form.selfBiodataId.value;
    const partnerTd = form.partnerBiodataId.value;
    const coupleImage = form.coupleImage.value;
    const rating = form.rating.value;
    const details = form.successStory.value;

    console.log(selfId, partnerTd, coupleImage, rating, details);
    form.reset();
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

        <div className="flex gap-8  justify-center items-center">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Self Biodata ID
              </label>
              <input
                type="text"
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
                type="text"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 space-y-6">
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
                placeholder="Describe your story..."
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
