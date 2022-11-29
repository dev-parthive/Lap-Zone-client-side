import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register , formState: {errors} , handleSubmit} = useForm()
    return (
        <section className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border shadow-md'>
                <h2 className='text-xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit()}>
                    <div className='form-control w-full max-w-xs'>
                        <label htmlFor='Email' className='label'> 
                        <span className='label-text'>Email</span>
                        </label>
                        <input id="Email" type="email" className='input input-bordered w-full max-w-xs' {...register("email" , {required : "Email is required"})} />
                            {
                                errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>
                            }
                    </div>

                </form>

            </div>

        </section>
    );
};

export default Login;