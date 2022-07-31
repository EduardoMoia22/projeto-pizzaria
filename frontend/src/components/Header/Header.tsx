import Link from "next/link";

import { AuthContext } from "../../contexts/AuthContext";

import { FiLogOut } from 'react-icons/fi'
import { useContext } from "react";
export function Header(){

  const { signOut } = useContext(AuthContext)

  return(
    <header className="h-20">
      <div className="max-w-[1120px] h-20 mx-auto px-5 flex items-center justify-between">        
        <Link href='/dashboard'>
          <img src="/logo.svg " width={190} height={60} className="cursor-pointer"/>
        </Link>

        <nav className="flex items-center">
          <Link href='/category'>
            <a className="text-white px-2 inline-block hover:text-primary transition-colors">Categoria</a>
          </Link>

          <Link href='/product'>
            <a className="text-white px-2 inline-block ml-8 hover:text-primary transition-colors">Cardápio</a>
          </Link>

          <button onClick={signOut} className="ml-8 bg-transparent border-0 hover:scale-125 transition-transform">
            <FiLogOut color="#FFF" size={24}/>
          </button>
        </nav>
      </div>
    </header>
  )
}