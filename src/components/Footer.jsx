// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 text-center space-y-4">
        <p className="max-w-2xl mx-auto text-sm leading-relaxed">
          © {new Date().getFullYear()} The company of people and investors who
          we lowkey care more about than the people.{" "}
          <span className="italic text-gray-400">#SorryNotSorry.</span>
        </p>
      </div>
    </footer>
  );
}
