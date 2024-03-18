
// import './App.css';
// import FilterProducts from './Components/FilterProducts/FilterProducts';
// import SingleProduct from './Components/FilterProducts/SingleProduct';
// import Main from './Components/Main/Main';
// import {Route,Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Login from './Components/login/Login';
// import Nav from './practice/Nav';
// import Navbar from './Components/Navbar/Navbar';
// function App() {
   
//     // const user = useSelector((state)=>state.auth.user)

//     // const {authuser} = user;

//     // console.log("user", user);
//     // console.log("authuser" , authuser);

//   return (
//     <div className="App">
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={ <Main /> } />
//             <Route path='/filterproducts/:type' element={<FilterProducts />} />
//             <Route path='/filterproducts/:type/:id' element={<SingleProduct />} />
//             {/* <Route path='/login' element={} /> */}

//         </Routes>

//     </div>
//   );
// }

// export default App;

import Dash from "./practice/Dash"
import Nav from "./practice/Nav"
 function App(){
    return(
      <>
        {/* <Nav/> */}
      <Dash/>
      </>
    )
}

export default App
