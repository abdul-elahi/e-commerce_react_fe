import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from '@mui/material';
import CartItems from './../Cart/CartItems';

const OrderSummery = () => {
  return (
    <div>
      <div>
        <AddressCard />
      </div>
      <div>
        <div className=" lg:grid grid-cols-3 lg:px-16 relative">
          <div className=" col-span-2">
            {[1, 1].map((item) => (
              <CartItems />
            ))}
          </div>
          <div className=" px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className=" space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span> ₹999 </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className=" text-green-600"> -₹499 </span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delevery Charge</span>
                  <span className=" text-green-600"> Free </span>
                </div>
                <hr />
                <div className="flex justify-between pt-3">
                  <span>Total Amount</span>
                  <span className=" text-green-600"> ₹399 </span>
                </div>

                <Button
                  className=" w-full mt-6 mb-10"
                  color="secondary"
                  variant="contained"
                  sx={{ px: "2.5rem", py: "0.5rem", bgcolor: "#9155fd" }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default OrderSummery;