import Dropdown from "@/components/Dropdown";
import { useTheme } from "@/lib/ThemeContext";
import styles from "@/styles/Setting.module.css";

export default function Setting() {
  const { theme, setTheme } = useTheme(); //useTheme 훅을 사용해서 Context값 가져오

  return (
    <div>
      <h1 className={styles.title}>설정</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>테마 설정</h2>
        <Dropdown
          className={styles.input}
          name="theme"
          value={theme}
          onChange={(name, value) => setTheme(value)} //테마값을 바꿀때마다 setTheme함수를 실행해서 Context값을 바꾸도록 함
          options={[
            { label: "라이트", value: "light" },
            { label: "다크", value: "dark" },
          ]} //
        />
      </section>
    </div>
  );
}
