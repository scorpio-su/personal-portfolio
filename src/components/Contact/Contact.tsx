import { useLocale } from "../../contexts/LocaleContext";
import { profile } from "../../data/profile";
import "./Contact.css";

/**
 * Contact: a short call to action plus the single public entry point - GitHub.
 * Per spec §3.2 / §4 / §8.3 there is no email, phone or contact form. While
 * `profile.githubUrl` is null the section shows a non-interactive "coming soon"
 * indicator - never a fake link or a clickable-looking button (spec §3.1.7);
 * once the URL is a real string it renders as a proper external link with
 * `target="_blank"` + `rel="noreferrer"`. Every colour resolves through a
 * --pp-* / --bs-* token so both themes render correctly, and the GitHub icon is
 * always paired with text so colour is never the only signal (spec §8.1).
 */
export default function Contact(): JSX.Element {
  const { t } = useLocale();
  const githubUrl = profile.githubUrl;

  return (
    <section
      id="contact"
      className="pp-section pp-contact"
      aria-labelledby="contact-heading"
    >
      <div className="pp-container">
        <div className="pp-contact__body">
          <h2 id="contact-heading" className="pp-contact__heading">
            {t("contact.heading")}
          </h2>
          <p className="pp-contact__cta text-body-secondary">
            {t("contact.cta")}
          </p>

          <div className="pp-contact__action">
            {githubUrl ? (
              <a
                className="btn btn-primary pp-tap pp-contact__link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github" aria-hidden="true" />
                <span>{t("contact.viewGithub")}</span>
              </a>
            ) : (
              <p className="pp-contact__coming-soon">
                <i className="bi bi-github" aria-hidden="true" />
                <span>{t("contact.comingSoon")}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
