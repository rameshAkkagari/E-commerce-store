import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
function FilterProducts() {
    const products = useSelector((state)=>state.product.filteredproducts)
    console.log(products);
    const {type} = useParams()
  return (
    <div>
        <div className='pt-16'>
            <div className='pl-14'>
                <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>{type}</h1>
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