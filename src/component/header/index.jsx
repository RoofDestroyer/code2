import { Link } from "react-router-dom";
import styles from './style.module.css'

const Header = () => {
  return (
    <div>
      <div className={styles.container} >
        <ul className={styles.list}>
          <li>
            <Link to="/">Дом</Link>
          </li>
          <li>
            <Link to="/work">Работа</Link>
          </li>
          <li>
            <Link to="/about">Обо мне</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
