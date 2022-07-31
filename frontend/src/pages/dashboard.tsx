import Head from "next/head";
import { Header } from "../components/Header/Header";
import { canSSRAuth } from "../utils/canSSRAuth";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - Pizzaria</title>
      </Head>
      <div>
        <Header />
        painel
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
