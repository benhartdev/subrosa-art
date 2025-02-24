export default function Footer() {
    return (
      <footer className="bg-white shadow-inner mt-8 p-4 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Sub Rosa Art - Tous droits réservés.</p>
        <nav className="mt-2 space-x-4">
          <a href="/mentions-legales" className="hover:text-blue-600 transition">Mentions Légales</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
      </footer>
    );
  }
  