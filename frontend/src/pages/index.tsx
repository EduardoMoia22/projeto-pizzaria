import Head from "../../node_modules/next/head"
import Image from "../../node_modules/next/image"

import logoImg from '../../public/logo.svg'
import { Input, TextArea } from "../components/ui/Input/index"


export default function Home() {
  return (
    <>
      <Head>
        <title>Eduardo Pizza - Faça seu login</title>
      </Head>
      <div className="flex flex-col justify-center items-center gap-14 h-screen w-[1080px] max-w-[90%] mx-auto">
        <Image src={logoImg} alt="Lo  go Sujeito Pizza"/>

        <div>
          <form className="flex flex-col items-center justify-center w-[600px]">
            <Input type="email" placeholder="Digite seu email"/>
            <Input type="password" placeholder="Sua senha"/>
          </form>
        </div>
      </div>
    </>
  )
}
