import Header from "@/components/Header";
import Container from "@/components/Container";
import "@/styles/global.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import Head from "next/head";

//모든 페이지에 공통으로 리액트 코드를 적용하고 싶을때 사용
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel="icon" href="/smiley.ico" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
