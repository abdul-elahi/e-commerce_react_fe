import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSection/HomeSectionCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import './HomeSectionCarousel.css'

const responsive = {
  0: { items: 2.6 },
  720: { items: 3 },
  1024: { items: 5 },
};

const HomeSectionCarousel = ({ data, sectionName }) => {
  const items = data.map((item) => <HomeSectionCard product={item} />);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevious = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className=" home-section-carousel">
      <h2 className=" text-2xl font-extrabold flex flex-col justify-center px-5 lg:px-10">
        {sectionName}
      </h2>
      <div className=" relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            className=" z-50 bg-white"
            variant="content"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            onClick={slideNext}
            aria-label="next"
          >
            <ArrowBackIosIcon
              sx={{
                transform: "translateX(50%) rotate(90deg)",
                color: "black",
              }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            className=" z-50"
            variant="content"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
            }}
            onClick={slidePrevious}
            aria-label="previous"
          >
            <ArrowForwardIosIcon
              sx={{ transform: "translateX(50%) rotate(90deg)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
