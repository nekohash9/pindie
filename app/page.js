import { getGamesByCategory } from "./data/data-utils";
import { Banner } from "./Components/Banner/Banner";
import { CardsListSection } from "./Components/CardsListSection/CardsListSection";
import { Promo } from "./Components/Promo/Promo";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main>
      <Banner />
      <CardsListSection
        type="slider"
        id="popular"
        title="Популярные"
        data={popularGames}
      />
      <CardsListSection
        type="slider"
        id="new"
        title="Новинки"
        data={newGames}
      />
      <Promo />
    </main>
  );
}
