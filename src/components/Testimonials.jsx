// Testimonials.jsx
export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          World Leaders Love Us*
        </h2>
        <p className="text-gray-500 mb-12 text-sm italic">
          *Names changed to protect the guilty.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center"
            >
              <p className="text-lg italic text-gray-700 mb-6">“{t.quote}”</p>
              <h4 className="font-bold text-blue-700">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
