import HeroSection from "./components/HeroSection";
import FeaturesGrid from "./components/FeaturesGrid";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import { Star } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white">
            <Star className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold">OtzVIP</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#features" className="hover:text-white">Возможности</a>
          <a href="#pricing" className="hover:text-white">Тарифы</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#contacts" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Контакты</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 text-slate-300">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white">
                <Star className="h-4 w-4" />
              </div>
              <span className="text-lg font-semibold">OtzVIP</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Платформа для мониторинга и управления отзывами. Пишите нам: hello@otzvip.ru
            </p>
          </div>
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} OtzVIP. Все права защищены.</div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
