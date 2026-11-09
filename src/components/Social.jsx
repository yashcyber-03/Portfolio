import { Github, Linkedin, Instagram } from "lucide-react";
import { site } from "../data.js";

const links = [
  ["GitHub", Github, site.github],
  ["LinkedIn", Linkedin, site.linkedin],
  ["Instagram", Instagram, site.instagram],
];

export default function Social() {
  return (
    <ul className="flex gap-3">
      {links.map(([label, Icon, href]) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
             className="grid h-10 w-10 place-items-center border border-line text-mute transition-colors hover:border-silver hover:text-silver">
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
