import React from 'react'

function Userlist(user) {
    const  UserMoreInfo=(id)=>{
      console.log(id)
    }
  return (
    
       <tr>
         <td>1</td>
         <td>{user?.name}</td>
         <td>{user?.email}</td>
         <td>{user?.website}</td>
         <td>{user?.company?.name}</td>
         <td>{user?.address?.city} </td>
         <td onClick={() => UserMoreInfo(user.id)}>  ==> </td>
        </tr>

   
  )
}

export default Userlist
