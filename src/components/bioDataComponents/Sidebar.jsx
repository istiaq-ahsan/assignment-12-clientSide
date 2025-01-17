const Sidebar = ({
  biodataType,
  setBiodataType,
  division,
  setDivision,
  occupation,
  setOccupation,
  miniAge,
  setMiniAge,
  maxAge,
  setMaxAge,
}) => {
  return (
    <div className="overflow-y-auto p-2 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="mb-4 text-xs md:text-base">
        <label htmlFor="gender" className="block text-sm font-medium mb-1">
          Biodata Type
        </label>
        <select
          id="gender"
          value={biodataType}
          onChange={(e) => setBiodataType(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>

      <div className="mb-4 text-xs md:text-base">
        <label htmlFor="division" className="block text-sm font-medium mb-1">
          Division
        </label>
        <select
          id="division"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="">Select Division</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattogram">Chattogram</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Barisal">Barisal</option>
          <option value="Khulna">Khulna</option>
          <option value="Mymensingh">Mymensingh</option>
          <option value="Sylhet">Sylhet</option>
        </select>
      </div>

      <div className="mb-4 text-xs md:text-base">
        <label htmlFor="occupation" className="block text-sm font-medium mb-1">
          Occupation
        </label>
        <select
          id="occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="">Select Occupation</option>
          <option value="Student">Student</option>
          <option value="Professional">Professional</option>
        </select>
      </div>

      <div className="mb-4 text-xs md:text-base">
        <label className="block text-sm font-medium mb-1">Age Range</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min Age"
            value={miniAge}
            onChange={(e) => setMiniAge(e.target.value)}
            className="w-1/2 border rounded-lg p-2"
          />
          <input
            type="number"
            placeholder="Max Age"
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
            className="w-1/2 border rounded-lg p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
