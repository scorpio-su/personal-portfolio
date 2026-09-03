import { useLocale } from "../../contexts/LocaleContext";
import "./About.css";

/**
 * About: the cross-domain background narrative (mechanical -> software
 * engineering) followed by a short "how I work" principles list. Text only, no
 * imagery (spec §3.2); the measure is constrained for comfortable reading and
 * every colour resolves through a --pp-* / --bs-* token so both themes are
 * correct.
 */
export default function About(): JSX.Element {
  const { t, tList } = useLocale();

  const paragraphs = tList("about.paragraphs");
  const principles = tList("about.principles");

  return (
    <section
      id="about"
      className="pp-section pp-about"
      aria-labelledby="about-heading"
    >
      <div className="pp-container">
        <div className="pp-about__body">
          <h2 id="about-heading" className="pp-about__heading">
            {t("about.heading")}
          </h2>

          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="pp-about__paragraph text-body-secondary">
              {paragraph}
            </p>
          ))}

          <h3 className="pp-about__principles-heading">
            {t("about.principlesHeading")}
          </h3>
          <ul className="pp-about__principles">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
