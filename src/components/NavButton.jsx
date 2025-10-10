export default function NavButton({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-yellow-400 text-black font-bold px-4 py-2 rounded shadow hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
