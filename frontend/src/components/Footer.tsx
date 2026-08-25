export function Footer() {
  return (
    <footer className="glass pt-20 pb-10 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Raqam<span className="text-primary">ly</span>
              </span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-sm">
              Sirdaryo viloyatining raqamli kelajagini birgalikda quramiz. Zamonaviy IT yechimlar va sifatli servis.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Bo'limlar</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-neutral-400 hover:text-primary transition-colors">Bosh sahifa</a></li>
              <li><a href="/services" className="text-neutral-400 hover:text-primary transition-colors">Xizmatlar</a></li>
              <li><a href="/#portfolio" className="text-neutral-400 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="/#about" className="text-neutral-400 hover:text-primary transition-colors">Biz haqimizda</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Aloqa</h4>
            <ul className="space-y-4">
              <li className="text-neutral-400">Sirdaryo viloyati, Guliston sh.</li>
              <li><a href="tel:+998901234567" className="text-neutral-400 hover:text-primary transition-colors">+998 90 123 45 67</a></li>
              <li><a href="mailto:info@raqamly.uz" className="text-neutral-400 hover:text-primary transition-colors">info@raqamly.uz</a></li>
              <li className="pt-4">
                <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors">
                  @RaqamlyBot (Telegram)
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Raqamly. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
