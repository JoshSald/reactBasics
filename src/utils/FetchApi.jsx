export default async function FetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Response status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("FetchData Error:", err);
    throw err;
  }
}
