"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../Components/Preloader/Preloader";

export default function popularGames() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  return (
    <main>
      {popularGames ? (
        <CardsListSection
          type="slider"
          id="popular"
          title="Популярные"
          data={popularGames}
        />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
