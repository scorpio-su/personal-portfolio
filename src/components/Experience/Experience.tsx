import { useLocale } from "../../contexts/LocaleContext";
import { experience } from "../../data/experience";
import "./Experience.css";

/**
 * Experience: the confirmed professional role, rendered from `experience`
 * (src/data/experience.ts) so future entries need no layout change. Each item is
 * a bordered, theme-aware block that surfaces the organisation, role, period and
 * the responsibility bullets - including the quantified "hundreds of thousands
 * of records" outcome. Text only, no timeline motion (spec §3.2, §5); every
 * colour resolves through a --pp-* token so both themes render correctly.
 */
export default function Experience(): JSX.Element {
  const { t, locale } = useLocale();

  return (
    <section
      id="experience"
      className="pp-section pp-experience"
      aria-labelledby="experience-heading"
    >
      <div className="pp-container">
        <h2 id="experience-heading" className="pp-experience__heading">
          {t("experience.heading")}
        </h2>

        <div className="pp-experience__list">
          {experience.map((item) => (
            <article
              key={`${item.org.en}-${item.period}`}
              className="pp-experience__item"
            >
              <h3 className="pp-experience__org">{item.org[locale]}</h3>
              <p className="pp-experience__meta">
                <span className="pp-experience__role">{item.role[locale]}</span>
                <span className="pp-experience__period text-body-secondary">
                  {item.period}
                </span>
              </p>
              <ul className="pp-experience__bullets">
                {item.bullets[locale].map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
