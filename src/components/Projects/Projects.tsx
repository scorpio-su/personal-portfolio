import { useLocale } from "../../contexts/LocaleContext";
import { projects } from "../../data/projects";
import "./Projects.css";

/**
 * Projects: the selected project cards, rendered from `projects`
 * (src/data/projects.ts) so adding a third entry needs no layout change
 * (spec §3.1.6). Only public entries are shown.
 *
 * Each card is a theme-aware Bootstrap `.card` on a 1-column (mobile) /
 * 2-column (md and up) grid, exposing the summary, a labelled tech list, the
 * individual responsibilities and the quantified result - emphasised with an
 * icon plus text, never colour alone (spec §8.1). External links render only
 * when the data URL is a non-null string, always with `target="_blank"` +
 * `rel="noreferrer"` and a descriptive accessible name; when both URLs are
 * absent a static "links coming soon" note is shown instead of a fake link.
 * No imagery, no motion (spec §3.2, §5); every colour resolves through a
 * --pp-* / --bs-* token so both themes render correctly.
 */
export default function Projects(): JSX.Element {
  const { t, locale } = useLocale();

  const publicProjects = projects.filter((project) => project.isPublic);

  return (
    <section
      id="projects"
      className="pp-section pp-projects"
      aria-labelledby="projects-heading"
    >
      <div className="pp-container">
        <h2 id="projects-heading" className="pp-projects__heading">
          {t("projects.heading")}
        </h2>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {publicProjects.map((project) => {
            const techLabelId = `${project.id}-tech-label`;
            const responsibilitiesLabelId = `${project.id}-responsibilities-label`;
            const hasLinks =
              project.githubUrl !== null || project.demoUrl !== null;

            return (
              <div key={project.id} className="col">
                <article className="card h-100 pp-projects__card">
                  <div className="card-body d-flex flex-column">
                    <h3 className="h5 pp-projects__title">
                      {project.name[locale]}
                    </h3>
                    <p className="pp-projects__summary text-body-secondary">
                      {project.summary[locale]}
                    </p>

                    <h4 id={techLabelId} className="h6 pp-projects__label">
                      {t("projects.techLabel")}
                    </h4>
                    <ul
                      className="pp-projects__tech"
                      aria-labelledby={techLabelId}
                    >
                      {project.tech.map((tech) => (
                        <li key={tech} className="pp-projects__tech-item">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <h4
                      id={responsibilitiesLabelId}
                      className="h6 pp-projects__label"
                    >
                      {t("projects.responsibilitiesLabel")}
                    </h4>
                    <ul
                      className="pp-projects__responsibilities"
                      aria-labelledby={responsibilitiesLabelId}
                    >
                      {project.responsibilities[locale].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <h4 className="h6 pp-projects__label">
                      {t("projects.resultLabel")}
                    </h4>
                    <p className="pp-projects__result">
                      <i
                        className="bi bi-graph-up-arrow pp-projects__result-icon"
                        aria-hidden="true"
                      />
                      <span>{project.result[locale]}</span>
                    </p>

                    <div className="pp-projects__links mt-auto pt-3">
                      {hasLinks ? (
                        <>
                          {project.githubUrl !== null && (
                            <a
                              className="btn btn-sm btn-outline-primary pp-tap pp-projects__link"
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${t("projects.viewGithub")} - ${
                                project.name[locale]
                              }`}
                            >
                              <i className="bi bi-github" aria-hidden="true" />
                              <span>{t("projects.viewGithub")}</span>
                            </a>
                          )}
                          {project.demoUrl !== null && (
                            <a
                              className="btn btn-sm btn-outline-primary pp-tap pp-projects__link"
                              href={project.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${t("projects.viewDemo")} - ${
                                project.name[locale]
                              }`}
                            >
                              <i
                                className="bi bi-box-arrow-up-right"
                                aria-hidden="true"
                              />
                              <span>{t("projects.viewDemo")}</span>
                            </a>
                          )}
                        </>
                      ) : (
                        <p className="text-body-secondary mb-0">
                          <small>{t("projects.linksUnavailable")}</small>
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
