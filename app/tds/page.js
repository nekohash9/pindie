import { getNormalizedGamesDataByCategory } from '../api/api-utils';
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";

export default async function Tds() {
  const TDS = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      <CardsList id="TDS" title="TDS" data={TDS} />
    </main>
  );
}
