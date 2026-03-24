"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const partners = [
  {
    name: "Positive Technologies",
    category: "Вендор ИБ",
    logo: "/logos/positive.svg",
    url: "https://www.ptsecurity.com",
    desc: "Ведущий российский разработчик решений для кибербезопасности. Продукты компании используются для защиты крупнейших государственных и коммерческих организаций.",
    products: [
      {
        name: "MaxPatrol SIEM",
        desc: "Система мониторинга событий ИБ и выявления инцидентов в реальном времени с экспертными правилами обнаружения угроз.",
      },
      {
        name: "PT Sandbox",
        desc: "Песочница для обнаружения сложного вредоносного ПО в файлах и сетевом трафике с кастомизируемыми виртуальными средами.",
      },
      {
        name: "PT NAD",
        desc: "Система анализа сетевого трафика для обнаружения атак на периметре и внутри сети, включая APT-атаки.",
      },
    ],
  },
  {
    name: "Kaspersky",
    category: "Вендор ИБ",
    logo: "/logos/kaspersky.svg",
    url: "https://www.kaspersky.ru",
    desc: "Глобальный лидер в области кибербезопасности. Решения компании защищают более 400 млн пользователей и 270 тыс. корпоративных клиентов по всему миру.",
    products: [
      {
        name: "Kaspersky Endpoint Security (KES)",
        desc: "Комплексная защита рабочих станций и серверов от вредоносного ПО, шифровальщиков и целевых атак.",
      },
      {
        name: "KATA",
        desc: "Kaspersky Anti Targeted Attack — платформа для обнаружения сложных угроз, включая APT и zero-day атаки.",
      },
      {
        name: "KICS",
        desc: "Kaspersky Industrial CyberSecurity — XDR-платформа для защиты промышленных предприятий и объектов КИИ.",
      },
    ],
  },
  {
    name: "КриптоПро",
    category: "Криптография",
    logo: "/logos/cryptopro.svg",
    url: "https://www.cryptopro.ru",
    desc: "Ведущий российский разработчик средств криптографической защиты информации. Стандарт de-facto для работы с ЭЦП в государственных системах.",
    products: [
      {
        name: "КриптоПро CSP",
        desc: "Криптопровайдер для формирования и проверки ЭЦП, шифрования данных и обеспечения целостности ПО.",
      },
      {
        name: "КриптоПро DSS",
        desc: "Облачный сервис для создания и хранения электронных подписей с централизованным управлением ключами.",
      },
      {
        name: "КриптоПро УЦ",
        desc: "Программно-аппаратный комплекс удостоверяющего центра для выпуска и управления сертификатами ЭП.",
      },
    ],
  },
  {
    name: "InfoWatch",
    category: "DLP-системы",
    logo: "/logos/infowatch.svg",
    url: "https://www.infowatch.ru",
    desc: "Российский разработчик решений для защиты от утечек данных. DLP-система №1 в России, разрабатывается с 2007 года, сертифицирована ФСТЭК.",
    products: [
      {
        name: "Traffic Monitor",
        desc: "Флагманская DLP-система для обнаружения, классификации и предотвращения утечек конфиденциальных данных.",
      },
      {
        name: "Vision",
        desc: "Визуальная аналитика DLP-данных: граф связей сотрудников, статистика и интерактивные дашборды.",
      },
      {
        name: "Prediction",
        desc: "UBA-система на основе ИИ для анализа поведения сотрудников и прогнозирования инцидентов ИБ.",
      },
    ],
  },
  {
    name: "Код Безопасности",
    category: "Вендор ИБ",
    logo: "/logos/securitycode.svg",
    url: "https://www.securitycode.ru",
    desc: "Российский разработчик сертифицированных программных и аппаратных средств защиты информации для госструктур и бизнеса.",
    products: [
      {
        name: "Secret Net Studio",
        desc: "Комплексное средство защиты рабочих станций и серверов от НСД, сертифицированное ФСТЭК России.",
      },
      {
        name: "Континент",
        desc: "Семейство продуктов для сетевой безопасности: межсетевой экран, VPN и система обнаружения вторжений.",
      },
      {
        name: "vGate",
        desc: "Защита виртуальных инфраструктур от несанкционированного доступа с мандатным управлением.",
      },
    ],
  },
  {
    name: "Astra Linux",
    category: "ОС",
    logo: "/logos/astra.svg",
    url: "https://astralinux.ru",
    desc: "Российская операционная система с сертификатами ФСТЭК и МО РФ. Стандарт для импортозамещения ОС в госсекторе.",
    products: [
      {
        name: "Astra Linux SE «Смоленск»",
        desc: "Максимальный уровень защиты — для обработки государственной тайны и данных высшей категории секретности.",
      },
      {
        name: "Astra Linux SE «Воронеж»",
        desc: "Усиленный уровень защиты с мандатным контролем целостности и замкнутой программной средой PARSEC.",
      },
      {
        name: "Astra Linux SE «Орёл»",
        desc: "Базовый уровень — универсальная ОС для рабочих станций и серверов с поддержкой x86-64, ARM, Эльбрус.",
      },
    ],
  },
  {
    name: "UserGate",
    category: "Сетевая безопасность",
    logo: "/logos/usergate.svg",
    url: "https://usergate.com",
    desc: "Российский разработчик решений для сетевой безопасности. Единая экосистема SUMMA объединяет NGFW, SIEM и управление инцидентами.",
    products: [
      {
        name: "UserGate NGFW",
        desc: "Межсетевой экран нового поколения с IDS/IPS, контентной фильтрацией и контролем приложений.",
      },
      {
        name: "UserGate SIEM",
        desc: "Система сбора и корреляции событий ИБ для обнаружения инцидентов и управления реагированием.",
      },
      {
        name: "UserGate DCFW",
        desc: "Межсетевой экран для дата-центров с высокой производительностью и отказоустойчивостью.",
      },
    ],
  },
  {
    name: "Р7-Офис",
    category: "Офисное ПО",
    logo: "/logos/r7office.svg",
    url: "https://r7-office.ru",
    desc: "Российский офисный пакет — замена MS Office. Включён в реестр отечественного ПО, используется в госсекторе и образовании.",
    products: [
      {
        name: "Р7-Офис Десктоп",
        desc: "Редакторы документов, таблиц и презентаций с полной совместимостью форматов DOCX, XLSX, PPTX.",
      },
      {
        name: "Р7-Офис Сервер",
        desc: "Серверная платформа с почтой, календарём, корпоративной соцсетью и совместным редактированием.",
      },
      {
        name: "Р7-Офис Облако",
        desc: "Облачная версия с онлайн-редакторами, совместной работой и мобильными приложениями для iOS/Android.",
      },
    ],
  },
];

const licenses = [
  "Лицензия ФСТЭК России на деятельность по технической защите конфиденциальной информации",
  "Лицензия ФСБ России на осуществление деятельности, связанной с шифровальными (криптографическими) средствами",
  "Лицензия Минцифры России на разработку и производство средств защиты информации",
  "Аккредитованный удостоверяющий центр",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function PartnerCard({
  partner,
  index,
}: {
  partner: (typeof partners)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group rounded-xl border border-border bg-surface hover:border-accent/30 transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-6">
        {/* Logo + Link */}
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-4"
        >
          <div className="h-12 flex items-center bg-white rounded-lg px-4 py-2 group-hover:shadow-md transition-shadow">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-8 w-auto max-w-full object-contain"
            />
          </div>
        </a>

        {/* Name + category */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold">{partner.name}</h3>
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors shrink-0"
            aria-label={`Перейти на сайт ${partner.name}`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <span className="inline-block px-2 py-0.5 mb-3 text-[10px] font-mono text-accent border border-accent/30 rounded bg-accent/5">
          {partner.category}
        </span>

        <p className="text-sm text-text-muted leading-relaxed mb-3">
          {partner.desc}
        </p>

        {/* Expandable products */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 border-t border-border">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Топ-3 продукта
                </p>
                <div className="space-y-3">
                  {partner.products.map((product) => (
                    <div key={product.name}>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <ChevronRight className="h-3 w-3 text-accent shrink-0" />
                        <span className="text-sm font-medium text-text-primary">
                          {product.name}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed pl-[18px]">
                        {product.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint to hover */}
        {!isExpanded && (
          <p className="text-[11px] text-text-muted/50 mt-1">
            Наведите, чтобы увидеть продукты
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function PartnersPage() {
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
            Партнёры
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-accent">партнёры</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Мы сотрудничаем с ведущими производителями решений в области
            информационной безопасности и IT-инфраструктуры.
          </p>
        </motion.div>

        {/* Partners grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {partners.map((p, i) => (
            <PartnerCard key={p.name} partner={p} index={i} />
          ))}
        </div>

        {/* Licenses */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="rounded-xl border border-border bg-surface p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Лицензии и <span className="text-accent">сертификаты</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {licenses.map((l) => (
                <div key={l} className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-cyber-green shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Become a partner CTA */}
        <motion.div {...fadeUp} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Стать <span className="text-accent">партнёром</span>
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Мы открыты для новых партнёрств. Если ваша компания работает в сфере
            IT или ИБ — давайте обсудим сотрудничество.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors glow"
          >
            Связаться с нами
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
