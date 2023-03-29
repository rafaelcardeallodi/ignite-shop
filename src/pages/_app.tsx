import { AppProps } from "next/app";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";

import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";

import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
        </Header>

        <Component {...pageProps} />
      </Container>
    </>
  );
}
