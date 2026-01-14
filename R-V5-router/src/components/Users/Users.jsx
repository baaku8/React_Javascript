import React from 'react'
import { useParams } from 'react-router-dom'
function Users() {
    const {userid} = useParams();
  return (
    <div className='text-white text-center py-4 font-semibold text-3xl'>Users : {userid}</div>
  )
}

export default Users