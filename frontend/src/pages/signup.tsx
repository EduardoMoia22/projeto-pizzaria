import { useState } from "react"
import Head from "../../node_modules/next/head"
import Image from "../../node_modules/next/image"
import Link from "../../node_modules/next/link"

import logoImg from '../../public/logo.svg'
import { Button } from "../components/ui/Button/index"
import { Input } from "../components/ui/Input/index"


export default function Home() {
  const [loading, setLoading] = useState(false)
  
  return (
    <>
      <Head>
        <title>Eduardo Pizza - Faça seu login</title>
      </Head>
      <div className="min-h-screen flex justify-center items-center flex-col bg-background">
        <Image src={logoImg} alt="Logo Sujeito Pizza"/>

        <div className="mt-8 w-[90%] flex items-center justify-center flex-col py-8 px-6 sm:w-[600px]">
          
          <h1 className="text-white pb-4 font-semibold text-lg">Criando sua conta</h1>

          <form className="w-[90%] flex flex-col">
            <Input type="text" placeholder="Nome da empresa"/>
            <Input type="email" placeholder="Digite seu email"/>
            <Input type="password" placeholder="Sua senha"/>

            <Button
              type="submit"
              onClick={() => setLoading(true)}
              loading={loading}
            >
              Acessar
            </Button>
          </form>

          <Link href='/'>
            <a className="font-bold cursor-pointer mt-4">Já possuo uma conta</a>
          </Link>
        </div>
      </div>
    </>
  )
}
