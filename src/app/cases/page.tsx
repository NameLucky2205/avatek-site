"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Server,
  FlaskConical,
  KeyRound,
  HeartPulse,
  Landmark,
  Factory,
} from "lucide-react";

const cases = [
  {
    icon: HeartPulse,
    client: "Республиканская больница",
    industry: "Медицина",
    title: "Внедрение ЛИС и защита персональных данных пациентов",
    challenge:
      "Медицинское учреждение нуждалось в автоматизации лабораторных процессов и приведении систем в соответствие ФЗ-152.",
    solution:
      "Внедрена лабораторная информационная система, проведён аудит ИБ, разработана документация, настроены средства защиты информации.",
    results: [
      "Время обработки анализов сокращено на 60%",
      "Полное соответствие ФЗ-152 и ФЗ-187",
      "Успешное прохождение проверки Роскомнадзора",
    ],
  },
  {
    icon: Landmark,
    client: "Правительство Республики Саха",
    industry: "Госсектор",
    title: "Комплексная защита государственной информационной системы",
    challenge:
      "Необходимо было обеспечить защиту ГИС в соответствии с требованиями ФСТЭК и обучить персонал основам кибербезопасности.",
    solution:
      "Проведена аттестация ГИС, внедрены средства защиты, развёрнута платформа AVAREANGE для обучения 500+ сотрудников.",
    results: [
      "Аттестация ГИС по требованиям ФСТЭК",
      "Снижение инцидентов ИБ на 80%",
      "Обучено более 500 сотрудников",
    ],
  },
  {
    icon: Factory,
    client: "Промышленное предприятие",
    industry: "Промышленность",
    title: "Защита АСУ ТП и промышленной сети",
    challenge:
      "Предприятие столкнулось с рисками кибератак на промышленные системы управления и нуждалось в сегментации сети.",
    solution:
      "Проведён аудит промышленной сети, внедрена сегментация, установлены средства мониторинга и обнаружения вторжений.",
    results: [
      "Изоляция АСУ ТП от корпоративной сети",
      "Внедрение системы мониторинга 24/7",
      "Нулевые инциденты за 12 месяцев",
    ],
  },
  {
    icon: Building2,
    client: "Крупная строительная компания",
    industry: "Строительство",
    title: "Системная интеграция и миграция IT-инфраструктуры",
    challenge:
      "Компания расширялась и нуждалась в единой IT-инфраструктуре для 5 филиалов с централизованным управлением.",
    solution:
      "Спроектирована и внедрена единая серверная инфраструктура, настроены VPN-каналы между филиалами, развёрнуто резервное копирование.",
    results: [
      "Единая инфраструктура для 5 филиалов",
      "Время простоя снижено до 0.1%",
      "Централизованное управление IT",
    ],
  },
  {
    icon: KeyRound,
    client: "Сеть аптек",
    industry: "Фармацевтика",
    title: "Внедрение электронной подписи и защищённого документооборота",
    challenge:
      "Необходимо было перевести документооборот на ЭДО с квалифицированной электронной подписью для всех точек.",
    solution:
      "Выпущены КЭП для всех сотрудников, настроена интеграция с системой ЭДО, проведено обучение персонала.",
    results: [
      "100% документооборота переведено на ЭДО",
      "Время подписания сократилось в 10 раз",
      "Выпущено 120+ электронных подписей",
    ],
  },
  {
    icon: Server,
    client: "IT-компания",
    industry: "Технологии",
    title: "Развёртывание защищённого ЦОД и аутсорсинг безопасности",
    challenge:
      "Стартап нуждался в надёжной инфраструктуре для хостинга SaaS-продукта с соблюдением требований безопасности.",
    solution:
      "Размещение в защищённом ЦОД AVATEK, настройка мониторинга, WAF, DDoS-защиты. Передача функций ИБ на аутсорсинг.",
    results: [
      "Доступность сервиса 99.95%",
      "Отражено 200+ DDoS-атак за год",
      "Экономия 40% на штатных ИБ-специалистах",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function CasesPage() {
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
            Кейсы
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-accent">проекты</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Примеры реализованных проектов в различных отраслях. Каждый кейс —
            это индивидуальное решение под задачи клиента.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="space-y-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-surface hover:border-accent/20 transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <c.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">{c.title}</h2>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-text-muted">
                          {c.client}
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-mono text-accent border border-accent/30 rounded bg-accent/5">
                          {c.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Задача
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Решение
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Результат
                    </h3>
                    <ul className="space-y-1.5">
                      {c.results.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <ShieldCheck className="h-4 w-4 text-cyber-green shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp} className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            У вас похожая задача? Давайте обсудим решение для вашего бизнеса.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors glow"
          >
            Обсудить проект
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
