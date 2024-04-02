import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}></h2>
        Welcome to app!
      </div>
    </>
  );
}

