import "./App.css";
import Product from "./customer/components/Product/Product";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/HomePage";
import Footer from "./customer/components/Footer/Footer";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage/> */}
        {/* <Product /> */}
        <ProductDetails/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
