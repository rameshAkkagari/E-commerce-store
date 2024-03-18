import { Button } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SliderAction } from '../../store/SliderSlice';
import { sliderData } from '../../assets/Data/DummyData';
import NextBtn from './arrows/NextBtn';
import PrevBtn from './arrows/PrevBtn';
function Slider() {
    const dispatch = useDispatch()

    const slideIndex = useSelector((state)=>state.slider.value);
    console.log('slider', slideIndex);

    const next =()=>{
        dispatch(SliderAction.nextSlide(slideIndex + 1))
    }
    
    const prev =()=>{
        dispatch(SliderAction.prevSlide(slideIndex -1))
    }
    // useEffect(() => {
    //     // Set a timeout and store the timeout ID
    //     const timeoutId = setTimeout(() => {
    //       dispatch(SliderAction.nextSlide(slideIndex + 1));
    //     }, 5000);
      
    //     // Cleanup function to clear the timeout if the component unmounts or slideIndex changes
    //     return () => {
    //       clearTimeout(timeoutId);
    //     };
    //   }, [dispatch, slideIndex]);
      
  return (
    <div className='relative pb-2'>
        <div>
            {sliderData.map((item,index)=>{
                return (
                    <div key={item.id} 
                    className={parseInt(item.id) === slideIndex 
                        ? 'opacity-100 duration-700 ease-in-out scale-100'
                        : "opacity-0 duration-700 ease-in-out scale-95"}>
                        <div>
                            {parseInt(item.id) === slideIndex && (
                                <img className='h-[830px] w-full' src={item.img} alt='slider images'/>
                            )}
                        </div>
                        <div className='absolute top-44 mx-auto inset-x-1/4 text-3xl'>
                            <p className='text-white font-inter font-bold tracking-normal leading-none'>
                            {parseInt(item.id) === slideIndex && item.text}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='flex absolute bottom-12 left-[45%]'>
            {sliderData.map((dot,index)=>{
                return (
                    <div className='mr-4' key={index}>
                        <div onClick={()=>dispatch(SliderAction.dotSlide(index))} className={index === slideIndex 
                        ? "bg-green-300 rounded-full p-4 cursor-pointer"
                        :"bg-white rounded-full p-4 cursor-pointer"}
                    >
                        </div>
                    </div>
                )
            })}
        </div>

        <div>
            <button className='absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300' 
                onClick={next}>
                <NextBtn/>
            </button>
            <button className='absolute top-[50%] left-4  bg-white rounded-full p-2 hover:bg-green-300' onClick={prev}>
                <PrevBtn/>
            </button>

        </div>
    </div>
  )
}

export default Slider