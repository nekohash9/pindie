import Styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <a href="./index.html" className={Styles.footer__logo}>
        <span className={Styles.footer__logoname}>pindie</span>
        <span className={Styles.footer__logocopy}>, XXI век</span>
      </a>
      <ul className={Styles["social-list"]}>
        <li className={Styles.sociallist__item}>
          <a
            href=""
            className={`${Styles.button} ${Styles["social-list__link"]}`}
          >
            YT
          </a>
        </li>
        <li className={Styles.sociallist__item}>
          <a
            href=""
            className={`${Styles.button} ${Styles["social-list__link"]}`}
          >
            ВК
          </a>
        </li>
        <li className={Styles.sociallist__item}>
          <a
            href=""
            className={`${Styles.button} ${Styles["social-list__link"]}`}
          >
            TG
          </a>
        </li>
      </ul>
    </footer>
  );
};
