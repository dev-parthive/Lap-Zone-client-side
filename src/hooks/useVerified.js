import { useEffect, useState } from "react"

const useVerified = email =>{
    const [isVerified , setisVerified] = useState(false)
    const [isVerifiedLoading, setisVerifiedLoading] = useState(true)

    useEffect( ()=>{
        if(email){
            fetch(`http://localhost:5000/seller/verification/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setisVerified(data.isVerified)
                setisVerifiedLoading(false)
            })
        }
    }, [email])
    return [isVerified , isVerifiedLoading]
}

export default useVerified;