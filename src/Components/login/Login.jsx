import React,{useState} from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { authAuction } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
function Login() {
    const initialState  ={
        name:"",
        password:"",
        img:""
    }
    const [values,setValue] = useState(initialState);

    const onchangeValues =(e)=>{
        const {name,value} = e.target;
        setValue({...values,[name]:value})
    }

    const dispathch=  useDispatch();
  return (
    <div className='grid grid-cols-1 items-center justify-items-center h-screen'>
        <Card className="w-96">
    <CardHeader
      variant="gradient"
      color="blue"
      className="mb-4 grid h-28 place-items-center"
    >
      <Typography variant="h3" color="white">
        Sign In
      </Typography>
    </CardHeader>
    <CardBody className="flex flex-col gap-4">
      <Input label="Email" size="lg" type='text' name='name' value={values.name} onChange={onchangeValues} />
      <Input label="Password" size="lg" type='password' name='password' value={values.password} onChange={onchangeValues} />
      <Input label="Image URL address" size="lg" type='text'  name='image' value={values.img} onChange={onchangeValues}/>

      <div className="-ml-2.5">
        <Checkbox label="Remember Me" />
      </div>
    </CardBody>
    <CardFooter className="pt-0">
      <Button variant="gradient" fullWidth onClick={()=>dispathch(authAuction.login(values))}>
        Sign In
      </Button>
      <Typography variant="small" className="mt-6 flex justify-center">
            Image is optiona
      </Typography>
    </CardFooter>
  </Card>
        
    </div>
  )
}

export default Login