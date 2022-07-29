import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies, destroyCookie } from 'nookies'
import { AuthTokenError } from '../services/errors/AuthTokenError'

export function canSSRAuth<P>(fn: GetServerSideProps<P>){
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const token = parseCookies(ctx)

    if(!token['@nextauth.token']){
      return {
        redirect:{
          destination: '/',
          permanent: false,
        }
      }
    }

    try{
      return await fn(ctx)
    }catch(err){
      if(err instanceof AuthTokenError){
        destroyCookie(ctx, '@nextauth.token')

        return{
          redirect:{
            destination: '/',
            permanent: false
          }
        }
      }
    }
  }
}