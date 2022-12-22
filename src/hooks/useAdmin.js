import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin , setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)

    // useEffect( ()=>{
    //     if(email){
    //         fetch(`https://y-dev-parthive.vercel.app/users/admin/${email}`)
    //         .then(res => res.json())
    //         .then(data =>{
    //             console.log(data)
    //             setIsAdmin(data.isdAdmin)
    //             setIsAdminLoading(false)
    //         })
    //     }
    // }, [email]);



    return [isAdmin , isAdminLoading]
}

export default useAdmin;