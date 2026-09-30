import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { useLocale } from "../../contexts/LocaleContext";
import { useTheme } from "../../contexts/ThemeContext";
import { profile } from "../../data/profile";
import type { TranslationKey } from "../../i18n";
import { scrollToId } from "../../lib/smoothScroll";
import "./Header.css";

interface NavItem {
  readonly id: string;
  readonly labelKey: TranslationKey;
}

const NAV_ITEMS: readonly NavItem[] = [
  { id: "about", labelKey: "nav.about" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "licenses", labelKey: "nav.licenses" },
  { id: "academic", labelKey: "nav.academic" },
  { id: "contact", labelKey: "nav.contact" },
];

/**
 * Sticky site header: brand (scrolls to Hero), section navigation, plus
 * always-visible language and theme toggles. Below the `md` breakpoint the
 * navigation collapses behind a hamburger controlled purely by React state.
 */
export default function Header(): JSX.Element {
  const { t, locale, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = (): void => setOpen(false);

  const toggleMenu = (): void => {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen) {
      // Follow the disclosure: move focus into the revealed menu next frame.
      window.requestAnimationFrame(() => {
        navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
      });
    }
  };

  const handleHeaderKeyDown = (event: KeyboardEvent<HTMLElement>): void => {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  };

  const handleBrandClick = (): void => {
    scrollToId("hero");
    closeMenu();
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ): void => {
    event.preventDefault();
    scrollToId(id);
    closeMenu();
  };

  const isDark = theme === "dark";

  return (
    <header
      className="pp-header sticky-top bg-body-tertiary border-bottom"
      onKeyDown={handleHeaderKeyDown}
    >
      <div className="pp-container pp-header__bar">
        <button
          type="button"
          className="pp-header__brand pp-tap"
          onClick={handleBrandClick}
          aria-label={`${profile.name[locale]}, ${t("nav.home")}`}
        >
          {profile.name[locale]}
        </button>

        <nav
          aria-label={t("nav.label")}
          className={`pp-header__nav${open ? " pp-header__nav--open" : ""}`}
        >
          <ul
            id="primary-navigation"
            ref={navRef}
            className={`pp-nav${open ? " pp-nav--open" : ""}`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="pp-nav__item">
                <a
                  href={`#${item.id}`}
                  className="pp-nav__link"
                  onClick={(event) => handleNavClick(event, item.id)}
                >
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pp-header__controls">
          <button
            type="button"
            className="pp-tap pp-header__control"
            onClick={toggleLocale}
            aria-label={`${t("actions.switchLanguage")} (${t("actions.languageShort")})`}
          >
            <span aria-hidden="true">{t("actions.languageShort")}</span>
          </button>

          <button
            type="button"
            className="pp-tap pp-header__control"
            onClick={toggleTheme}
            aria-label={t("actions.toggleTheme")}
            aria-pressed={isDark}
          >
            <i
              className={`bi ${isDark ? "bi-sun" : "bi-moon-stars"}`}
              aria-hidden="true"
            />
          </button>

          <button
            ref={toggleRef}
            type="button"
            className="pp-tap pp-header__control d-md-none"
            onClick={toggleMenu}
            aria-label={t(open ? "actions.closeMenu" : "actions.openMenu")}
            aria-expanded={open}
            aria-controls="primary-navigation"
          >
            <i className="bi bi-list" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
