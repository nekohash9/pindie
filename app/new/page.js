"use client";
import { useGetDataByCategory } from "../api/api-hooks.js";
import { CardListSection } from "../components/CardsListSection/CardListSection.jsx";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader.jsx";

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
