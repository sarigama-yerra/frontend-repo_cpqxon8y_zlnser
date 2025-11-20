export default function Footer() {
  return (
    <footer className="mt-20 border-t border-blue-800/50 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4 text-blue-100">
        <div>
          <h4 className="text-white font-bold text-lg mb-2">Website <span className="text-amber-400">Koning</span></h4>
          <p className="text-blue-200/80 text-sm">Snel. Betaalbaar. Conversiegericht. Wij bouwen websites die leads genereren voor lokale MKB-ondernemers.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-2">Pagina's</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/diensten" className="hover:text-white">Diensten</a></li>
            <li><a href="/over" className="hover:text-white">Over ons</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-2">Legal</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Privacybeleid</a></li>
            <li><a href="#" className="hover:text-white">Algemene voorwaarden</a></li>
            <li><a href="#" className="hover:text-white">Cookieverklaring</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-2">Contact</h5>
          <p className="text-sm text-blue-200/80">Lokaal bedrijf • We begrijpen ondernemers</p>
          <p className="text-sm text-blue-200/80">E: hallo@websitekoning.nl</p>
          <p className="text-sm text-blue-200/80">T: 06 123 456 78</p>
        </div>
      </div>
      <div className="border-t border-blue-800/50 py-4 text-center text-blue-300 text-sm">
        © {new Date().getFullYear()} Website Koning. Alle rechten voorbehouden.
      </div>
    </footer>
  )
}
