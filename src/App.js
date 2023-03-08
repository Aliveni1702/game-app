import "./App.css";
import { BrowserRouter  , Routes, Route } from "react-router-dom";
import { Navbar } from "./components/nav/navbar";
import { Shop } from "./pages/shop/shop";
//import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import {Footer} from "../src/components/footer/footer"
function App() {
  return (
    <div className="App">
      
      <ShopContextProvider>
      
        <BrowserRouter>
        <header> <Navbar /></header>
          <Routes>
            <Route path="/" element={<Shop />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
         
        </BrowserRouter>
         
      </ShopContextProvider>
      
     <div> <Footer/></div>
     
     
    </div>
  );
}

export default App;