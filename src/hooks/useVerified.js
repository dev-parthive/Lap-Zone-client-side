import { useEffect, useState } from "react"

const useVerified = email =>{
    const [isVerified , setisVerified] = useState(false)
    const [isVerifiedLoading, setisVerifiedLoading] = useState(true)

    useEffect( ()=>{
        if(email){
            fetch(`https://y-dev-parthive.vercel.app/seller/verification/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setisVerified(data.isVerify)
                setisVerifiedLoading(false)
            })
        }
    }, [email])
    return [isVerified , isVerifiedLoading]
}

export default useVerified;