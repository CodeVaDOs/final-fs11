export const getTheme = () => {
  return localStorage.getItem("application-theme") || "dark";
};

export const setTheme = (theme) => {
  localStorage.setItem("application-theme", theme);

  if (theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
};