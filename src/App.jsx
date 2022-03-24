import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from "react-router-dom";



const App = () => {
  const user = false //if true then go homepage
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route path ="/products" element = {<ProductList/>}/>
        <Route path ="/product/:id" element = {<Product/>}/>
        <Route path ="/cart" element = {<Cart/>}/>
        <Route path ="/login" element = {user ? <Navigate to ="/"/> : <Login/>} />
        <Route path ="/register" element = {user ? <Navigate to ="/"/> : <Register/>}/>
      </Routes>
    </Router>
  )

};

export default App;