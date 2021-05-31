import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      name: 'Minion X',
      placeCount: 10
    },
    {
      id: 'u2',
      image: 'https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      name: 'Wall-E',
      placeCount: 1
    },
    {
      id: 'u3',
      image: 'https://images.unsplash.com/photo-1589810633905-e0546e1a5620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Storm Tapper',
      placeCount: 13
    }
  ]

  return (
    <div>
      <h1>beep users!</h1>
      <UsersList items={USERS} />
    </div>
  )
}

export default Users
