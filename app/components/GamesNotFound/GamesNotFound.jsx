import Styles from "./GameNotFound.module.css";
import { NotFoundImage } from "./not-found";

export const GameNotFound = () => {
  return (
    <div className={Styles["not-found"]}>
      <NotFoundImage />
      <h2 className={Styles["not-found__text"]}>
        Упс... <br />
        Такой игры не существует :(
      </h2>
    </div>
  );
};
