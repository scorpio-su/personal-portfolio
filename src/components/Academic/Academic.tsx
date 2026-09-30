import { useLocale } from "../../contexts/LocaleContext";
import { academic } from "../../data/academic";
import {
  handleLicenseLogoError,
  resolveLicenseLogoSrc,
} from "../../data/licenseLogo";
import type { AcademicItem } from "../../data/types";
import "./Academic.css";

function ItemLogo({ item }: { item: Pick<AcademicItem, "logoSrc"> }): JSX.Element | null {
  if (!item.logoSrc) {
    return null;
  }
  return (
    <div className="pp-academic__logo">
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
 * Academic: thesis and capstone, rendered from `academic`
 * (src/data/academic.ts). Mirrors Experience / Licenses — bordered,
 * theme-aware blocks with an accent left edge. Text only, no motion;
 * every colour resolves through a --pp-* token.
 * Optional left logo when `logoSrc` is a non-empty string.
 */
export default function Academic(): JSX.Element {
  const { t, locale } = useLocale();

  return (
    <section
      id="academic"
      className="pp-section pp-academic"
      aria-labelledby="academic-heading"
    >
      <div className="pp-container">
        <h2 id="academic-heading" className="pp-academic__heading">
          {t("academic.heading")}
        </h2>

        <div className="pp-academic__list">
          {academic.map((item) => (
            <article
              key={item.title.en}
              className="pp-academic__item"
            >
              <div className="pp-academic__row">
                <ItemLogo item={item} />
                <div className="pp-academic__body">
                  <h3 className="pp-academic__title">{item.title[locale]}</h3>
                  <p className="pp-academic__meta">
                    <span className="pp-academic__kind">{item.kind[locale]}</span>
                  </p>
                  {item.summary?.[locale] ? (
                    <p className="pp-academic__summary">{item.summary[locale]}</p>
                  ) : null}
                  {item.bullets[locale].length > 0 ? (
                    <ul className="pp-academic__bullets">
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
