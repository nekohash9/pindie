import { useEffect, useState } from "react";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getNormalizedGamesDataByCategory(endpoint, category);
      setData(data);
    }
    fetchData(data);
  }, []);
  return data;
};
