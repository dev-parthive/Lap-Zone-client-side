import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {FcGoogle } from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
const Register = () => {

    const handleSignup = (data) =>{
        console.log(data)

    }

const handleGoogleSignup = () =>{
    console.log('Goolge button is clicked')
}

const handleGithubSignIn = () =>{
    console.log('github button is clicked')
}
        
    //show and hide function 
    const [vsisible, setVisible] = useState(false)
    const [type, setType] = useState('password')
    const hanldeEye = (event) => {
        const password = document.getElementById("password")
        setVisible(!vsisible)
        if (password.type === 'password') {
            setType('text')
        }
        else if (password.type === 'text') {
            setType('password')
        }

    }

    const { register, formState: { errors }, handleSubmit } = useForm()
    return (
        <section className='h-[800px]  flex justify-center items-center'>
        <div className='w-96 p-7 border shadow-md' >
            <h2 className='text-xl font-bold text-center'>SignUp</h2>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                    <label htmlFor='Name' className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: "Name is required" })} id="Name" type="text" className="input input-bordered w-full max-w-xs" />
                    {
                        errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>
                    }
                </div>
                <div className="form-control w-full max-w-xs">
                    <label htmlFor='Email' className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "Email is required" })} id="Email" type="email" className="input input-bordered w-full max-w-xs" />
                    {
                        errors.email && <p className='text-red-500'>{errors.email?.message}</p>
                    }
                </div>
                <div className="form-control w-full max-w-xs">
                    <label htmlFor='Password' className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input id="password" {...register("password", {
                        required: "password is required", minLength: { value: 6, message: 'password should be atleast 6 charecters' },
                        pattern: { value: /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.])).{8,}/, message: "password must have uppercase lowercase special chacrecter and number " }
                    })} type={type} className="input input-bordered w-full max-w-xs" />
                    <span id="eye" className='btn w-10 mt-3' onClick={() => hanldeEye()}>{vsisible ? <p>hide</p> : <span>show</span>}</span>
                    {
                        errors.password && <p className='text-red-500'>{errors.password?.message}</p>
                    }
                </div>

                <input className='btn mt-4 w-full' value="signup" type="submit" />
            </form>
            <p className='my-4'>Already have an account ? <Link to="/login" className='text-secondary '>Login </Link></p>
            <div className="divider">OR</div>
            <div className='flex justify-center items-center mt-4 '>
                    <div><FcGoogle onClick={handleGoogleSignup}  className='mr-5 text-2xl cursor-pointer'></FcGoogle></div>
                    <div><BsGithub onClick={handleGithubSignIn} className='text-2xl cursor-pointer'></BsGithub></div>
                </div>
        </div>
    </section>
    );
};

export default Register;