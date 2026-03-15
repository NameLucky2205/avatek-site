"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Award,
  Users,
  Globe,
  Calendar,
  ShieldCheck,
} from "lucide-react";

const timeline = [
  { year: "2004", event: "Основание компании AVATEK в Якутске" },
  { year: "2010", event: "Получение лицензий ФСТЭК и ФСБ" },
  { year: "2015", event: "Запуск собственного центра обработки данных" },
  { year: "2018", event: "Расширение географии — Торонто, Тель-Авив" },
  { year: "2020", event: "Разработка платформы AVAREANGE" },
  { year: "2024", event: "Более 1000 реализованных проектов" },
];

const team = [
  {
    name: "Антон Ломакин",
    role: "Генеральный директор",
    desc: "Основатель компании. Более 20 лет в сфере информационной безопасности.",
  },
  {
    name: "Айал Протопопов",
    role: "Директор по прикладным проектам",
    desc: "Руководит внедрением комплексных IT-решений и системной интеграцией.",
  },
  {
    name: "Валентин Матвеев",
    role: "Руководитель группы IT-безопасности",
    desc: "Сертифицированный специалист CDO. Отвечает за аудит и защиту инфраструктуры.",
  },
  {
    name: "Юрий Пластинин",
    role: "Исполнительный директор",
    desc: "Управляет операционной деятельностью и развитием партнёрской сети.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
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
            О компании
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Мы — <span className="text-accent">AVATEK</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Команда экспертов в области информационной безопасности. Защищаем
            бизнес с 2004 года, работаем в трёх странах.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <AnimatedCounter end={1000} suffix="+" label="Проектов" />
          <AnimatedCounter end={20} suffix="+" label="Лет опыта" />
          <AnimatedCounter end={3} label="Страны присутствия" />
          <AnimatedCounter end={90} suffix="%" label="Постоянных клиентов" />
        </div>

        {/* Mission */}
        <motion.div
          {...fadeUp}
          className="mb-20 rounded-xl border border-border bg-surface p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ShieldCheck className="h-10 w-10 text-accent mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Наша миссия
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Мы ставим безопасность клиентов на первое место. Наш комплексный
                подход учитывает специфику каждого бизнеса — от небольших
                организаций до крупных корпораций. Мы не просто внедряем
                решения — мы строим культуру безопасности.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: "Лицензии ФСТЭК и ФСБ" },
                { icon: Users, label: "Сертифицированные CDO" },
                { icon: Globe, label: "Международное присутствие" },
                { icon: Calendar, label: "Поддержка 24/7" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-background text-center"
                >
                  <item.icon className="h-6 w-6 text-accent" />
                  <span className="text-xs text-text-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div {...fadeUp} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            История <span className="text-accent">развития</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center gap-6 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2 text-right">
                    {i % 2 === 0 && (
                      <div className="pr-8">
                        <span className="font-mono text-accent font-bold text-lg">
                          {item.year}
                        </span>
                        <p className="text-text-secondary text-sm mt-1">
                          {item.event}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 ring-4 ring-background" />
                  <div className="pl-10 md:pl-0 md:w-1/2">
                    {(i % 2 !== 0 || true) && (
                      <div className="md:pl-8">
                        <span className="font-mono text-accent font-bold text-lg md:hidden">
                          {item.year}
                          <span className="text-text-muted font-normal"> — </span>
                        </span>
                        <span className="text-text-secondary text-sm md:hidden">
                          {item.event}
                        </span>
                        {i % 2 !== 0 && (
                          <div className="hidden md:block">
                            <span className="font-mono text-accent font-bold text-lg">
                              {item.year}
                            </span>
                            <p className="text-text-secondary text-sm mt-1">
                              {item.event}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Наша <span className="text-accent">команда</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-6 rounded-xl border border-border bg-surface hover:border-accent/20 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-xl font-bold text-accent">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-xs text-accent mb-2">{member.role}</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
