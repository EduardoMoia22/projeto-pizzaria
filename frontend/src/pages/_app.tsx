import '../../styles/globals.css'

import { AppProps } from '../../node_modules/next/app'
import { AuthProvider } from '../contexts/AuthContext'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  ) 
    
}

export default MyApp
