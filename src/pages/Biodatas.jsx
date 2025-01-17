/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import BioDataCard from "../components/bioDataComponents/BioDataCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import Sidebar from "../components/bioDataComponents/Sidebar";
import { useEffect, useState } from "react";

const Biodatas = () => {
  const axiosPublic = UseAxiosPublic();

  const [allBioData, setAllBioData] = useState([]);
  const [biodataType, setBiodataType] = useState("");
  const [division, setDivision] = useState("");
  const [occupation, setOccupation] = useState("");
  const [miniAge, setMiniAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAllBio = async () => {
    setLoading(true);
    try {
      const { data } = await axiosPublic.get(
        `/all-biodata?biodataType=${biodataType}&division=${division}&occupation=${occupation}&miniAge=${miniAge}&maxAge=${maxAge}`
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
  }, [biodataType, division, occupation, miniAge, maxAge]);

  return (
    <div className="w-11/12 py-10 mx-auto ">
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
