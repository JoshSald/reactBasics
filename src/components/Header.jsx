// Header.jsx
import { Nav } from "./Nav";

export default function Header({ logo }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl flex align-center gap-1 font-extrabold text-blue-700 tracking-tight hover:text-blue-800 transition-colors duration-200">
          {logo && (
            <span>
              <img className="max-w-[36px]" src={logo} alt="Logo" />
            </span>
          )}
          SpinCraft
        </h1>
        <Nav links={["About", "Services", "Contact"]} />
      </div>
    </header>
  );
}
