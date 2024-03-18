// import { Link } from "react-router-dom";
// import { Button } from "@material-tailwind/react";
// import {Select} from "@material-tailwind/react";
// import {SelectTrigger} from "@material-tailwind/react"
// import {Card} from  "@material-tailwind/react"
// import {SelectValue} from  "@material-tailwind/react"
// import {SelectContent} from "@material-tailwind/react"
// import {SelectItem} from "@material-tailwind/react"
// const Dash  =()=>{
//     return (
//         <>
//             <div className="bg-white">
     
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="md:col-span-2">
//             <img
//                 alt="Basic Pocket T-Shirt"
//                 className="w-full h-[400px]"
//                 height="400"
//                 src='https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg'
//                 style={{
//                     aspectRatio: "480/640",
//                     objectFit: "cover",
//                 }}
//                 width="480"
//             />
//             <div className="flex justify-center space-x-2 mt-4">
//               <Button className="w-8 h-8 bg-gray-200" />
//               <Button className="w-8 h-8 bg-gray-200" />
//               <Button className="w-8 h-8 bg-gray-200" />
//               <Button className="w-8 h-8 bg-gray-200" />
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">Basic Pocket T-Shirt</h2>
//             <p className="mt-2 text-gray-600">
//               A basic pocket t-shirt in soft, lightweight cotton. Available in a range of colors.
//             </p>
//             <div className="mt-4">
//               <Select>
//                 <SelectTrigger id="size">
//                   <SelectValue placeholder="Size" />
//                 </SelectTrigger>
//                 <SelectContent position="popper">
//                   <SelectItem value="xs">XS</SelectItem>
//                   <SelectItem value="s">S</SelectItem>
//                   <SelectItem value="m">M</SelectItem>
//                   <SelectItem value="l">L</SelectItem>
//                   <SelectItem value="xl">XL</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <span className="text-xl font-semibold">$75.00</span>
//               <Button>Add to Bag</Button>
//             </div>
//           </div>
//         </div>
//         <section className="mt-12">
//           <h3 className="text-xl font-bold mb-4">You May Also Like</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <Card className="w-full">
//               <img
//                 alt="Tailored Fit Polo"
//                 className="w-full h-auto"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "200/200",
//                   objectFit: "cover",
//                 }}
//                 width="200"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold">Tailored Fit Polo</h4>
//                 <p className="text-sm text-gray-600 mt-1">$85.00</p>
//               </div>
//             </Card>
//             <Card className="w-full">
//               <img
//                 alt="Special Edition Sunglasses"
//                 className="w-full h-auto"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "200/200",
//                   objectFit: "cover",
//                 }}
//                 width="200"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold">Special Edition Sunglasses</h4>
//                 <p className="text-sm text-gray-600 mt-1">$95.00</p>
//               </div>
//             </Card>
//             <Card className="w-full">
//               <img
//                 alt="White Cotton Shirt"
//                 className="w-full h-auto"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "200/200",
//                   objectFit: "cover",
//                 }}
//                 width="200"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold">White Cotton Shirt</h4>
//                 <p className="text-sm text-gray-600 mt-1">$70.00</p>
//               </div>
//             </Card>
//             <Card className="w-full">
//               <img
//                 alt="Slim Fit Chinos"
//                 className="w-full h-auto"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "200/200",
//                   objectFit: "cover",
//                 }}
//                 width="200"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold">Slim Fit Chinos</h4>
//                 <p className="text-sm text-gray-600 mt-1">$89.00</p>
//               </div>
//             </Card>
//           </div>
//         </section>
//         <section className="mt-12 mb-8">
//           <h3 className="text-xl font-bold mb-4">32 Recommended</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <Card className="w-full">
//               <img
//                 alt="Tailored Fit Polo"
//                 className="w-full h-auto"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "200/200",
//                   objectFit: "cover",
//                 }}
//                 width="200"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold">Tailored Fit Polo</h4>
//                 <p className="text-sm text-gray-600 mt-1">$85.00</p>
//               </div>
//             </Card>
//             <Card className="w-full">
//               <img
//                 alt="Special Edition Sunglasses"
//                 className="w-full h-auto"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "200/200",
//                   objectFit: "cover",
//                 }}
//                 width="200"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold">Special Edition Sunglasses</h4>
//                 <p className="text-sm text-gray-600 mt-1">$95.00</p>
//               </div>
//             </Card>
//             <Card className="w-full">
//               <img
//                 alt="White Cotton Shirt"
//                 className="w-full h-auto"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "200/200",
//                   objectFit: "cover",
//                 }}
//                 width="200"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold">White Cotton Shirt</h4>
//                 <p className="text-sm text-gray-600 mt-1">$70.00</p>
//               </div>
//             </Card>
//             <Card className="w-full">
//               <img
//                 alt="Slim Fit Chinos"
//                 className="w-full h-auto"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "200/200",
//                   objectFit: "cover",
//                 }}
//                 width="200"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold">Slim Fit Chinos</h4>
//                 <p className="text-sm text-gray-600 mt-1">$89.00</p>
//               </div>
//             </Card>
//           </div>
//         </section>
//       </main>
//       <footer className="bg-gray-100 py-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div>
//             <h4 className="font-bold mb-2">CONTACT</h4>
//             <p className="text-sm">1234 Street Adress City Address, 1234</p>
//             <p className="text-sm">info@company.com</p>
//             <p className="text-sm">(00) 1234 5678</p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-2">CUSTOMER SERVICE</h4>
//             <Link className="text-sm block" href="#">
//               Help & Contact
//             </Link>
//             <Link className="text-sm block" href="#">
//               Shipping & Taxes
//             </Link>
//             <Link className="text-sm block" href="#">
//               Return Policy
//             </Link>
//             <Link className="text-sm block" href="#">
//               Order Status
//             </Link>
//             <Link className="text-sm block" href="#">
//               Payment Options
//             </Link>
//           </div>
//           <div>
//             <h4 className="font-bold mb-2">INFORMATION</h4>
//             <Link className="text-sm block" href="#">
//               About Us
//             </Link>
//             <Link className="text-sm block" href="#">
//               Careers
//             </Link>
//             <Link className="text-sm block" href="#">
//               Privacy Policy
//             </Link>
//             <Link className="text-sm block" href="#">
//               Terms & Conditions
//             </Link>
//             <Link className="text-sm block" href="#">
//               Press Kit
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </div>
  
//         </>
//     )
// }
// export default Dash;

import React from 'react'
import { Link } from 'react-router-dom'
function Dash() {
  return (
    <div>
        <header className="flex items-center h-16 px-4 w-full md:px-6">
      <Link className="mr-6" to="#">
        Acme Inc
      </Link>
      <nav className="flex flex-1 justify-end gap-4">
        <a
          className="group inline-flex h-9 items-center justify-center rounded-md bg-gray-950 px-4 py-2 text-sm font-medium  hover:bg-gray-900 hover:text-gray-900 focus:bg-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          Home
        </a>
        <a
          className="group inline-flex h-9 items-center justify-center rounded-md bg-gray-950 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-gray-900 focus:bg-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          Features
        </a>
        <a
          className="group inline-flex h-9 items-center justify-center rounded-md bg-gray-950 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-gray-900 focus:bg-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          Pricing
        </a>
        <a
          className="group inline-flex h-9 items-center justify-center rounded-md bg-gray-950 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-gray-900 focus:bg-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          Contact
        </a>
      </nav>
    </header>
    </div>
  )
}

export default Dash