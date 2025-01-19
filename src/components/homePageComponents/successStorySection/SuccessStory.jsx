import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import SectionTitle from "../../../shared/SectionTitle";
import StoryCard from "./storyCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import { useState } from "react";

const SuccessStory = () => {
  const axiosSecure = UseAxiosSecure();
  const [sort, setSort] = useState("");

  const { data: allStory, isLoading } = useQuery({
    queryKey: ["clientStory", sort],
    queryFn: async () => {
      const { data } = await axiosSecure(`/client-review?sort=${sort}`);
      return data;
    },
    enabled: true,
  });

  if (isLoading) return <LoadingSpinner />;

  console.log(allStory);

  return (
    <div className="bg-gradient-to-b from-slate-100 to-white">
      <div className="w-11/12 mx-auto py-10 ">
        <SectionTitle
          heading={"Success Story"}
          subHeading={"Here some of our clients share their story"}
        ></SectionTitle>

        <div className="flex justify-end">
          <select
            name="category"
            id="category"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="py-3 px-2 border rounded-md"
          >
            <option value="">Sort By Marriage Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>

        <Swiper
          slidesPerView={1} // Default for smaller screens
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3, // 3 slides for screens >= 768px (md breakpoint)
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {allStory.map((story, index) => (
              <SwiperSlide key={index}>
                <StoryCard story={story}></StoryCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStory;
