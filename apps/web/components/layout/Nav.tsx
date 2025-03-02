import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav>
      <Link href="/" className="active">
        Home
      </Link>
      <Link href="/">About</Link>
    </nav>
  )
}

export default Nav
