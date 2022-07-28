import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Student() {
  const router = useRouter()

  const isAuthenticated = () => {
    axios.get(`${process.env.API_URL}/student`, { withCredentials: true })  
      .catch((err) => {
        if (!err.response.data.success) return router.push(`/login/student`)
      })
  }

  isAuthenticated()

  return (
    <h1>Success student</h1>
  )
}