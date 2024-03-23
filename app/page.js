"use client";

import { getNormalizedGamesDataByCategory } from "./api/api-utils";
import { Banner } from "./components/Banner/Banner";
import { CardListSection } from "./components/CardsListSection/CardListSection";
import { Promo } from "./components/Promo/Promo";
import { endpoints } from "./api/config";

export default async function Home() {
  const popularGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "popular"
  );
  const newGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "new"
  );

  return (
    <main className="main">
      <Banner />
      <CardListSection
        id="popular"
        title="Популярное"
        data={popularGames}
        type="slider"
      />
      <CardListSection id="new" title="Новинки" data={newGames} type="slider" />
      <Promo />
    </main>
  );
}
