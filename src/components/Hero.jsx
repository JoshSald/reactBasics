// Hero Section
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
          Turning Scandals into Smiles Since 1994
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you need to sound sincere, steal discreetly, or gaslight the
          nation — we’ve got a strategy deck for that.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-200">
          Book a Cover-Up
        </button>
      </div>
    </section>
  );
}
