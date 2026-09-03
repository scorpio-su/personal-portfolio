import type { MouseEvent } from "react";
import { useLocale } from "../../contexts/LocaleContext";
import { profile } from "../../data/profile";
import { scrollToId } from "../../lib/smoothScroll";
import "./Hero.css";

/**
 * Section navigation from a real fragment anchor: block the browser jump, then
 * hand off to the shared smooth-scroll helper (which honours reduced motion and
 * no-ops when the target id is absent).
 */
function handleAnchorScroll(id: string) {
  return (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    scrollToId(id);
  };
}

/**
 * Hero: the opening viewport. Role/title, the positioning statement and two
 * anchor actions that scroll to later sections. Typography-led with a static
 * CSS grid backdrop (`pp-hero-grid`); no imagery and no large motion
 * (spec §3.2, §5). Correct in both themes via the --pp-* / --bs-* tokens.
 */
export default function Hero(): JSX.Element {
  const { t, locale } = useLocale();

  return (
    <section
      id="hero"
      className="pp-hero pp-hero-grid"
      aria-labelledby="hero-heading"
    >
      <div className="pp-container pp-hero__inner">
        <span className="pp-hero__rule" aria-hidden="true" />
        <h1 id="hero-heading" className="pp-hero__title">
          {profile.title[locale]}
        </h1>
        <p className="pp-hero__subtitle text-body-secondary">
          {t("hero.subtitle")}
        </p>
        <div className="pp-hero__actions">
          <a
            className="btn btn-primary btn-lg pp-tap pp-hero__cta"
            href="#experience"
            onClick={handleAnchorScroll("experience")}
          >
            {t("hero.viewExperience")}
          </a>
          <a
            className="btn btn-outline-primary btn-lg pp-tap pp-hero__cta"
            href="#projects"
            onClick={handleAnchorScroll("projects")}
          >
            {t("hero.viewProjects")}
          </a>
        </div>
      </div>
    </section>
  );
}
