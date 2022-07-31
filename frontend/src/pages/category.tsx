import Head from "next/head";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../components/Header/Header";
import { api } from "../services/apiClient";
import { canSSRAuth } from "../utils/canSSRAuth";

export default function Category() {
  const [name, setName] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (name === "") {
      return;
    }

    const apiClient = api;
    await apiClient.post("/category", {
      name: name,
    });

    toast.success("Categoria cadastrada com sucesso!");
    setName("");
  }

  return (
    <>
      <Head>
        <title>Nova Categoria - Pizzaria</title>
      </Head>
      <div>
        <Header />

        <main className="max-w-[720px] my-16 mx-auto px-8 flex flex-col justify-between">
          <h1 className="text-white text-2xl font-bold">
            Cadastrar categorias
          </h1>

          <form className="flex flex-col my-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className="bg-inputbg border p-4 h-10 rounded-md text-white border-border mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button
              type="submit"
              className="h-10 bg-secondaty font-bold text-lg rounded-md text-black"
            >
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
