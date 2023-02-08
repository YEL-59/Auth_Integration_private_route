import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/UserContext'

const Home = () => {
    const {user}=useContext(AuthContext)
  return (
    <div>Home:   {user?.email}</div>
  )
}

export default Home