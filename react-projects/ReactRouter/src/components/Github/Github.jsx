import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [apidata, setData] = useState([])
    const apidata=useLoaderData()
//     useEffect(()=>{
//         fetch('https://api.github.com/users/AndronicusLepcha')
//         .then(res => res.json())
//         .then(res=>{
//             console.log(res)
//             setData(res)})
//    },[])
  return (
    <div className='bg-green-600 m-4 text-white text-3xl text-center'>Github Followers : {apidata?.followers}
    <img src={apidata?.avatar_url} width={200} alt="github profile" />
    </div>
  )
}

export default Github
export const gitHubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/AndronicusLepcha')
    return response.json()
}