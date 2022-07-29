import { FormEvent, useState, useContext } from "react"
import Head from "../../node_modules/next/head"
import Image from "../../node_modules/next/image"
import Link from "../../node_modules/next/link"

import logoImg from '../../public/logo.svg'
import { Button } from "../components/ui/Button/index"
import { Input } from "../components/ui/Input/index"
import { api } from "../services/apiClient"

import { AuthContext } from "../contexts/AuthContext"
import { toast } from "react-toastify"

export default function SignUp() {

  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent){
    e.preventDefault()

    if(name === '' || email === '' || password === ''){
      toast.warning('Preencha todos os campos')
      return
    }
    
    setLoading(true)
    
    let data = {
      name, 
      email,
      password
    }

    signUp(data)

    setLoading(false)

  }
  
  return (
    <>
      <Head>
        <title>Eduardo Pizza - Faça seu login</title>
      </Head>
      <div className="min-h-screen flex justify-center items-center flex-col bg-background">
        <Image src={logoImg} alt="Logo Sujeito Pizza"/>

        <div className="mt-8 w-[90%] flex items-center justify-center flex-col py-8 px-6 sm:w-[600px]">
          
          <h1 className="text-white pb-4 font-semibold text-lg">Criando sua conta</h1>

          <form className="w-[90%] flex flex-col" onSubmit={handleSubmit}>
            <Input 
              type="text" 
              placeholder="Nome da empresa"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <Input 
              type="email" 
              placeholder="Digite seu email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Input 
              type="password" 
              placeholder="Sua senha"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <Button
              type="submit"
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
