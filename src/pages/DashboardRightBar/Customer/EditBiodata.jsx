import { toast } from "react-toastify";
import imageUpload from "../../../api/ReusableImgbb";
import BiodataForm from "../../../form/BiodataForm";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../shared/LoadingSpinner";

const EditBiodata = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: bio,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bio"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/bioData/${user?.email}`
      );
      return data;
    },
  });
  console.log(bio);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const biodataType = form.biodataType.value;
    const name = form.name.value;
    const image = form.image.files[0];

    const photoURL = await imageUpload(image);
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const dateOfBirth = form.dateOfBirth.value;
    const height = form.height.value;
    const weight = form.weight.value;
    const age = parseInt(form.age.value);
    const occupation = form.occupation.value;
    const race = form.race.value;
    const permanentDivision = form.permanentDivision.value;
    const presentDivision = form.presentDivision.value;
    const expectedPartnerAge = parseInt(form.expectedPartnerAge.value);
    const expectedPartnerHeight = form.expectedPartnerHeight.value;
    const expectedPartnerWeight = form.expectedPartnerWeight.value;
    const email = form.email.value;
    const mobileNumber = parseInt(form.mobileNumber.value);

    const bioData = {
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
    };
    console.log(bioData);

    try {
      // patch req
      await axiosSecure.patch(`/all-bioData/${user?.email}`, bioData);
      toast.success("Data Added Successfully!");
      refetch();
    } catch (err) {
      console.log(err);
    } finally {
      //
    }
  };

  return (
    <div>
      <BiodataForm
        handleSubmit={handleSubmit}
        user={user}
        bio={bio}
      ></BiodataForm>
    </div>
  );
};

export default EditBiodata;
