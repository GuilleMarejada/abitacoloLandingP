export const scrollToSection = (id) => {
  if (typeof window === "undefined") return;

  const section = document.getElementById(id);
  if (section && "scrollIntoView" in section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
