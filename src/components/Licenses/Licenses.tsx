import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { useLocale } from "../../contexts/LocaleContext";
import {
  handleLicenseLogoError,
  resolveLicenseLogoSrc,
} from "../../data/licenseLogo";
import { licenses } from "../../data/licenses";
import type { LicenseIssued, LicenseItem } from "../../data/types";
import "./Licenses.css";

const EN_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Format LinkedIn-style date; month optional (1–12). Shared by issued & expiry. */
function formatLicenseDate(
  value: LicenseIssued,
  locale: "zh-TW" | "en",
): string {
  if (value.month == null) {
    return String(value.year);
  }
  if (locale === "zh-TW") {
    return `${value.year} 年 ${value.month} 月`;
  }
  const label = EN_MONTHS[value.month - 1] ?? String(value.month);
  return `${label} ${value.year}`;
}

function resolveDescription(
  item: LicenseItem,
  locale: "zh-TW" | "en",
): string {
  const lines = item.description?.[locale];
  if (!lines || lines.length === 0) {
    return "";
  }
  return lines.join(" ");
}

function LicenseLogo({ item }: { item: Pick<LicenseItem, "logoSrc"> }): JSX.Element {
  const [showIcon, setShowIcon] = useState(false);

  if (showIcon) {
    return (
      <div
        className="pp-licenses__logo pp-licenses__logo--fallback"
        aria-hidden="true"
      >
        <i className="bi bi-award" />
      </div>
    );
  }

  return (
    <div className="pp-licenses__logo">
      <img
        src={resolveLicenseLogoSrc(item)}
        alt=""
        width={56}
        height={56}
        loading="lazy"
        decoding="async"
        onError={(event) => {
          if (event.currentTarget.dataset.fallbackApplied === "1") {
            setShowIcon(true);
            return;
          }
          handleLicenseLogoError(event);
        }}
      />
    </div>
  );
}

function LicenseDescription({
  text,
  showMoreLabel,
  showLessLabel,
}: {
  text: string;
  showMoreLabel: string;
  showLessLabel: string;
}): JSX.Element | null {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const measure = useCallback(() => {
    const el = textRef.current;
    if (!el) {
      return;
    }
    const wasExpanded = el.classList.contains("pp-licenses__desc--expanded");
    el.classList.remove("pp-licenses__desc--expanded");
    const needsToggle = el.scrollHeight > el.clientHeight + 1;
    if (wasExpanded) {
      el.classList.add("pp-licenses__desc--expanded");
    }
    setOverflows(needsToggle);
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = textRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      return;
    }
    const observer = new ResizeObserver(() => measure());
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, measure]);

  if (!text) {
    return null;
  }

  const toggle = () => setExpanded((prev) => !prev);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div className="pp-licenses__desc-block">
      <p
        ref={textRef}
        className={`pp-licenses__desc${
          expanded ? " pp-licenses__desc--expanded" : ""
        }`}
      >
        {text}
      </p>
      {overflows && (
        <button
          type="button"
          className="pp-licenses__more pp-tap"
          aria-expanded={expanded}
          onClick={toggle}
          onKeyDown={onKeyDown}
        >
          {expanded ? showLessLabel : showMoreLabel}
        </button>
      )}
    </div>
  );
}

/**
 * Licenses & certifications: LinkedIn-style cards from `licenses`.
 * Outer frame (border, surface, accent left edge) is unchanged; this file
 * owns logo slot, issued/expiry/id, credential pill, description collapse,
 * skills row, and narrow-screen reordering.
 */
export default function Licenses(): JSX.Element {
  const { t, locale } = useLocale();

  return (
    <section
      id="licenses"
      className="pp-section pp-licenses"
      aria-labelledby="licenses-heading"
    >
      <div className="pp-container">
        <h2 id="licenses-heading" className="pp-licenses__heading">
          {t("licenses.heading")}
        </h2>

        <div className="pp-licenses__list">
          {licenses.map((item) => {
            const title = item.title[locale];
            const org = item.org[locale];
            const description = resolveDescription(item, locale);
            const skills = item.skills?.[locale] ?? [];
            const credentialUrl =
              typeof item.credentialUrl === "string" && item.credentialUrl
                ? item.credentialUrl
                : null;
            const credentialId =
              typeof item.credentialId === "string" && item.credentialId
                ? item.credentialId
                : null;
            const hasExpiry =
              item.expiry != null && typeof item.expiry.year === "number";

            return (
              <article
                key={`${item.title.en}-${item.issued.year}-${item.issued.month ?? 0}`}
                className="pp-licenses__item"
              >
                <div className="pp-licenses__row">
                  <LicenseLogo item={item} />

                  <div className="pp-licenses__content">
                    <h3 className="pp-licenses__title">{title}</h3>
                    <p className="pp-licenses__org">{org}</p>

                    <p className="pp-licenses__date text-body-secondary">
                      <span className="pp-licenses__meta-label">
                        {t("licenses.issuedDate")}
                      </span>
                      <span>{formatLicenseDate(item.issued, locale)}</span>
                    </p>

                    {hasExpiry && (
                      <p className="pp-licenses__expiry text-body-secondary">
                        <span className="pp-licenses__meta-label">
                          {t("licenses.expiryDate")}
                        </span>
                        <span>
                          {formatLicenseDate(item.expiry!, locale)}
                        </span>
                      </p>
                    )}

                    {credentialId !== null && (
                      <p className="pp-licenses__id text-body-secondary">
                        <span className="pp-licenses__meta-label">
                          {t("licenses.credentialId")}
                        </span>
                        <span>{credentialId}</span>
                      </p>
                    )}

                    {credentialUrl !== null && (
                      <a
                        className="pp-licenses__credential pp-tap"
                        href={credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("licenses.showCredential")} - ${title}`}
                      >
                        <span>{t("licenses.showCredential")}</span>
                        <i
                          className="bi bi-box-arrow-up-right"
                          aria-hidden="true"
                        />
                      </a>
                    )}

                    <LicenseDescription
                      text={description}
                      showMoreLabel={t("licenses.showMore")}
                      showLessLabel={t("licenses.showLess")}
                    />

                    {skills.length > 0 && (
                      <div className="pp-licenses__skills">
                        <span className="pp-licenses__skills-label">
                          {t("licenses.skills")}
                        </span>
                        <ul className="pp-licenses__skills-list">
                          {skills.map((skill) => (
                            <li key={skill} className="pp-licenses__skill">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
