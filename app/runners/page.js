"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../Components/Preloader/Preloader";

export default function runnerGames() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main>
      {runnerGames ? (
        <CardsListSection
          type="slider"
          id="runner"
          title="Ранеры"
          data={runnerGames}
        />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
