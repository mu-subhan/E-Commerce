import React from "react";
import {BrowserRouter as  Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";


function App() {
   
  return (
  <Router>
    <Routes>
    <Route path="/" Component={Home} exact/>
    <Route path="/product-detail" Component={ProductDetail} exact/>
    <Route path="/cart" Component={Cart} exact/>

    </Routes>
  </Router>
    
  );
}

export default App;
