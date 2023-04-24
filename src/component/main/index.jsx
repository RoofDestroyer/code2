import { Route, Switch } from "react-router";
import Home from "../home";
import Work from "../work";
import AboutMe from "../about-me";
import styles from "./style.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={AboutMe} />
      </Switch>
    </div>
  );
};

export default Main;
