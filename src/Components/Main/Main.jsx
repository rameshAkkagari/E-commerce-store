import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import NavigateButton from '../NavigationButtons/NavigateButton'
import ProductsSection from '../productsSection/ProductsSection'
import Footer from '../Footer/Footer'
function Main() {
  return (
    <div>
        {/* <Navbar/> */}
        <Slider/>
        <NavigateButton/>
        <ProductsSection/>
        <Footer/>
    </div>
  )
}

export default Main