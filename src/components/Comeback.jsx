import React from 'react'
import { Link } from 'react-router-dom'
import { chevronLeft } from '../icons'

function Comeback() {
  return (
    <button type="button">
      <Link to='/'>{chevronLeft} Back</Link>
    </button>
  )
}

export default Comeback