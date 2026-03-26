"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Server,
  Code,
  Headphones,
  Database,
  ArrowRight,
  KeyRound,
  FlaskConical,
  Bug,
} from "lucide-react";
import { TerminalHero } from "@/components/TerminalHero";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const services = [
  {
    icon: ShieldCheck,
    title: "Защита персональных данных",
    desc: "Соответствие ФЗ-152, ФЗ-187, ФЗ-149. Подготовка к проверкам регуляторов.",
  },
  {
    icon: KeyRound,
    title: "Электронная подпись (ЭЦП)",
    desc: "Удостоверяющий центр с полным сопровождением на всех этапах.",
  },
  {
    icon: Bug,
    title: "Управление уязвимостями",
    desc: "Выявление, анализ и устранение уязвимостей в вашей инфраструктуре.",
  },
  {
    icon: Server,
    title: "Системная интеграция",
    desc: "Проектирование и внедрение комплексных IT-решений.",
  },
  {
    icon: FlaskConical,
    title: "Лабораторные ИС (ЛИС)",
    desc: "Автоматизация медицинских лабораторий под ключ.",
  },
  {
    icon: Code,
    title: "Разработка под ключ",
    desc: "Создание защищённых приложений и систем для вашего бизнеса.",
  },
  {
    icon: Database,
    title: "Центр обработки данных",
    desc: "Надёжная инфраструктура для хранения и обработки данных.",
  },
  {
    icon: Headphones,
    title: "Техподдержка 24/7",
    desc: "Круглосуточная поддержка с максимальным временем ответа 10 часов.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-16">
        {/* Gradient orbs — brand blue + olive */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyber-green/8 rounded-full blur-[128px]" />
        {/* Brand pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(/brand/patterns/pattern-1.svg)", backgroundSize: "400px" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium text-cyber-green border border-cyber-green/30 rounded-full bg-cyber-green/5">
              С 2004 года защищаем бизнес
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight font-heading">
              Кибербезопасность
              <br />
              <span className="text-accent">без компромиссов</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Комплексный подход к защите вашего бизнеса: от аудита и
              соответствия законодательству до круглосуточного мониторинга угроз.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors glow"
            >
              Получить консультацию
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
            >
              Наши услуги
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full mt-4"
          >
            <TerminalHero />
          </motion.div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={2600} suffix="+" label="Реализованных договоров" />
            <AnimatedCounter end={60} suffix="+" label="Организаций-клиентов" />
            <AnimatedCounter end={20} suffix="+" label="Лет на рынке" />
            <AnimatedCounter end={45} suffix="+" label="Медучреждений РС(Я)" />
          </div>
        </div>
      </section>

      {/* ========== CLIENTS ========== */}
      <section className="py-16 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Нам <span className="text-accent">доверяют</span>
            </h2>
            <p className="mt-3 text-text-muted text-sm max-w-lg mx-auto">
              Государственные структуры, медицинские учреждения и крупный бизнес Республики Саха (Якутия)
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center"
          >
            {[
              { src: "/clients/alrosa.png", alt: "АК Алроса", href: "https://www.alrosa.ru" },
              { src: "/clients/svfu_white.svg", alt: "СВФУ им. М.К. Аммосова", href: "https://www.s-vfu.ru" },
              { src: "/clients/pochta.png", alt: "Почта России", href: "https://www.pochta.ru" },
              { src: "/clients/fssp_logo.svg", alt: "ФССП России", href: "https://fssp.gov.ru" },
              { src: "/clients/rospotrebnadzor.png", alt: "Роспотребнадзор", href: "https://www.rospotrebnadzor.ru" },
              { src: "/clients/minzdrav.png", alt: "Минздрав РС(Я)", href: "https://minzdrav.sakha.gov.ru" },
              { src: "/clients/rosaccreditation_dl.png", alt: "Россаккредитация", href: "https://fsa.gov.ru" },
              { src: "/clients/fond-rp.svg", alt: "Фонд развития предпринимательства РС(Я)", href: "https://fondrp.ru" },
              { src: "/clients/center-spid.svg", alt: "Центр СПИД РС(Я)", href: "#" },
              { src: "/clients/soyuzexpertiza.svg", alt: "АНО Союзэкспертиза", href: "#" },
            ].map((client) => (
              <a
                key={client.alt}
                href={client.href}
                target={client.href !== "#" ? "_blank" : undefined}
                rel={client.href !== "#" ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center p-4 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-hover transition-all duration-300 h-20 opacity-70 hover:opacity-100"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-10 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-20 border-t border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Услуги и <span className="text-accent">решения</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Полный спектр услуг для обеспечения информационной безопасности
              вашей организации.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="group h-full p-6 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-hover transition-all duration-300">
                  <s.icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
            >
              Все услуги
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== AVAREANGE PRODUCT ========== */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium text-cyber-green border border-cyber-green/30 rounded-full bg-cyber-green/5">
                Наш продукт
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AVA<span className="text-accent">REANGE</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Онлайн-платформа для комплексной оценки рисков и защиты от
                киберугроз. Снижает количество инцидентов уже через 2 недели.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Сотрудники в 5 раз реже становятся причинами инцидентов",
                  "Комплексная оценка рисков в реальном времени",
                  "Обучение и повышение киберграмотности персонала",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <Lock className="h-4 w-4 text-cyber-green mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/avareange"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
              >
                Подробнее
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl border border-border bg-surface p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-cyber-purple/5" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-text-muted">
                      threat_dashboard.tsx
                    </span>
                    <span className="px-2 py-0.5 text-xs font-mono text-cyber-green border border-cyber-green/30 rounded bg-cyber-green/5">
                      LIVE
                    </span>
                  </div>
                  {/* Mock dashboard */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Угрозы заблокированы</span>
                      <span className="font-mono text-cyber-green">2,847</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-accent to-cyber-green rounded-full" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Уровень защиты</span>
                      <span className="font-mono text-cyber-green">98.5%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full w-[98.5%] bg-gradient-to-r from-accent to-cyber-purple rounded-full" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Обучено сотрудников</span>
                      <span className="font-mono text-accent">1,204</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-gradient-to-r from-cyber-purple to-accent rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 border-t border-border bg-surface/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы усилить <span className="text-accent">безопасность</span>?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Свяжитесь с нами для бесплатной консультации. Мы проанализируем
              вашу инфраструктуру и предложим оптимальное решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors glow"
              >
                Связаться с нами
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+74112318031"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
              >
                +7 (4112) 31-80-31
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
