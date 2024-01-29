
import './App.css';
import FilterProducts from './Components/FilterProducts/FilterProducts';
import Main from './Components/Main/Main';
import {Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/filterproducts/:type' element={<FilterProducts />} />
        </Routes>
    </div>
  );
}

export default App;
