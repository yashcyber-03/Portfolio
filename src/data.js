// Edit this file to update the whole site.
// Leave a link as "" until it is real: the button then shows "Link coming soon" and is disabled.

export const site = {
  name: "Yash Supare",
  email: import.meta.env.VITE_CONTACT_EMAIL || "",
  // TODO: replace with your real profile URLs
  github: "https://github.com/yashcyber-03",
};

export const skillGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Design", items: ["Figma", "UI/UX", "Responsive Design"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
  { title: "Also exploring", items: ["Python", "Data Analytics", "MySQL"] },
];

// image: put a screenshot in public/projects/ (PNG or JPG). Delete the image line to show the placeholder.
// Descriptions are short placeholders. Rewrite them in your own words.
export const projects = [
  { title: "DailyDesk", image: "/projects/dailydesk.png", kind: "Free online tools website", desc: "A free all-in-one collection of online tools, built as a frontend-only site.", stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"], demo: "https://dailydesk-psi.vercel.app/", repo: "https://github.com/yashcyber-03/DailyDesk" }, // TODO: add your DailyDesk GitHub repo URL
  { title: "Agri Waste Management", image: "/projects/agri-waste.png", kind: "Web application", desc: "A project about tracking and managing agricultural waste.", stack: ["Add stack here"], demo: "https://backup-zeta-blush.vercel.app/", repo: "https://github.com/yashcyber-03/AgriWaste" },
  { title: "Medical Plus Pharmacy Management", image: "/projects/medical-plus.png", kind: "Management system", desc: "A pharmacy management project for handling day-to-day pharmacy records.", stack: ["Add stack here"], demo: "https://medical-plus-pharmacy.vercel.app/", repo: "https://github.com/yashcyber-03/Medical-Plus-Pharmacy" },
  { title: "Hospital Management System", image: "/projects/hospital.png", kind: "Management system", desc: "A hospital management project for organising hospital records.", stack: ["Add stack here"], demo: "https://hospital-management-system-pearl-rho.vercel.app/", repo: "https://github.com/yashcyber-03/Hospital-Management" },
  { title: "Cafe Website", image: "/projects/cafe.png", kind: "Website", desc: "A responsive website for a cafe, covering menu and contact details.", stack: ["HTML", "CSS", "JavaScript"], demo: "https://littleowlcafe-psi.vercel.app/", repo: "https://github.com/yashcyber-03/Little-Owl-Cafe" },
];

export const services = [
  ["Website development", "Small business and personal sites, built to load quickly and work on phones."],
  ["Portfolio website design", "A portfolio that presents your work clearly, designed around your content."],
  ["Landing page development", "A focused single page for one event, product or offer."],
  ["UI/UX design", "Layouts and flows planned in Figma before any code is written."],
  ["Responsive website development", "Pages that adapt cleanly from small phones to wide monitors."],
  ["Website redesign", "A cleaner structure and look for a site that feels dated or hard to use."],
];

export const journey = [
  ["Studying Computer Science Engineering", "The base for everything else: programming, databases and problem solving."],
  ["Learning web development", "Started with HTML, CSS and JavaScript, then moved to React.js."],
  ["Building projects", "Academic and personal projects, from management systems to a cafe website."],
  ["Still experimenting", "Design in Figma, deploying on Vercel, and early steps in Python and data analytics."],
];
