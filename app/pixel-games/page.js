"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../Components/Preloader/Preloader";

export default function pixelGames() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

  return (
    <main>
      {pixelGames ? (
        <CardsList id="pixel" title="Пиксельные игры" data={pixelGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
