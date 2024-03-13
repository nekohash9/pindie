"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../Components/Preloader/Preloader";

export default function tdsGames() {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");

  return (
    <main>
      {tdsGames ? (
        <CardsList id="TDS" title="TDS" data={tdsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
