import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Tds() {
  const TDS = getGamesByCategory("TDS");
  return (
    <main className="main-inner">
      <CardsList id="TDS" title="TDS" data={TDS} />
    </main>
  );
}