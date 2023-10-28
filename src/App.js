import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import Footer from "./customer/components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}></Route>
      </Routes>
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage/> */}
        {/* <Product /> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
