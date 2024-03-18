"use client";

import { endpoints } from "./api/config";
import { Banner } from "./Components/Banner/Banner";
import { CardsListSection } from "./Components/CardsListSection/CardsListSection";
import { Promo } from "./Components/Promo/Promo";
import { useGetDataByCategory } from "./api/api-hooks";
import { Preloader } from "./Components/Preloader/Preloader";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main>
      {popularGames && newGames ? (
        <>
          <Banner />
          <CardsListSection
            type="slider"
            id="popular"
            title="Популярные"
            data={popularGames}
          />
          <CardsListSection
            type="slider"
            id="new"
            title="Новинки"
            data={newGames}
          />
          <Promo />
        </>
      ) : (
        <Preloader />
      )}
    </main>
  );
}
