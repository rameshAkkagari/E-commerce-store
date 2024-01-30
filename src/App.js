
import './App.css';
import FilterProducts from './Components/FilterProducts/FilterProducts';
import SingleProduct from './Components/FilterProducts/SingleProduct';
import Main from './Components/Main/Main';
import {Route,Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
    const cart = useSelector((state)=>state.cart.cart);
    console.log(cart);
    console.log("cart items");
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/filterproducts/:type' element={<FilterProducts />} />
            <Route path='/filterproducts/:type/:id' element={<SingleProduct />} />
        </Routes>
    </div>
  );
}

export default App;
