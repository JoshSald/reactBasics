// Nav.jsx
export function Nav() {
  return (
    <nav>
      <ul className="flex gap-8 text-gray-700 font-medium">
        <li className="hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer">
          About
        </li>
        <li className="hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
}
