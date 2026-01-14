import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData();
  return (
    <>
    <h1 className='text-white'>github</h1>
    <p className='text-white font-semibold text-xl'>My id:{data?.id}</p>
    </>
  )
}

export default Github

export const githubInfo=async ()=>{
    const response=await fetch('https://api.github.com/users/baaku8');
    // console.log(response.json());
    return response.json();
}