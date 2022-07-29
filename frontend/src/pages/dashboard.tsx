import { canSSRAuth } from "../utils/canSSRAuth"

export default function Dashboard(){
  return(
    <h1>Voce logou na dashboard</h1>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})