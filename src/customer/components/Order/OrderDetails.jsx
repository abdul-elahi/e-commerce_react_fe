import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import AddressCard from './../AddressCard/AddressCard';
import OrderTraker from './OrderTraker';
import StarIcon from "@mui/icons-material/Star";

const OrderDetails = () => {
    return (
        <div className=" px-2 lg:px-36 space-y-7 ">
          <Grid container className="p-3 shadow-lg">
            <Grid xs={12}>
              <p className="font-bold text-lg py-2">Delivery Address</p>
            </Grid>
            <Grid item xs={6}>
              <AddressCard />
            </Grid>
          </Grid>
          <Box className="p-5 shadow-lg border rounded-md">
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid item xs={9}>
              <OrderTraker  activeStep={1} />
              </Grid>
              <Grid item>
            <Button sx={{ color: ""}} color="error" variant="text" >
                  RETURN
                </Button>
    
             <Button sx={{ color: "" }} variant="text">
                  cancel order
                </Button>
              </Grid>
            </Grid>
          </Box>
    
        
    
          <Grid container className="space-y-5">
            {[1,1,1].map((item) => (
              <Grid
                container
                item
                className="shadow-xl rounded-md p-5 border"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Grid item xs={6}>
                  {" "}
                  <div className="flex  items-center ">
                    <img
                      className="w-[5rem] h-[5rem] object-cover object-top"
                      src=""
                      alt=""
                    />
                    <div className="ml-5 space-y-2">
                      <p className="">Pant</p>
                      <p className="opacity-50 text-xs font-semibold space-x-5">
                        <span>Color: pink</span> <span>Size:L</span>
                      </p>
                      <p>Seller: gucci</p>
                      <p>₹1111</p>
                    </div>
                  </div>
                </Grid>
                <Grid item>
                  {
                    <Box
                      sx={{ color:"" }}
                    //   onClick={() => navigate(`/account/rate/${item.product.id}`)}
                      className="flex items-center cursor-pointer"
                    >
                      <StarIcon
                        sx={{ fontSize: "2rem" }}
                        className="px-2 text-5xl"
                      />
                      <span>Rate & Review Product</span>
                    </Box>
                  }
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      );
}

export default OrderDetails