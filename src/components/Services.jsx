// Services Section
function createService(heading, body, image, cta) {
  return { heading, body, image, cta };
}

const services = [
  createService(
    "We say nice things",
    "We specialize in crafting kind, uplifting messages — sometimes we even mean them!",
    "https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Hire us"
  ),
  createService(
    "We say nice things and don’t mean it",
    "Our flattery package: perfect for fragile egos and corporate meetings.",
    "https://plus.unsplash.com/premium_photo-1680012287758-be80960fc746?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Get Started"
  ),
  createService(
    "We eat your food",
    "We’ll attend your meetings, eat your snacks, and call it ‘team building’.",
    "https://plus.unsplash.com/premium_photo-1664299875423-03f81ec5e0e0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Feed Us"
  ),
  createService(
    "We eat your food and gaslight you",
    "Our premium service: confusion, charisma, and crumbs on your desk.",
    "https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?q=80&w=1807&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Book Therapy"
  ),
];

export default function Services() {
  return (
    <section
      className="py-32 bg-gray-200   bg-[url('assets/ignasi_pattern_s.png')]
        bg-repeat
        bg-blend-multiply"
    >
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Services
        </h3>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          We craft words, take bites, and rewrite memories — in that order.
        </p>

        <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ heading, body, image, cta }, i) => (
            <li
              key={i}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 flex flex-col"
            >
              <img
                src={image}
                alt={heading}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-center">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {heading}
                </h4>
                <p className="text-gray-600 mb-6 flex-grow">{body}</p>
                <button className="bg-blue-700 text-white py-2 px-4 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200">
                  {cta}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
