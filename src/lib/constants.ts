// App constants

export const SITE_CONFIG = {
  name: "Jerjen Res Pangalay",
  description:
    "Bachelor of Science in Information Technology at Cebu Institute of Technology - University, Fullstack dev, UI/UX designer",
  url: "https://jerjenres.com",
  ogImage: "/me/me.png",
  links: {
    email: "respangalay@gmail.com",
    github: "https://github.com/jerjenres",
    linkedin: "https://www.linkedin.com/in/pea-cock-84aa90329/",
    phone: "09938980027"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};
