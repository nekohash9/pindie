import { Card } from "../Card/Card";
import Styles from "./CardsList.module.css";

export const CardsList = (props) => {
  const popularGames = [
    {
      id: 1,
      title: "Crystal Kepper",
      developer: "Lonely Baobab",
      description:
        "Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 2,
      title: "Dangeons'n'Caves. Prologue",
      developer: "F-Style",
      description:
        "Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 3,
      title: "Defence of Crystal",
      developer: "MastWe",
      description:
        "Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
  ];

  const newGames = [
    {
      id: 4,
      title: "Go Away",
      developer: "Mahisto",
      description:
        "Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню.",
      image: "https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg",
      link: "https://code.s3.yandex.net/teens/pindie-games/go-away/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 5,
      title: "G.U.N.N.E.R.",
      developer: "IDKWIAm",
      description:
        "Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше.",
      image: "https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/gunner/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 6,
      title: "Space Terror",
      developer: "IDKWIAm",
      description:
        "Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути.",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/space-terror/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 7,
      title: "Square Slayer",
      developer: "niclan",
      description:
        "Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень.",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/square-slayer/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
  ];

  const targetArray = props.id === "popular" ? popularGames : newGames;
  console.log(targetArray);

  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["cards-list"]}>
        {targetArray.map((item) => {
          return (
            <li className={Styles["cards-list__item"]} key={item.id}>
              <a
                href={item.link}
                target="_blank"
                className={Styles["card-list__link"]}
              >
                <Card {...item} />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
