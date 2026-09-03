// jest-dom adds custom jest matchers for asserting on DOM nodes.
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom does not implement matchMedia. Provide a no-op polyfill so components or
// tests that read it (e.g. reduced-motion / color-scheme probing) do not crash.
if (typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string): MediaQueryList =>
      ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => undefined,
        removeListener: () => undefined,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        dispatchEvent: () => false,
      } as unknown as MediaQueryList),
  });
}

// jsdom does not implement scrollIntoView; smooth-scroll nav handlers call it.
if (typeof window.Element.prototype.scrollIntoView !== 'function') {
  window.Element.prototype.scrollIntoView = () => undefined;
}
