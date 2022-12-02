import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const imageHotKey = process.env.REACT_APP_Imgbb_key
    // console.log(imageHotKey)
    const {user} = useContext(AuthContext)

    const handleAddProduct = (data , ) => {
        console.log(data)
        const image = data.pitcture[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?&key=${imageHotKey}`
        fetch(url , {
            method: "POST", 
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData)
            const currentDate = new Date().toLocaleDateString()
            if(imgData.success){
                console.log(imgData.data.url)
                const imgURL = imgData.data.url;
                const product = {
                    name: data.name, 
                    condition: data.condition, 
                    monthOfUse: data.mothsOfUse, 
                    originalPrice: data.originalPrice, 
                    resalePrice: data.resalePrice,
                    phoneNumber: data.phoneNumber,
                    sellerName: user?.displayName, 
                    brand: data.brand, 
                    sellerEmail: user?.email,
                    pitcture: imgURL, 
                    locatiion: data.locatiion,
                    description: data.description , 
                    postedTime: currentDate
                }
                console.log(product)
                //save doctor informatino to the database 
                fetch('http://localhost:5000/products', {
                    method :"POST", 
                    headers: {
                        'content-type' :  'application/json',
                        authoriatoin: `bearer ${localStorage.getItem('accessToken')}`
                    }, 
                    body: JSON.stringify(product)
                    
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    toast.success('Product added successfully')
                        navigate('/dashboard/myproducts')
                })
            }

        })
       

    }
    return (
        <section className='h-[1100px]  flex justify-center items-center'>


            <div className='w-96 p-7 border shadow-md'>
                <h2 className='text-center text-2xl text-orange-500'> add product</h2>

                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='picture' className="label">
                            <span className="label-text">Product's Picture</span>
                        </label>
                        <input {...register("pitcture", { required: "Picture is required" })} id="picture" type="file" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.pitcture && <p role="alert" className='text-red-600'>{errors.pitcture?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='Product Name' className="label">
                            <span className="label-text">Product's Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} id="Product Name" type="text" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='Resale price' className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input {...register("resalePrice", { required: "Price is required" })} id="Resale price" type="number" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.resalePrice && <p className='text-red-500'>{errors.resalePrice?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='Original price' className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register("originalPrice", { required: "Orignial Price is required" })} id="Original price" type="number" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.originalPrice && <p className='text-red-500'>{errors.originalPrice?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='MonthOfUse' className="label">
                            <span className="label-text">How months you used this product</span>
                        </label>
                        <input {...register("mothsOfUse", { required: "Month-of-use is required" })} id="MonthOfUse" type="number" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.mothsOfUse && <p className='text-red-500'>{errors.mothsOfUse?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='phoneNumber' className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input {...register("phoneNumber", { required: "Phoneis required" })} id="phoneNumber" type="number" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='Location' className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("locatiion", { required: "location required" })} id="Location" type="text" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.locatiion && <p className='text-red-500'>{errors.locatiion?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='Location' className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input {...register("description", { required: "location required" })} id="Description" type="text" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.description && <p className='text-red-500'>{errors.description?.message}</p>
                        }
                    </div>
                    <div>
                        <h1 className='text-orange-500'>Product Condition</h1>
                        <select  {...register('condition')} name='condition' className="select btn m-1 select-bordered w-full mb-5">
                            <option value="excellent">excellent</option>
                            <option value="good">good</option>
                            <option value="fair">fair</option>

                        </select>

                    </div>
                    <div>
                        <h1 className='text-orange-500'>Product Brand/Category</h1>
                        <select  {...register('brand')} name='brand' className="select btn m-1 select-bordered w-full mb-5">
                            <option value="apple">apple</option>
                            <option value="hp">hp</option>
                            <option value="asus">asus</option>

                        </select>

                    </div>

                    <input className='btn mt-4 w-full' value="add" type="submit" />
                </form>

            </div>


        </section>
    );
};

export default AddProduct;