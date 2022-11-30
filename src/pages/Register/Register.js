import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
const Register = () => {

    const { googleSignup, githubSignup, createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const userTypes = ['seller', 'buyer']
    const handleSignup = (data) => {
        const { email, password, name } = data
        console.log(data)
        createUser(data)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success("user created")
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        toast.success("user name updated")
                        navigate('/')

                    })
                    .catch(err => {
                        console.log(err)
                        toast.error(err.message)
                    })
            })
            .catch(err => {
                const message = err.message
                toast.error(message)
            })
    }

    const handleGoogleSignup = () => {
        console.log('Goolge button is clicked')
        googleSignup()
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success("user created")
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
    }


    const handleGithubSignIn = () => {
        console.log('Goolge button is clicked')
        githubSignup()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => {
                console.log(err.message)
            })
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
                <h2 className='text-xl font-bold text-center'>Register</h2>
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
                        <span id="eye" className='btn  mt-3' onClick={() => hanldeEye()}>{vsisible ? <p>hide pass</p> : <span>show pass</span>}</span>
                        {
                            errors.password && <p className='text-red-500'>{errors.password?.message}</p>
                        }
                    </div>
                    <div>
                        <h1 className='text-orange-500'>Chose your account type</h1>
                        <select  {...register('type')} name='type' className="select btn m-1 select-bordered w-full mb-5">
            {
              userTypes.map((type, i) => <option className=' shadow bg-base-100 rounded-box w-52"' key={i} value={type}>{type}</option>)
            }
            
          </select>

                    </div>

                    <input className='btn mt-4 w-full' value="sign up" type="submit" />
                </form>
                <p className='my-4'>Already have an account ? <Link to="/login" className='text-secondary '>Login </Link></p>
                <div className="divider">OR</div>
                <div className='flex justify-center items-center mt-4 '>
                    <div><FcGoogle onClick={handleGoogleSignup} className='mr-5 text-2xl cursor-pointer'></FcGoogle></div>
                    <div><BsGithub onClick={handleGithubSignIn} className='text-2xl cursor-pointer'></BsGithub></div>
                </div>
            </div>
        </section>
    );
};

export default Register;