import { FormEvent, useContext, useState } from "react";

import Head from "../../node_modules/next/head";
import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

import logoImg from "../../public/logo.svg";
import { Button } from "../components/ui/Button/index";
import { Input } from "../components/ui/Input/index";

import { toast } from "react-toastify";

import { AuthContext } from "../contexts/AuthContext";
import { canSSRGuest } from "../utils/canSSRGuest";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.warning("Preencha todos os campos");
      return;
    }

    setLoading(true);

    let data = {
      email,
      password,
    };

    await signIn(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Eduardo Pizza - Faça seu login</title>
      </Head>
      <div className="min-h-screen flex justify-center items-center flex-col bg-background">
        <Image src={logoImg} alt="Logo Sujeito Pizza" />

        <div className="mt-8 w-[90%] flex items-center justify-center flex-col py-8 px-6 sm:w-[600px]">
          <form className="w-[90%] flex flex-col" onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
              Acessar
            </Button>
          </form>

          <Link href="/signup">
            <a className="font-bold cursor-pointer mt-4">
              Não possui uma conta? Cadastre-se
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
