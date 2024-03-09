import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";

export default async function Shooters() {
  const shooter = await getGamesByCategory(endpoints.games, "shooter");
  return (
    <main className="main-inner">
      <CardsList id="shooter" title="Шутеры" data={shooter} />
    </main>
  );
}