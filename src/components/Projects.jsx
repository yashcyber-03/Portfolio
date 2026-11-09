import { useEffect, useState } from "react";
import { ArrowUpRight, X, Github } from "lucide-react";
import { projects } from "../data.js";
import { Wrap, Heading } from "./Sections.jsx";

function LinkBtn({ href, icon, children }) {
  if (!href) return <span className="btn btn-line cursor-not-allowed opacity-50" aria-disabled="true">{children}: link coming soon</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-line">{icon}{children}</a>;
}

function Preview({ title, image, big }) {
  const [broken, setBroken] = useState(false);
  const ratio = big ? "aspect-video" : "aspect-[4/3]";
  if (image && !broken) {
    return <img src={image} alt={`Screenshot of ${title}`} loading="lazy" onError={() => setBroken(true)} className={`w-full border border-line object-cover object-top ${ratio}`} />;
  }
  return (
    <div className={`grid place-items-center border border-line bg-gradient-to-br from-[#232730] to-panel ${ratio}`}>
      <span className="font-display text-6xl font-black uppercase text-line">{title.split(" ").slice(0, 2).map((w) => w[0]).join("")}</span>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);

  return (
    <Wrap id="work">
      <Heading sub="Select a project to see its details. Screenshots and links will appear once added.">Featured work</Heading>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.title} className={i === 0 ? "lg:col-span-2" : ""}>
            <button onClick={() => setActive(p)} className="group w-full text-left">
              <Preview title={p.title} image={p.image} />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-mute">{p.kind}</p>
                </div>
                <ArrowUpRight className="mt-1 shrink-0 text-mute transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-silver" />
              </div>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={() => setActive(null)}>
          <div role="dialog" aria-modal="true" aria-label={active.title} className="pop max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-line bg-panel p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-start justify-between gap-4">
              <h3 className="font-display text-4xl font-extrabold uppercase leading-none">{active.title}</h3>
              <button aria-label="Close" onClick={() => setActive(null)} className="text-mute hover:text-silver"><X /></button>
            </div>
            <Preview title={active.title} image={active.image} big />
            <p className="mt-6 text-mute">{active.desc}</p>
            <p className="mt-6 text-sm text-mute">Technology</p>
            <ul className="mt-2 flex flex-wrap gap-2">{active.stack.map((s) => <li key={s} className="border border-line px-3 py-1 text-sm">{s}</li>)}</ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkBtn href={active.demo} icon={<ArrowUpRight size={16} />}>Live demo</LinkBtn>
              <LinkBtn href={active.repo} icon={<Github size={16} />}>GitHub repository</LinkBtn>
            </div>
          </div>
        </div>
      )}
    </Wrap>
  );
}
