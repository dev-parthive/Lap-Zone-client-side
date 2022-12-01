import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const {register , formState: {errors} , handleSubmit} = useForm()
    const {googleSignup , githubSignup  ,createUser , signIn }  = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    console.log(loginUserEmail)
    const from = location?.state?.from?.pathname || '/'

    if(token){
        navigate(from, {replace: true})
    }

    // show hide button 
    const [visible , setVisible] = useState(false)
    const [type , setType ] = useState('password')
    const hanldeEye = (event) =>{
        const password = document.getElementById("password")
        setVisible(!visible)
        if(password.type === 'password'){
            setType('text')

        }
        else if (password.type === 'text'){
            setType('password')
        }
    }

    


const handleGoogleSignup = () =>{
    console.log('Goolge button is clicked')
    googleSignup()
    .then(result => {
        const user = result.user
        console.log(user)
        setLoginUserEmail(user.email)
        toast.success("Logged in buyer account ")
        // navigate(from, {replace: true})
    })
    .catch(err =>{
        console.log(err.message)
        toast.error(err.message)
    })
}


const handleGithubSignIn = () =>{
    console.log('Goolge button is clicked')
    githubSignup()
    .then(result => {
        const user = result.user
        console.log(user)
        
        toast.success('Logged in buyer account')
        // navigate(from, {replace: true})
        setLoginUserEmail(user.email)
    })
    .catch(err =>{
        console.log(err.message)
    })
}
    //handle login 
    const handleLogin = (data , event) =>{

        console.log(data)
        const {email, password} = data
        signIn(email , password)
        .then( (result)=>{
            const user = result.user
            console.log(user)
            toast.success("logged in Successfully")
            event.target.reset()
            setLoginUserEmail(data.email)
            // navigate(from, {replace: true})
        })
        .catch(err =>{
            toast.error(err.message)
        })

    }





    return (
        <section className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border shadow-md'>
                <h2 className='text-xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='form-control w-full max-w-xs'>
                        <label htmlFor='Email' className='label'> 
                        <span className='label-text'>Email</span>
                        </label>
                        <input id="Email" type="email" className='input input-bordered w-full max-w-xs' {...register("email" , {required : "Email is required"})} />
                            {
                                errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>
                            }
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label htmlFor='password' className='label'> 
                        <span className='label-text'>Password</span>
                        </label>
                        <input id="password" type={type} className='input input-bordered w-full max-w-xs' {...register("password" , {required : "Password is required" , minLength: {valuie : 6 , message: "Password should be atleast 6 charecter "}})} />
                        {/* //show hide button */}
                        <span id="eye" className='btn  mt-3' onClick={() => hanldeEye()}>{visible ? <p>hide pass</p> : <span>show pass</span>}</span>
                            {
                                errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>
                            }
                    </div>
                    <p className='mt-5'><Link>Forget Password</Link></p>
                    <input type="submit" className='btn mt-4 w-full' value="login" />

                </form>
                <p className='my-4'>New to this site ? <Link to="/register" className='text-secondary '>Register </Link></p>
            <div className="divider">OR</div>
            <div className='flex justify-center items-center mt-4 '>
                    <div><FcGoogle onClick={handleGoogleSignup}  className='mr-5 text-2xl cursor-pointer'></FcGoogle></div>
                    <div><BsGithub onClick={handleGithubSignIn} className='text-2xl cursor-pointer'></BsGithub></div>
                </div>
            </div>

        </section>
    );
};

export default Login;