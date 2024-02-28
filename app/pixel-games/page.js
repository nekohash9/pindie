import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function PixelGames() {
  const pixelGames = getGamesByCategory("pixel");
  return (
    <main className="main-inner">
      <CardsList id="pixel" title="Пиксельные" data={pixelGames} />
    </main>
  );
}