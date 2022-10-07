import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";
import React, { useEffect } from "react";
import Head from "../components/layout/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <AuthProvider>
      <Head />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
