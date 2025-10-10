export default function Card({ data }) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black border border-yellow-400/40 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.3)] p-6 text-gray-100 transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]">
      <h2 className="font-extrabold text-yellow-400 text-xl mb-2 tracking-wide uppercase">
        {data.name}
      </h2>

      <div className="space-y-1 text-sm text-gray-300">
        <p>
          <span className="text-yellow-300">Birth Year:</span> {data.birth_year}
        </p>
        <p>
          <span className="text-yellow-300">Height:</span> {data.height} cm
        </p>
        <p>
          <span className="text-yellow-300">Weight:</span> {data.mass} kg
        </p>
      </div>
    </div>
  );
}
