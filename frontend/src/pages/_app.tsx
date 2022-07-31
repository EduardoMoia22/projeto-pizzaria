import "../../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { AppProps } from "../../node_modules/next/app";
import { AuthProvider } from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </AuthProvider>
  );
}

export default MyApp;
