/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import BioDataCard from "../components/bioDataComponents/BioDataCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import Sidebar from "../components/bioDataComponents/Sidebar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Biodatas = () => {
  const axiosPublic = UseAxiosPublic();

  const [allBioData, setAllBioData] = useState([]);
  const [biodataType, setBiodataType] = useState("");
  const [division, setDivision] = useState("");
  const [occupation, setOccupation] = useState("");
  const [miniAge, setMiniAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchAllBio = async () => {
    setLoading(true);
    try {
      const { data } = await axiosPublic.get(
        `/all-biodata?biodataType=${biodataType}&division=${division}&occupation=${occupation}&miniAge=${miniAge}&maxAge=${maxAge}&search=${search}`
      );
      setAllBioData(data);
    } catch (error) {
      console.error("Error fetching biodata:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBio();
  }, [biodataType, division, occupation, miniAge, maxAge, search]);

  return (
    <div className="w-11/12 py-10 mx-auto ">
      <Helmet>
        <title>HeartMatch | Biodatas</title>
      </Helmet>
      <div className="flex gap-5">
        <div className="md:w-[30%] w-[50%] border border-gray-100 rounded-md shadow-lg md:p-5 top-0 left-0">
          <Sidebar
            biodataType={biodataType}
            setBiodataType={setBiodataType}
            division={division}
            setDivision={setDivision}
            occupation={occupation}
            setOccupation={setOccupation}
            miniAge={miniAge}
            setMiniAge={setMiniAge}
            maxAge={maxAge}
            setMaxAge={setMaxAge}
          ></Sidebar>
        </div>
        <div className="md:w-[70%] w-[50%]">
          <div
            className="flex overflow-hidden border bg-white
              rounded-lg focus-within:ring focus-within:ring-opacity-40
              focus-within:border-blue-400 focus-within:ring-blue-300"
          >
            <input
              className="px-6 py-3 text-gray-700 placeholder-gray-500 w-full
                bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)} // Updates the state as user types
              value={search} // Controlled input bound to the `search` state
              placeholder="Enter bride / groom name"
              aria-label="Enter bride / groom name"
            />

            <button
              onClick={() => setSearch("")} // Clears the input field by resetting the state
              className="md:px-4 px-2 m-1 rounded-md text-xs 
              font-medium tracking-wider text-gray-100 
              uppercase transition-colors duration-300 
              transform bg-gray-700 hover:bg-gray-500
              focus:bg-gray-600 focus:outline-none"
            >
              Reset
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allBioData.map((bioData, index) => (
              <BioDataCard key={index} bioData={bioData}></BioDataCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
