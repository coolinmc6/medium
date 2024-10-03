import React from 'react';
import Link from 'next/link'
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-12 flex flex-row text-white">
      <Link href="/" className="text-2xl" >
        <FaHome className="m-2 w-6 h-6"  />
      </Link>
    </div>
  )
}

export default Header