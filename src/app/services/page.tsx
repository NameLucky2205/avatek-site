"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  KeyRound,
  Bug,
  Server,
  FlaskConical,
  Code,
  Database,
  Headphones,
  Lock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Защита персональных данных",
    desc: "Полный комплекс мероприятий по приведению информационных систем в соответствие требованиям законодательства.",
    features: [
      "Аудит на соответствие ФЗ-152, ФЗ-187, ФЗ-149",
      "Разработка организационно-распорядительной документации",
      "Подготовка к проверкам Роскомнадзора и ФСТЭК",
      "Аттестация информационных систем",
    ],
  },
  {
    icon: KeyRound,
    title: "Электронная подпись (ЭЦП)",
    desc: "Собственный удостоверяющий центр с полным сопровождением — от выпуска до интеграции.",
    features: [
      "Выпуск квалифицированной электронной подписи",
      "Интеграция с системами ЭДО",
      "Настройка рабочих мест",
      "Техническая поддержка",
    ],
  },
  {
    icon: Bug,
    title: "Управление уязвимостями",
    desc: "Систематическое выявление, классификация и устранение уязвимостей в IT-инфраструктуре.",
    features: [
      "Сканирование сетевого периметра",
      "Пентестирование (тестирование на проникновение)",
      "Анализ защищённости веб-приложений",
      "Рекомендации по устранению",
    ],
  },
  {
    icon: Server,
    title: "Системная интеграция",
    desc: "Проектирование, внедрение и сопровождение комплексных IT-решений для вашего бизнеса.",
    features: [
      "Проектирование IT-инфраструктуры",
      "Поставка и настройка оборудования",
      "Внедрение корпоративных систем",
      "Миграция данных и сервисов",
    ],
  },
  {
    icon: FlaskConical,
    title: "Лабораторные ИС (ЛИС)",
    desc: "Автоматизация процессов медицинских лабораторий — от приёма образцов до выдачи результатов.",
    features: [
      "Внедрение и настройка ЛИС",
      "Интеграция с медицинским оборудованием",
      "Обучение персонала",
      "Сопровождение и развитие",
    ],
  },
  {
    icon: Code,
    title: "Разработка под ключ",
    desc: "Создание защищённых программных продуктов любой сложности под задачи вашего бизнеса.",
    features: [
      "Веб-приложения и API",
      "Мобильные приложения",
      "Корпоративные порталы",
      "Безопасная разработка (SSDLC)",
    ],
  },
  {
    icon: Database,
    title: "Центр обработки данных",
    desc: "Надёжная инфраструктура для хранения и обработки данных с гарантированной доступностью.",
    features: [
      "Размещение серверного оборудования",
      "Виртуальные серверы (VPS/VDS)",
      "Резервное копирование",
      "Мониторинг и администрирование",
    ],
  },
  {
    icon: Headphones,
    title: "Техническая поддержка 24/7",
    desc: "Круглосуточная поддержка вашей инфраструктуры с гарантированным временем реакции.",
    features: [
      "Мониторинг систем в режиме 24/7",
      "Максимальное время ответа — 10 часов",
      "Удалённое и выездное обслуживание",
      "SLA под ваши потребности",
    ],
  },
];

export default function ServicesPage() {
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
            Услуги
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Услуги и <span className="text-accent">решения</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Полный спектр услуг для обеспечения информационной безопасности —
            от консалтинга до круглосуточного мониторинга.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-surface hover:border-accent/20 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                  <p className="text-text-secondary mb-4">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <CheckCircle className="h-4 w-4 text-cyber-green mt-0.5 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
            Не нашли нужную услугу? Свяжитесь с нами — мы подберём решение под
            ваши задачи.
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
