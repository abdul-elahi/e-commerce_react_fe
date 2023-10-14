import React from "react";
import { IconButton, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { color } from './../Product/FilterData';
const CartItems = () => {
  return (
    <div className=" p-5 shadow-lg border rounded-md">
    <div className=" flex items-center">
      <div className=" w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
        <img
          className=" w-full h-full object-cover object-top"
          src="https://rukminim1.flixcart.com/image/612/612/kb1470w0/jean/x/r/a/30-11274626-roadster-original-imafsgsthk6gdpjg.jpeg?q=70"
          alt=""
        />
      </div>
      <div className=" ml-5 space-x-1">
        <p className=" font-semibold"> Men Blue Trouser </p>
        <p className=" opacity-50">Size : L , Blue</p>
        <p className=" opacity-60 mt-2">Seller: Allen Solly</p>

        <div className="flex space-x-5 items-center text-gray-900 mt-4">
          <p className=" font-semibold">₹199</p>
          <p className=" opacity-50 line-through">₹211</p>
          <p className=" text-green-600">5% Off</p>
        </div>
      </div>
    </div>{" "}
    <div className=" lg:flex items-center lg:space-x-10 pt-4">
      <div className=" flex items-center space-x-2">
        <IconButton color="error">
          <RemoveCircleOutlineIcon />
        </IconButton>
        <span className=" py-1 px-7 border rounded-sm">4</span>
          <IconButton color="primary">
            <AddCircleOutlineIcon />
          </IconButton>
        
      </div>

      <Button>remove</Button>
    </div>
  </div>
  )
}

export default CartItems