import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { Header } from "../components/Header/Header";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { canSSRAuth } from "../utils/canSSRAuth";

type ItemProps = {
  id: string;
  name: string;
};

interface CategoryProps {
  categoryList: ItemProps[];
}

export default function Product({ categoryList }: CategoryProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);
  const [categories, setCategories] = useState(categoryList || []);
  const [categorySelected, setCategorySelected] = useState(0);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleChangeCategory(e) {
    setCategorySelected(e.target.value);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const data = new FormData();

      if (name === "" || price === "" || desc === "" || imageAvatar === null) {
        toast.error("Preencha todos os campos!");
        return;
      }

      data.append("name", name);
      data.append("price", price);
      data.append("description", desc);
      data.append("categoryId", categories[categorySelected].id);
      data.append("file", imageAvatar);

      const apiClient = setupAPIClient();

      await apiClient.post("products", data);

      toast.success("Cadastrado com sucesso");
    } catch (err) {
      console.log(err);
      toast.error("Erro ao cadastrar!");
    }

    setName("");
    setPrice("");
    setDesc("");
    setImageAvatar("");
    setAvatarUrl("");
  }
  return (
    <>
      <Head>
        <title>Novo Produto - Pizzaria</title>
      </Head>

      <div>
        <Header />
        <main className="max-w-[720px] my-16 mx-auto px-8 flex flex-col justify-between">
          <h1 className="text-white text-2xl font-bold">Novo Produto</h1>

          <form className="flex flex-col my-4" onSubmit={handleSubmit}>
            <label className="w-full h-72 bg-inputbg mb-4 rounded-md flex justify-center items-center cursor-pointer">
              <span className="z-50 absolute opacity-70 transition-all hover:opacity-100 hover:scale-110">
                <FiUpload size={30} color="#FFF" />
              </span>

              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleFile}
              />

              {avatarUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={avatarUrl}
                  alt="Foto do produto"
                />
              )}
            </label>

            <select
              className="w-full h-10 rounded-md mb-4 text-white bg-inputbg border border-border px-2"
              value={categorySelected}
              onChange={handleChangeCategory}
            >
              {categories.map((item, index) => (
                <option key={item.id} value={index}>
                  {item.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Digite o nome do produto"
              className="rounded-md mb-4 text-white bg-inputbg border border-border h-10 px-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Preço do produto"
              className="rounded-md mb-4 text-white bg-inputbg border border-border h-10 px-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <textarea
              placeholder="Descreva seu produto..."
              className="w-full min-h-[120px] resize-none rounded-md mb-4 text-white bg-inputbg border border-border p-2"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <button className="rounded-md bg-secondaty h-10 border-0 text-lg font-bold text-black">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/category");

  return {
    props: {
      categoryList: response.data,
    },
  };
});
