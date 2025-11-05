import { MessageSquare, TrendingUp, ShieldCheck, Zap, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Единая платформа",
    desc: "Отзывы из Яндекс, Google, 2ГИС, Авито и др. в одном месте.",
  },
  {
    icon: TrendingUp,
    title: "Аналитика и отчеты",
    desc: "Понимайте динамику рейтинга и влияния на продажи.",
  },
  { icon: ShieldCheck, title: "Защита репутации", desc: "Мгновенные алерты и сценарии реакции." },
  { icon: Zap, title: "Автоответы", desc: "Шаблоны, ИИ-подсказки и готовые сценарии общения." },
  { icon: Globe, title: "Мультиканальность", desc: "Поддержка маркетплейсов, соцсетей и карт." },
  { icon: Clock, title: "24/7 мониторинг", desc: "Не пропустите ни одного отзыва и упоминания." },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Все инструменты для роста доверия</h2>
          <p className="mt-4 text-slate-300">
            Собираем, структурируем и помогаем работать с обратной связью от клиентов. Быстро. Удобно. Эффективно.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 text-white/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur transition hover:from-white/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-400/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
