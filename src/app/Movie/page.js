"use client";
import Link from 'next/link'
import React, { useEffect } from 'react'
function Movie() {

  return (
    <div>
        <h1>Movie page</h1>
        <Link href={'/Movie/heloo'}>click me</Link>
      
    </div>
  )
}

export default Movie
