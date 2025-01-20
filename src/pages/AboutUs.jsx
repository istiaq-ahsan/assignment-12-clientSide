import { FaEnvelope } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import firstImage from "../assets/beautiful-wedd.jpg";
import secondImage from "../assets/young-bride.jpg";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="py-16 w-11/12 mx-auto">
      <Helmet>
        <title>HeartMatch | About Us</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center gap-5">
        <div className="flex flex-col md:col-span-3">
          <img
            className="w-[400px] h-72 relative lg:ml-14 rounded-3xl object-cover"
            src={secondImage}
            alt=""
          />
          <img
            className="w-64 h-48 -top-20 mx-auto lg:mx-0 relative rounded-3xl object-cover"
            src={firstImage}
            alt=""
          />
        </div>
        <div className="space-y-3 md:col-span-3">
          <div className="flex flex-col space-y-5">
            <div>
              <h1 className="md:text-4xl text-3xl font-semibold uppercase">
                Welcome to
              </h1>
              <h2 className="md:text-5xl text-4xl  font-bold uppercase mt-3">
                HeartMatch
              </h2>
            </div>

            <div>
              <p className="">
                Discover the perfect match for your journey. Our platform is
                dedicated to connecting hearts, offering a seamless and trusted
                experience for those seeking lifelong companionship.
              </p>
              <h3 className="mt-3">
                <Link to="/biodatas" className="text-pink-500">
                  Click here to
                </Link>{" "}
                start your matrimony service now.
              </h3>
            </div>
            <hr />

            <div className="space-y-5">
              <p>
                Every love story is unique, and so is our approach. We
                prioritize authenticity and reliability, ensuring your
                experience is both meaningful and personalized to help you find
                your ideal partner.
              </p>

              <div className="flex gap-4 lg:gap-10 flex-col lg:flex-row">
                <div className="flex gap-4 items-center">
                  <div className="bg-gray-900 p-2 rounded-full text-white">
                    <MdCall />
                  </div>
                  <div className="text-lg font-medium">
                    <h4 className="text-gray-500">Enquiry</h4>
                    <h2>+8801575306824</h2>
                  </div>
                </div>
                <div className="flex  gap-4 items-center">
                  <div className="bg-gray-900 p-2 rounded-full text-white">
                    <FaEnvelope />
                  </div>
                  <div className="text-lg font-medium">
                    <h4 className="text-gray-500">Email</h4>
                    <h2>ahsanistiaq23@gmail.com</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
