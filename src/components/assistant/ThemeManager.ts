
export const resetThemeSettings = (setTheme: (theme: string) => void) => {
  document.documentElement.style.setProperty("--primary-accent", "#E24C60");
  const styleTag = document.getElementById("kumar-dynamic-theme");
  if (styleTag) {
    styleTag.remove();
  }
  localStorage.removeItem("kumar-accent");
  setTheme("dark");
};