import { useEffect, useState } from "react"

const useSeller = email =>{
    const [isSeller , setisSeller] = useState(false)
    const [isSellerLoading, setisSellerLoading] = useState(true)
    console.log(email)
    useEffect( ()=>{
        if(email){
            fetch(`https://y-dev-parthive.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setisSeller(data.isSeller)
                setisSellerLoading(false)
            })
        }
    }, [email])
    return [isSeller , isSellerLoading]
}

export default useSeller;