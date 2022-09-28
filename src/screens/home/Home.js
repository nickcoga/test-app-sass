import classes from "./Home.module.scss";

export default function Home() {
  return (
    <div className={classes.home}>
      <h2>Hola soy Home</h2>
      <div className={classes.app}>
        <h1>Nick Test SASS</h1>
        <h2>APP Test</h2>
      </div>
    </div>
  );
}
