import React from "react";
import './HomeSectionCard.css'

const HomeSectionCard = ({product}) => {
  return (
    <div
      className=" flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-xl overflow-hidden
     w-[15rem] mx-3 home-section-card "
    >
      <div className="h-[13rem] w-[10rem] section-img">
        <img
          className=" object-cover object-top w-full h-full"
          src=      {product.imageUrl || product.image}
          alt=""
        />
      </div>
      <div className=" p-4">
        <h3 className=" text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className=" mt-2 text-sm text-gray-500">
          {product.title}
        </p>
        <p>
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
