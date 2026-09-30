import { useLocale } from "../../contexts/LocaleContext";
import {
  handleLicenseLogoError,
  resolveLicenseLogoSrc,
} from "../../data/licenseLogo";
import { experience } from "../../data/experience";
import type { ExperienceItem } from "../../data/types";
import "./Experience.css";

function ItemLogo({ item }: { item: Pick<ExperienceItem, "logoSrc"> }): JSX.Element | null {
  if (!item.logoSrc) {
    return null;
  }
  return (
    <div className="pp-experience__logo">
      <img
        src={resolveLicenseLogoSrc(item)}
        alt=""
        width={56}
        height={56}
        loading="lazy"
        decoding="async"
        onError={handleLicenseLogoError}
      />
    </div>
  );
}

/**
 * Experience: the confirmed professional role, rendered from `experience`
 * (src/data/experience.ts) so future entries need no layout change. Each item is
 * a bordered, theme-aware block that surfaces the organisation, role, period and
 * the responsibility bullets - including the quantified "hundreds of thousands
 * of records" outcome. Text only, no timeline motion (spec ?3.2, ?5); every
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
              <div className="pp-experience__row">
                <ItemLogo item={item} />
                <div className="pp-experience__body">
                  <h3 className="pp-experience__org">{item.org[locale]}</h3>
                  <p className="pp-experience__meta">
                    <span className="pp-experience__role">{item.role[locale]}</span>
                    <span className="pp-experience__period text-body-secondary">
                      {item.period}
                    </span>
                  </p>
                  {item.bullets[locale].length > 0 ? (
                    <ul className="pp-experience__bullets">
                      {item.bullets[locale].map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
