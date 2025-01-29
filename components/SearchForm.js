import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm({ initialValue = "" }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue); //initialValue라는 초깃값을 넣어 검색후에도 검색창에 해당 검색어가 그대로 저장

  function handleChange(e) {
    setValue(e.target.value);
  }

  // 검색시 진행되는 함수 구조
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    } // 검색결과가 없으면 / 라는 사이트로 이동(기본 홈페이지)

    router.push(`/search?q=${value}`);
  }

  //검색버튼 클릭시 handleSubmit 함수 실행
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        name="q"
        value={value}
        placeholder="찾고 싶은 옷을 검색해보세요."
        onChange={handleChange}
      />
      <button className={styles.searchButton}>검색</button>
    </form>
  );
}
