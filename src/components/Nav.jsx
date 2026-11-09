import { useState } from "react";
import { Menu, X } from "lucide-react";

const items = [["Work", "#work"], ["Skills", "#skills"], ["About", "#about"], ["Services", "#services"], ["Journey", "#journey"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
        <a href="#top" className="font-display text-2xl font-black tracking-wide">YS</a>
        <ul className="hidden items-center gap-8 text-sm text-mute md:flex">
          {items.map(([l, h]) => (<li key={h}><a className="transition-colors hover:text-silver" href={h}>{l}</a></li>))}
          <li><a className="btn btn-line !py-2" href="#contact">Let's connect</a></li>
        </ul>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="pop border-t border-line bg-ink px-6 py-4 md:hidden">
          {[...items, ["Let's connect", "#contact"]].map(([l, h]) => (
            <li key={h}><a className="block py-3 text-lg" href={h} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
