import { Check } from "lucide-react";

const plans = [
  {
    name: "Старт",
    price: "1 990 ₽/мес",
    highlight: false,
    features: [
      "До 10 площадок",
      "Алерты о новых отзывах",
      "Базовые отчеты",
      "Шаблоны ответов",
    ],
  },
  {
    name: "Бизнес",
    price: "5 900 ₽/мес",
    highlight: true,
    features: [
      "Безлимит площадок",
      "Продвинутая аналитика",
      "Экспорт и API-доступ",
      "AI-подсказки ответов",
    ],
  },
  {
    name: "Премиум",
    price: "Индивидуально",
    highlight: false,
    features: [
      "SLA 99.9% и выделенная поддержка",
      "Интеграции под ключ",
      "Персональный менеджер",
      "Обучение команды",
    ],
  },
];

function PlanCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border border-white/10 p-6 text-white/90 backdrop-blur ${
        plan.highlight ? "bg-white/10 ring-1 ring-indigo-400/40" : "bg-white/5"
      }`}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-6 rounded-full bg-indigo-500 px-3 py-1 text-xs font-medium text-white shadow-lg shadow-indigo-500/30">
          Лучший выбор
        </span>
      )}
      <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
      <div className="mt-3 text-2xl font-semibold text-white/90">{plan.price}</div>
      <ul className="mt-6 flex flex-1 flex-col gap-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-200">
            <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-medium transition ${
          plan.highlight
            ? "bg-indigo-500 text-white hover:bg-indigo-400"
            : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
        }`}
      >
        Выбрать тариф
      </button>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Прозрачные тарифы</h2>
          <p className="mt-4 text-slate-300">Начните бесплатно и масштабируйтесь, когда будете готовы.</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
