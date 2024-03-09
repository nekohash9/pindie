import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";

export default async function PixelGames() {
  const pixelGames = await getGamesByCategory(endpoints.games, "pixel");
  return (
    <main className="main-inner">
      <CardsList id="pixel" title="Пиксельные" data={pixelGames} />
    </main>
  );
}