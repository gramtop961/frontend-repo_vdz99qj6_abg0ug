import { useState } from "react";

const faqs = [
  {
    q: "Какие площадки поддерживаются?",
    a: "Мы работаем с основными площадками СНГ: Яндекс Карты, Google Maps, 2ГИС, Отзовики, Авито, Оzon, Wildberries и др.",
  },
  {
    q: "Можно ли подключить несколько филиалов?",
    a: "Да, поддерживаем сеть филиалов с раздельной статистикой и правами доступа.",
  },
  {
    q: "Есть ли API?",
    a: "Да, для тарифов Бизнес и выше доступен API-доступ для интеграций.",
  },
  {
    q: "Чем отличается Премиум?",
    a: "Индивидуальные интеграции, выделенная поддержка, обучение и персональный менеджер.",
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90">
      <button
        className="flex w-full items-center justify-between gap-4 text-left text-white"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-base font-medium">{q}</span>
        <span className="text-xl leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-sm text-slate-300">{a}</p>}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Частые вопросы</h2>
          <p className="mt-4 text-slate-300">Если не нашли ответ — напишите нам, и мы поможем.</p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
