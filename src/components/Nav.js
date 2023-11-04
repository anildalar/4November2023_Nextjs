import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <ul className="nav">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" href="/login">Login</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" href="/register">Register</Link>
        </li>
    </ul>

  )
}
