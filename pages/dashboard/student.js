import React from 'react'
import axios from 'axios'
import { NextResponse } from 'next/server'

export default function Student() {

  axios.get(`${process.env.API_URL}/student`, { withCredentials: true })  
    .catch((err) => {
      if (!err.response.data.success) return NextResponse.redirect(`${process.env.BASE_URL}/`)
    })


  return (
    <h1>Success student</h1>
  )
}