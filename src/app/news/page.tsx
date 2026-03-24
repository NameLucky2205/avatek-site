"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const news = [
  {
    date: "15 марта 2026",
    tag: "Мероприятие",
    title: "AVATEK на форуме ICEБерг 2026",
    summary:
      "Команда AVATEK приняла участие в ежегодном форуме информационной безопасности ICEБерг. Представили новые возможности платформы AVAREANGE и провели мастер-класс по защите от фишинговых атак.",
  },
  {
    date: "28 февраля 2026",
    tag: "Продукт",
    title: "Обновление AVAREANGE 3.0: новый модуль аналитики",
    summary:
      "Выпущена новая версия платформы AVAREANGE с расширенным модулем аналитики, поддержкой интеграции с SIEM-системами и улучшенным дашбордом для руководителей.",
  },
  {
    date: "10 февраля 2026",
    tag: "Партнёрство",
    title: "Новое партнёрство с Positive Technologies",
    summary:
      "AVATEK стал официальным партнёром Positive Technologies. Это позволит предлагать клиентам расширенный набор решений для защиты от кибеугроз.",
  },
  {
    date: "20 января 2026",
    tag: "Компания",
    title: "AVATEK вошёл в топ-20 ИБ-интеграторов России",
    summary:
      "По итогам рейтинга TAdviser Security 100, компания AVATEK вошла в число ведущих интеграторов информационной безопасности России.",
  },
  {
    date: "15 декабря 2025",
    tag: "Проект",
    title: "Завершён проект по защите данных для крупной клиники",
    summary:
      "Успешно реализован комплексный проект по приведению информационных систем медицинского учреждения в соответствие требованиям ФЗ-152 и ФЗ-187.",
  },
  {
    date: "1 декабря 2025",
    tag: "Обучение",
    title: "Запуск программы киберграмотности для госсектора",
    summary:
      "AVATEK запустил образовательную программу по повышению киберграмотности сотрудников государственных учреждений Республики Саха (Якутия).",
  },
];

const tagColors: Record<string, string> = {
  "Мероприятие": "text-cyber-purple border-cyber-purple/30 bg-cyber-purple/5",
  "Продукт": "text-cyber-green border-cyber-green/30 bg-cyber-green/5",
  "Партнёрство": "text-accent border-accent/30 bg-accent/5",
  "Компания": "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
  "Проект": "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
  "Обучение": "text-orange-400 border-orange-400/30 bg-orange-400/5",
};

export default function NewsPage() {
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
            Новости
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Последние <span className="text-accent">новости</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Актуальные события, обновления продуктов и достижения компании
            AVATEK.
          </p>
        </motion.div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group rounded-xl border border-border bg-surface hover:border-accent/20 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono border rounded-full ${tagColors[item.tag] || "text-accent border-accent/30 bg-accent/5"}`}
                  >
                    <Tag className="h-2.5 w-2.5" />
                    {item.tag}
                  </span>
                </div>
                <h2 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-6">
            Хотите быть в курсе новостей? Подпишитесь на нашу рассылку.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="email@company.ru"
              className="flex-1 px-4 py-2.5 rounded-lg bg-surface border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
            <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors">
              Подписаться
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
