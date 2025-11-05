import { Rocket, Star, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_0%,rgba(99,102,241,0.25)_0%,rgba(15,23,42,0)_60%)]" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Star className="h-3.5 w-3.5 text-yellow-400" />
            <span>Сервис управления отзывами №1</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Управляйте репутацией и увеличивайте продажи с OtzVIP
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Отслеживайте отзывы, отвечайте клиентам и анализируйте упоминания о бренде на одной платформе. Мы помогаем бизнесу расти за счет доверия.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
            >
              <Rocket className="h-4 w-4" />
              Попробовать бесплатно
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
            >
              <Shield className="h-4 w-4" />
              Связаться с нами
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-4">
          {[
            { label: "Клиентов по всему СНГ", value: "3 500+" },
            { label: "Площадок для мониторинга", value: "80+" },
            { label: "Средний рост конверсии", value: "+27%" },
            { label: "Среднее время ответа", value: "< 1 ч" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-white/90 backdrop-blur"
            >
              <div className="text-2xl font-semibold sm:text-3xl">{item.value}</div>
              <div className="mt-1 text-xs text-slate-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
