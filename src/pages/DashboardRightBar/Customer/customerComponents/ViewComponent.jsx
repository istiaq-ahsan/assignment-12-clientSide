const ViewComponent = ({ bio }) => {
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

  return (
    <section className="hero bg-gray-100 py-10 px-6 text-gray-800">
      <div className="container mx-auto max-w-6xl">
        {/* First Info: Image and Name */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-2">
            <h1 className="text-4xl font-bold mb-4 uppercase">{name}</h1>
            <h2 className="text-xl ">Occupation: {occupation}</h2>
            <h2 className="text-xl">Biodata Type: {biodataType}</h2>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={photoURL}
              alt="User Avatar"
              className="w-40 h-40 shadow-lg"
            />
          </div>
        </div>

        {/* Biodata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg">
          <div>
            <h2 className="">Father's Name: {fatherName}</h2>
          </div>
          <div>
            <h2 className="">Mother's Name: {motherName}</h2>
          </div>
          <div>
            <h2 className="">Date of Birth: {dateOfBirth}</h2>
          </div>
          <div>
            <h2 className="">Height: {height} </h2>
          </div>
          <div>
            <h2 className="">Weight: {weight}</h2>
          </div>
          <div>
            <h2 className="">Age: {weight} </h2>
          </div>
          <div>
            <h2 className="">Race: {race}</h2>
          </div>
          <div>
            <h2 className="">Present Division: {presentDivision}</h2>
          </div>
          <div>
            <h2 className="">Permanent Division: {permanentDivision}</h2>
          </div>
          <div>
            <h2 className="">Expected Partner's Age: {expectedPartnerAge}</h2>
          </div>
          <div>
            <h2 className="">
              Expected Partner's Height: {expectedPartnerHeight}
            </h2>
          </div>
          <div>
            <h2 className="">
              Expected Partner's Weight: {expectedPartnerWeight}
            </h2>
          </div>
          <div>
            <h2 className="">Email: {email}</h2>
          </div>
          <div>
            <h2 className="">Mobile Number: {mobileNumber}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewComponent;
