import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from '@material-tailwind/react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
function FilterProducts() {
    const products = useSelector((state)=>state.product.filteredproducts)
    console.log(products);
    const {type} = useParams()
    // console.log(type);
    const genderButtons = ["male","Female"]
    const colorButtons = [
        "red",
        "green",
        "purple",
        "yellow",
        "orange",
        "blue",
        "black",
        "brown",
      ];
      const sizeButtons = ["S", "M", "L", "XL"];
  return (
    <div>
        <div className='pt-16'>
            <div className='pl-14'>
                <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>
                    {type}
                </h1>
                <div className='flex justify-between items-center py-8'>
                    <div className='flex items-center'>
                        {genderButtons.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <Button className='text-black hover:bg-gray-300 duration-300 mr-3'
                                            color='gray' size='lg' variant='outlined' ripple={true}>
                                        {item}
                                    </Button>   
                                </div>
                            )
                        })}
                        <Button className='text-black hover:bg-gray-300 duration-300 mr-3'
                            color='gray' size='lg' variant='outlined' ripple={true}>
                            High Price
                        </Button>

                        <Menu>
                            <MenuHandler>
                                <Button className='text-black hover:bg-gray-300 duration-300 mr-3'
                            color='gray' size='lg' variant='outlined' ripple={true}>
                                    Selete color
                                </Button>
                            </MenuHandler>
                            <MenuList>
                                {colorButtons.map((item,index)=>{
                                    return (
                                        <>
                                            <MenuItem key={index} style={{color:item}}>
                                                {item}
                                            </MenuItem>
                                        </>
                                    )
                                })}
                            </MenuList>
                        </Menu>


                        <Menu>
                            <MenuHandler>
                                <Button className='text-black hover:bg-gray-300 duration-300 mr-3'
                            color='gray' size='lg' variant='outlined' ripple={true}>
                                    Selete a size
                                </Button>
                            </MenuHandler>
                            <MenuList>
                                {sizeButtons.map((item,index)=>{
                                    return (
                                        <>
                                            <MenuItem key={index} style={{color:item}}>
                                                {item}
                                            </MenuItem>
                                        </>
                                    )
                                })}
                            </MenuList>
                        </Menu>
                    </div>
                    <div className="pr-14">
                        <Button
                            color="gray"
                            size="lg"
                            variant="outlined"
                            ripple={true}
                            className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                            // onClick={() => dispatch(filterProducts(type))}
                        >
                            Clear Filter
                        </Button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
                {products.filter((product)=>product.type === type).map((product,index)=>{
                    return (
                        <div key={index}>
                            <ProductCard product={product}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default FilterProducts