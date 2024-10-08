import React, { useContext } from 'react'
import userContext from '../context/UserContext'

function Profile() {
const {user} = useContext(userContext)
  if(!user) return <h1>Please Login</h1>
  return <div>Welcome {user.username}</div>
}

export default Profile;