import { HashRouter } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { LocaleProvider, useLocale } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";

/**
 * Inner shell: rendered inside all providers so it can call `useLocale()` for
 * the skip link. Lays out the landmarks and the eight page sections.
 */
function Shell(): JSX.Element {
  const { t } = useLocale();

  return (
    <>
      <a
        href="#main-content"
        className="visually-hidden-focusable d-inline-flex m-2 p-2 rounded border bg-body text-body"
      >
        {t("a11y.skipToContent")}
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App(): JSX.Element {
  return (
    <HashRouter>
      <ThemeProvider>
        <LocaleProvider>
          <Shell />
        </LocaleProvider>
      </ThemeProvider>
    </HashRouter>
  );
}
