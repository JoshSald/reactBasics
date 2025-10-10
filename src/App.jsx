import List from "./components/List";
import StarWarsLogo from "./assets/logo.svg";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-8 text-gray-100">
      <div className="container flex flex-col items-center mx-auto">
        {/* Logo */}
        <div className="mt-6">
          <img
            src={StarWarsLogo}
            alt="Star Wars Logo"
            className="w-64 sm:w-80"
          />
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-400 mt-4 mb-8 max-w-xl">
          Explore characters from a galaxy far, far away. Click “Next” to see
          more heroes, villains, and scoundrels.
        </p>

        {/* Character List */}
        <List baseUrl="https://swapi.tech/api/people" />
      </div>
    </main>
  );
}
