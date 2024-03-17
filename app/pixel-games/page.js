"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../Components/Preloader/Preloader";

export default function pixelGames() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

  return (
    <main>
      {pixelGames ? (
        <CardsListSection
          type="slider"
          id="pixel"
          title="Пиксельные игры"
          data={pixelGames}
        />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
