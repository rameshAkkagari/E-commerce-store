import React from 'react'
import { Button } from '@material-tailwind/react';
import clother from '../../assets/images/clothes.jpg';
import { ProductActions } from '../../store/ProductSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function NavigateButton() {

    const dispatch = useDispatch()
    const buttons = [
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags",
      ];


  return (
    <div>
        <div className='flex items-center justify-center py-8'>
            {
                buttons.map((btn,index)=>{
                    return (
                        <div className='mr-4' key={index}>
                            <Link to={"/filterproducts/" + btn}>
                            <Button color='gray' size='lg' variant='outlined' ripple={true} 
                                    className='hover:bg-green-300 duration-100 ease-in-out'
                                    onClick={()=>dispatch(ProductActions.filterproducts(btn))}
                            >
                                {btn}
                            </Button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        <div className='bg-black p-2 w-[55%] mx-auto rounded-md'>
            <h3 className='text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none'>SALES UP TO 50%</h3>
        </div>
        <div className='flex items-center justify-center py-4'>
            <img className='h-[600px] w-[70%] rounded-md shadow-md shadow-gray-600' src={clother} alt='clother'/>
        </div>
    </div>
  )
}

export default NavigateButton