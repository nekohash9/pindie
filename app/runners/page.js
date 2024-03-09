import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";

export default async function Runner() {
  const runner = await getGamesByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      <CardsList id="runner" title="Раннеры" data={runner} />
    </main>
  );
}
