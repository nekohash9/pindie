"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../Components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../Components/Preloader/Preloader";

export default function newGames() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      {newGames ? (
        <CardsListSection
          type="slider"
          id="new"
          title="Новые"
          data={newGames}
        />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
