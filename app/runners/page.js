import { getNormalizedGamesDataByCategory } from '../api/api-utils';
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";

export default async function Runner() {
  const runner = await getNormalizedGamesDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      <CardsList id="runner" title="Раннеры" data={runner} />
    </main>
  );
}
