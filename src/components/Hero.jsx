// Hero.jsx
export default function Hero({ heading, body, cta }) {
  return (
    <section
      className="
        text-white
        py-24
        bg-gradient-to-br from-blue-600 to-indigo-700
        bg-[url('assets/ignasi_pattern_s.png')]
        bg-repeat
        bg-blend-multiply
        bg-blue-700/80
      "
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
          {heading}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">{body}</p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-200">
          {cta}
        </button>
      </div>
    </section>
  );
}
