"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../Components/Preloader/Preloader";

export default function shooterGames() {
  const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

  return (
    <main>
      {shooterGames ? (
        <CardsListSection
          type="slider"
          id="shooter"
          title="Шутеры"
          data={shooterGames}
        />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
