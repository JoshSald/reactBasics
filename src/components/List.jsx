import { useState, useEffect } from "react";
import FetchData from "../utils/FetchApi";
import Card from "./Card";
import NavButton from "./NavButton";

export default function List({ baseUrl }) {
  const [characters, setCharacters] = useState([]);
  const [pageUrl, setPageUrl] = useState(baseUrl);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await FetchData(pageUrl);

        if (!data?.results) return;

        const charData = await Promise.all(
          data.results.map(async (char) => {
            const characterDetails = await FetchData(char.url);
            return characterDetails.result.properties;
          })
        );

        setCharacters(charData);
        setNextPage(data.next || null);
        setPrevPage(data.previous || null);
      } catch (err) {
        console.error("Failed to fetch characters:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [pageUrl]);

  return (
    <div className="p-4 mt-8">
      {loading ? (
        <p className="text-center text-gray-500">Loading characters...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {characters.map((char) => (
            <Card key={char.name} data={char} />
          ))}
        </div>
      )}

      <div className="nav-buttons">
        <div className="flex justify-center gap-12 mt-8">
          <NavButton
            onClick={() => setPageUrl(prevPage)}
            disabled={!prevPage || loading}
          >
            Prev
          </NavButton>
          <NavButton
            onClick={() => setPageUrl(nextPage)}
            disabled={!nextPage || loading}
          >
            Next
          </NavButton>
        </div>
      </div>
    </div>
  );
}
