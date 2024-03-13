"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../Components/Preloader/Preloader";

export default function popularGames() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  return (
    <main>
      {popularGames ? (
        <CardsList id="popular" title="Популярные" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
