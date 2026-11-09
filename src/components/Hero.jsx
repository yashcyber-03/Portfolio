import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Social from "./Social.jsx";

export default function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true);
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 pb-16 pt-14 md:grid-cols-[1.4fr_1fr] md:pt-20">
        <div>
          <p className="mb-4 text-sm text-mute">Web Developer & Creative Problem Solver, Nagpur</p>
          <h1 className="font-display font-black uppercase leading-[.82] tracking-tight">
            <span className="sweep silver-text block text-[clamp(4.5rem,17vw,12rem)]">Yash</span>
            <span className="sweep sweep-2 silver-text block text-[clamp(4.5rem,17vw,12rem)]">Supare</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-mute">
            I'm a Computer Science Engineering student who builds clear, responsive websites and designs the interfaces before writing the code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="btn btn-solid">View my work <ArrowUpRight size={16} /></a>
            <a href="#contact" className="btn btn-line">Let's connect</a>
          </div>
          <div className="mt-8"><Social /></div>
        </div>

        {/* Portrait slot: drop your photo at public/profile.jpg. Until then a monogram shows. */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="absolute -right-6 -top-6 h-full w-full rounded-full border border-line" aria-hidden />
          <div className="relative h-full w-full overflow-hidden border border-line bg-panel">
            {hasPhoto ? (
              <img src="/profile.png" alt="Portrait of Yash Supare" className="h-full w-full object-cover grayscale" onError={() => setHasPhoto(false)} />
            ) : (
              <div className="grid h-full place-items-center bg-gradient-to-b from-[#232730] to-panel">
                <span className="font-display text-[9rem] font-black leading-none text-line">YS</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-y border-line bg-line text-sm md:grid-cols-4">
        {[["Based in", "Nagpur, India"], ["Studying", "Computer Science Engineering"], ["Featured projects", "5"], ["Built with", "React, Vite, Tailwind"]].map(([k, v]) => (
          <div key={k} className="bg-ink px-6 py-5"><dt className="text-mute">{k}</dt><dd className="mt-1 text-base font-semibold">{v}</dd></div>
        ))}
      </dl>
    </section>
  );
}
