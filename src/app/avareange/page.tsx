"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Brain,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Eye,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Мониторинг угроз",
    desc: "Отслеживание киберугроз в реальном времени с автоматическим реагированием на инциденты.",
  },
  {
    icon: Brain,
    title: "Оценка рисков",
    desc: "Комплексный анализ уязвимостей и рисков с приоритизацией по критичности.",
  },
  {
    icon: GraduationCap,
    title: "Обучение персонала",
    desc: "Интерактивные курсы и фишинг-симуляции для повышения киберграмотности.",
  },
  {
    icon: BarChart3,
    title: "Аналитика и отчёты",
    desc: "Детальные отчёты и дашборды для руководства и технических специалистов.",
  },
];

const benefits = [
  "Снижение киберинцидентов уже через 2 недели",
  "Сотрудники в 5 раз реже становятся причинами инцидентов",
  "Соответствие требованиям ФЗ-152, ФЗ-187",
  "Автоматизация рутинных задач ИБ",
  "Единая панель управления безопасностью",
  "Интеграция с существующей инфраструктурой",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function AwareangePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-cyber-green border border-cyber-green/30 rounded-full bg-cyber-green/5">
            Платформа кибербезопасности
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            AVA<span className="text-accent">REANGE</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Онлайн-платформа для комплексной оценки рисков, мониторинга угроз и
            обучения сотрудников. Защита вашего бизнеса на всех уровнях.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors glow"
            >
              Запросить демо
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+74112318031"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
            >
              Позвонить
            </a>
          </div>
        </motion.div>

        {/* Key metrics */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Zap,
                metric: "2 недели",
                label: "до первых результатов",
              },
              {
                icon: Shield,
                metric: "5x",
                label: "снижение инцидентов из-за персонала",
              },
              {
                icon: Users,
                metric: "98.5%",
                label: "уровень защищённости",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-xl border border-border bg-surface text-center hover:border-accent/20 transition-all"
              >
                <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold font-mono text-accent mb-1">
                  {item.metric}
                </div>
                <p className="text-sm text-text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div {...fadeUp} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Возможности <span className="text-accent">платформы</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-6 rounded-xl border border-border bg-surface hover:border-accent/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <f.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="rounded-xl border border-border bg-surface p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Почему <span className="text-accent">AVAREANGE</span>?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyber-green shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-text-muted font-mono">
                avareange — dashboard
              </span>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Угрозы", value: "2,847", color: "text-red-400" },
                  {
                    label: "Заблокировано",
                    value: "2,831",
                    color: "text-cyber-green",
                  },
                  {
                    label: "На расследовании",
                    value: "12",
                    color: "text-yellow-400",
                  },
                  {
                    label: "Обучено",
                    value: "1,204",
                    color: "text-accent",
                  },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-lg bg-background">
                    <p className="text-xs text-text-muted mb-1">{stat.label}</p>
                    <p className={`text-2xl font-bold font-mono ${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  { label: "Фишинг-атаки", pct: 95, color: "from-red-500 to-red-400" },
                  { label: "Вредоносное ПО", pct: 88, color: "from-yellow-500 to-yellow-400" },
                  { label: "Brute-force", pct: 99, color: "from-cyber-green to-green-400" },
                  { label: "Социальная инженерия", pct: 76, color: "from-accent to-blue-400" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="text-text-muted">{item.label}</span>
                      <span className="font-mono text-text-secondary">
                        {item.pct}% заблокировано
                      </span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Готовы попробовать?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Запросите демо-доступ и убедитесь в эффективности платформы
            AVAREANGE на примере вашей инфраструктуры.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors glow"
          >
            Запросить демо
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
