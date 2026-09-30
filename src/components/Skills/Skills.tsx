import { useLocale } from "../../contexts/LocaleContext";
import { skillGroups } from "../../data/skills";
import "./Skills.css";

/**
 * Skills: tooling and experience areas, split into labelled groups so the
 * section reads as a small taxonomy rather than one flat tag pile (spec §4).
 * Each group is its own bordered surface block on a responsive grid, with its
 * name as an <h3>, an optional locale-aware intro, and a semantic list of
 * chips (LocalizedList). Every colour resolves through a --pp-* / --bs-* token.
 */
export default function Skills(): JSX.Element {
  const { t, locale } = useLocale();

  return (
    <section
      id="skills"
      className="pp-section pp-skills"
      aria-labelledby="skills-heading"
    >
      <div className="pp-container">
        <h2 id="skills-heading" className="pp-skills__heading">
          {t("skills.heading")}
        </h2>
        <p className="pp-skills__intro text-body-secondary">
          {t("skills.intro")}
        </p>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div key={group.name.en} className="col-sm-6 col-lg-4">
              <div className="pp-skills__group h-100">
                <h3 className="pp-skills__group-heading">
                  {group.name[locale]}
                </h3>
                {group.intro ? (
                  <p className="pp-skills__group-intro text-body-secondary">
                    {group.intro[locale]}
                  </p>
                ) : null}
                <ul className="pp-skills__chips">
                  {group.items[locale].map((item) => (
                    <li key={item} className="pp-skills__chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}