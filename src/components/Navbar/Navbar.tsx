import styles from "./Navbar.module.css";
import { MenuItems } from "./MenuItems";

export function Navbar() {
  return (
    <>
      <ul className={styles.topnav}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
