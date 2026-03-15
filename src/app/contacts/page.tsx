"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (4112) 31-80-31",
    href: "tel:+74112318031",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@avatek.su",
    href: "mailto:info@avatek.su",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Якутск, мкр. 202, корпус 12/2",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн — Пт: 9:00 — 18:00",
    href: undefined,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+7 (964) 428-86-47",
    href: "https://wa.me/79644288647",
  },
];

export default function ContactsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-accent border border-accent/30 rounded-full bg-accent/5">
            Контакты
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="text-accent">с нами</span>
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Обсудим ваш проект и подберём оптимальное решение для защиты вашего
            бизнеса.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
              <h2 className="text-xl font-bold mb-6">Оставить заявку</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@company.ru"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Опишите вашу задачу..."
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors glow"
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-text-muted text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {contacts.map((contact, i) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-surface hover:border-accent/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <contact.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">
                    {contact.label}
                  </p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-sm text-text-primary hover:text-accent transition-colors"
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-sm text-text-primary">{contact.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Offices */}
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold mb-4">Наши офисы</h3>
              <div className="space-y-3">
                {[
                  { city: "Якутск", country: "Россия", main: true },
                  { city: "Торонто", country: "Канада", main: false },
                  { city: "Тель-Авив", country: "Израиль", main: false },
                ].map((office) => (
                  <div
                    key={office.city}
                    className="flex items-center gap-3 text-sm"
                  >
                    <MapPin className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-text-secondary">
                      {office.city}, {office.country}
                    </span>
                    {office.main && (
                      <span className="px-2 py-0.5 text-[10px] font-mono text-accent border border-accent/30 rounded bg-accent/5">
                        HQ
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
