import "./App.css";
import Product from "./customer/components/Product/Product";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/HomePage";
import Footer from "./customer/components/Footer/Footer";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from './customer/components/Checkout/Checkout';

function App() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage/> */}
        {/* <Product /> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
