/**
 * Runs before paint to avoid a flash of the wrong theme.
 * Only sets data-theme when the visitor has made an explicit choice;
 * otherwise the prefers-color-scheme media query in tokens.css decides.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("terus-theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;
