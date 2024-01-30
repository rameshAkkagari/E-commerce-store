import React, { Fragment }  from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { useSelector,useDispatch } from 'react-redux';
import { Tooltip } from "@material-tailwind/react";
function Cart({openModal,setOpen}) {
    const cart = useSelector((state)=>state.cart.cart);
    const totalPrice = useSelector((state)=>state.cart.totalPrice);
    

  return (
    <div>
    {cart.lenght > 0 ? <Fragment>
    <Dialog 
        open={openModal} 
        handler={()=>setOpen(false)}
        className="border-0 outline-0"
        >
      <DialogHeader>shopping Bag.</DialogHeader>
      <DialogBody>
         <div>
            <h1>Your cart</h1>
         </div>
      </DialogBody>
    </Dialog>
    </Fragment> 

    : <Fragment>
    <Dialog 
        open={openModal} 
        handler={()=>setOpen(false)}
        className="border-0 outline-0"
    >
        <DialogHeader>shopping Bag</DialogHeader>
            <div>
                <h1 className='text-black text-3xl font-inter font-bold tracking-normal leading-none py-4'>Your Bag is Empty</h1>
                <p className='text-black text-base font-inter font-bold tracking-normal leading-none'>Add some products</p>
            </div>
        <DialogBody>
            
        </DialogBody>
    </Dialog>
    </Fragment>}
    
  </div>
  )
}

export default Cart