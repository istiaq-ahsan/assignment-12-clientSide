const BiodataForm = ({ handleSubmit, user, bio }) => {
  const {
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
  } = bio || {};

  const divisions = [
    "Dhaka",
    "Chattogram",
    "Rangpur",
    "Barisal",
    "Khulna",
    "Mymensingh",
    "Sylhet",
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      {bio?.name ? (
        <h1 className="text-4xl text-center font-bold my-5">Update Biodata</h1>
      ) : (
        <h1 className="text-4xl text-center font-bold my-5">Fill Biodata</h1>
      )}

      <form
        className="flex flex-col md:grid  gap-6 bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl md:grid-cols-2"
        onSubmit={handleSubmit}
      >
        {/* Biodata Type */}
        <div>
          <label className=" font-medium text-gray-700">Biodata Type</label>
          <select
            name="biodataType"
            defaultValue={biodataType}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        {/*Fathers Name */}
        <div>
          <label className="block font-medium text-gray-700">Father Name</label>
          <input
            type="text"
            name="fatherName"
            defaultValue={fatherName}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        {/*Mothers Name */}
        <div>
          <label className="block font-medium text-gray-700">Mother Name</label>
          <input
            type="text"
            name="motherName"
            defaultValue={motherName}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="block font-medium text-gray-700">
            Profile Image
          </label>
          <input
            type="file"
            name="image"
            // defaultValue={photoURL}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            defaultValue={dateOfBirth}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Height */}
        <div>
          <label className="block font-medium text-gray-700">Height</label>
          <select
            name="height"
            defaultValue={height}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select</option>
            <option value="Short">Short</option>
            <option value="Average">Average</option>
            <option value="Tall">Tall</option>
          </select>
        </div>

        {/* Weight */}
        <div>
          <label className="block font-medium text-gray-700">Weight</label>
          <select
            name="weight"
            defaultValue={weight}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select</option>
            <option value="Light">Light</option>
            <option value="Average">Average</option>
            <option value="Heavy">Heavy</option>
          </select>
        </div>

        {/* Age */}
        <div>
          <label className="block font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            defaultValue={age}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="block font-medium text-gray-700">Occupation</label>
          <select
            name="occupation"
            defaultValue={occupation}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
          </select>
        </div>

        {/* Race */}
        <div>
          <label className="block font-medium text-gray-700">Race</label>
          <select
            name="race"
            defaultValue={race}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select</option>
            <option value="Fair">Fair</option>
            <option value="Dark">Dark</option>
            <option value="Medium">Medium</option>
          </select>
        </div>

        {/* Permanent Division */}
        <div>
          <label className="block font-medium text-gray-700">
            Permanent Division
          </label>
          <select
            name="permanentDivision"
            defaultValue={permanentDivision}
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

        {/* Present Division */}
        <div>
          <label className="block font-medium text-gray-700">
            Present Division
          </label>
          <select
            name="presentDivision"
            defaultValue={presentDivision}
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

        {/* Partner Expectations */}
        <div>
          <label className="block font-medium text-gray-700">
            Expected Partner Age
          </label>
          <input
            type="number"
            name="expectedPartnerAge"
            defaultValue={expectedPartnerAge}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Expected Partner Height
          </label>
          <select
            name="expectedPartnerHeight"
            defaultValue={expectedPartnerHeight}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select</option>
            <option value="Short">Short</option>
            <option value="Average">Average</option>
            <option value="Tall">Tall</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Expected Partner Weight
          </label>
          <select
            name="expectedPartnerWeight"
            defaultValue={expectedPartnerWeight}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select</option>
            <option value="Light">Light</option>
            <option value="Average">Average</option>
            <option value="Heavy">Heavy</option>
          </select>
        </div>

        {/* Contact Details */}
        <div>
          <label className="block font-medium text-gray-700">
            Contact Email
          </label>
          <input
            type="email"
            name="email"
            value={user?.email}
            defaultValue={email}
            readOnly
            className="mt-1 block w-full bg-gray-100 rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobileNumber"
            defaultValue={mobileNumber}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BiodataForm;
