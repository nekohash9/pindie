import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Runner() {
  const runner = getGamesByCategory("runner");
  return (
    <main className="main-inner">
      <CardsList id="runner" title="Раннеры" data={runner} />
    </main>
  );
}