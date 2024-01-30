import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import { useDispatch } from 'react-redux';
import {ProductActions} from '../../store/ProductSlice';
import { Link, useParams } from 'react-router-dom';
function ProductCard({product}) {
    // console.log(product);
    const {id,img, name,text,color,price} = product;

    const dispatch = useDispatch()
    const {type}  = useParams()
  return (
    <Link key={id} to={`/filterproducts/${type}/`+ id}>
        <Card className="mt-6 w-96" onClick={()=>dispatch(ProductActions.singleProducts(id))}>
      <CardHeader color="blue-gray" className="relative h-96">
        <img
          src={img}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
         {name}
        </Typography>
        <Typography>
          {text}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
            <Typography variant='small'>{price}$</Typography>
            <Typography variant='small' color='gray' className="flex gap-1">
                {color?.map((colar, index) => (
                    <i key={index} className='fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4' style={{ backgroundColor: colar }}>
                    {colar}
                    </i>
                ))}
            </Typography>

      </CardFooter>
    </Card>
    </Link>
  )
}

export default ProductCard