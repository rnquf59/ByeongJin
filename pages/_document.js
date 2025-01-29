import { Html, Head, Main, NextScript } from "next/document";

//Document파일은 HTML의 뼈대를 만드는것과 같다고 보면 됨
// (Next.js 에서는 서버에서 렌더링할 때만 이 컴포넌트 실행)
// 클라이언트사이드에서는 이컴포넌트 실행 X
// 일반적인 react코드처럼 보이지만 react의 기능을 사용할 수 없음 (ex: useEffect, useState)
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
