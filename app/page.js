import Image from "next/image";
import styles from "./page.module.css";

import { getGamesByCategory } from "./data/data-utils.js";

import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { PopularCardsFragment } from "./components/CardsList/PopularCardsFragment";
import { NewCardsFragment } from "./components/CardsList/NewCardsFragment";
import { Promo } from "./components/Promo/Promo";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
