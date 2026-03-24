import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/brand/logo-white-horizontal.svg"
                alt="AVATEK"
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-text-muted leading-relaxed">
              Комплексные решения в области информационной безопасности с 2004 года.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-text-primary">
              Услуги
            </h3>
            <ul className="space-y-2">
              {[
                "Защита персональных данных",
                "Управление уязвимостями",
                "Системная интеграция",
                "Разработка под ключ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-text-primary">
              Компания
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "О компании" },
                { href: "/news", label: "Новости" },
                { href: "/cases", label: "Кейсы" },
                { href: "/partners", label: "Партнёры" },
                { href: "/avareange", label: "AVAREANGE" },
                { href: "/contacts", label: "Контакты" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-text-primary">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-text-muted">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href="tel:+74112318031" className="hover:text-text-secondary transition-colors">
                  +7 (4112) 31-80-31
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-muted">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:info@avatek.su" className="hover:text-text-secondary transition-colors">
                  info@avatek.su
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-text-muted">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Якутск, мкр. 202, корпус 12/2</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} AVATEK. Все права защищены.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span>Якутск</span>
            <span className="text-border">|</span>
            <span>Торонто</span>
            <span className="text-border">|</span>
            <span>Тель-Авив</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
