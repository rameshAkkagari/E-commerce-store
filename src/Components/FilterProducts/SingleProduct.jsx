import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tooltip, Button } from "@material-tailwind/react";
import {cartActions} from '../../store/Cartslice';
function SingleProduct() {
  const products = useSelector((state)=>state.product.singleproduct);
  console.log(products);
  const {id} = useParams()
  const dispatch =useDispatch()

  const productSize = products[0].size ? products[0].size[0] : "";
  const productsColor = products[0].color ? products[0].color[0] : ""

  const [size,setSize] = useState(productSize);
  const [color,setColor] = useState(productsColor)

  const addtoCartItem  =(item) =>{
    dispatch(cartActions.addToCart({
        id:item.id,
        price:item.price,
        size:size,
        img:item.img,
        text:item.text,
        amount:1,
        totalPrice:item.price,
        name:item.name,
        color:color
        
    }))
  }
  return (
    <div>
        {products.filter((product)=>product.id === id).map((item,index)=>{
            return (
            <div key={index} className='flex justify-center items-center py-10'>
                <div className='pl-44 grow-[2]'>
                    <img className='h-[850px] rounded-lg' src={item.img} alt={item.name}/>
                </div>

                <div className='grow-[3]'>
                    <div className="max-w-lg">
                        <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                            {item.name}
                        </h5>
                        <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                            15% OFF
                        </p>
                        <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                            {item.text}
                        </p>
                        {/* size */}
                        <div className='pb-4'>
                            {item.size ? (
                                <div>
                                        <label
                                            htmlFor="size"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                        Pick a size
                                        </label>

                                        <select
                                            id="size"
                                            name="size"
                                            value={size}
                                            onChange={(e) => setSize(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                        {item.size.map((item, index) => {
                                            return (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                            );
                                        })}
                                        </select>
                                </div>
                                ):(<div>
                                    <label
                                        htmlFor="size"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                    Pick a size
                                    </label>

                                    <select
                                        id="size"
                                        name="size"
                                        disabled={true}
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                    {item?.size?.map((item, index) => {
                                        return (
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                        );
                                    })}
                                    </select>
                            </div>
                            )}
                        </div>

                        {/* color */}
                        <div className='pb-4'>
                            <label
                                htmlFor="color"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Pick a color
                            </label>

                            <select
                                id="color"
                                name="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                            {item.color.map((color, index) => {
                                return (
                                <option key={index} value={color}>
                                    {color}
                                </option>
                                );
                            })}
                            </select>
                        </div>

                        <Tooltip content='Add To Cart' placement="bottom">
                            <Button onClick={()=>addtoCartItem(item)} color='gray' size='lg' variant='outlined' ripple={true}>
                                Add To Cart
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default SingleProduct