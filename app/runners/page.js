"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../Components/Preloader/Preloader";

export default function runnerGames() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main>
      {runnerGames ? (
        <CardsList id="runner" title="Ранеры" data={runnerGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
