import { useLocale } from "../../contexts/LocaleContext";
import { profile } from "../../data/profile";
import "./Footer.css";

/**
 * Site footer - rendered as a sibling of <main>, so the bare <footer> element
 * carries the implicit `contentinfo` landmark role.
 *
 * Content is deliberately minimal (spec §4 row 8): the name, the current year
 * and a short build note. No phone, address, email or other private CV data is
 * ever exposed here (spec §8.3). The GitHub link is shown only once
 * `profile.githubUrl` is a real string; while it is null nothing clickable is
 * rendered (spec §3.1.7) - not a fake link, not a disabled-looking button.
 *
 * Every colour resolves through a --pp-* / --bs-* token (border-top,
 * text-body-secondary, link-primary), so dark and light both render correctly.
 * The row wraps freely and stays free of horizontal scroll from 320px.
 */
export default function Footer(): JSX.Element {
  const { t, locale } = useLocale();
  const year = new Date().getFullYear();
  const githubUrl = profile.githubUrl;

  return (
    <footer className="pp-footer border-top text-body-secondary">
      <div className="pp-container pp-footer__inner">
        <div className="pp-footer__text">
          <p className="pp-footer__copy">
            © {year} · {profile.name[locale]}
          </p>
          <p className="pp-footer__tagline">{t("footer.tagline")}</p>
        </div>

        {githubUrl ? (
          <a
            className="pp-tap pp-footer__link link-primary"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github" aria-hidden="true" />
            <span>{t("footer.githubLabel")}</span>
          </a>
        ) : null}
      </div>
    </footer>
  );
}
