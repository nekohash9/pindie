import Styles from "./Card.module.css";
import { NewCardsFragment } from "../CardsListSection/NewCardsFragment";

export const Card = (props) => {
  return (
    <article className={Styles.card}>
      <img src={props.image} className={Styles["image"]} />
      <div className={Styles["content-block"]}>
        <h3 className={Styles["title"]}>{props.title}</h3>
        <p className={Styles["description"]}>{props.description}</p>
        <div className={Styles["info-container"]}>
          <p className={Styles["author"]}>
            Автор: <span className={Styles["accent"]}>{props.developer}</span>
          </p>
          <p className={Styles["votes"]}>
            Голосов на сайте:{" "}
            <span className={Styles["accent"]}>{props.users.length}</span>
          </p>
        </div>
      </div>
    </article>
  );
};
