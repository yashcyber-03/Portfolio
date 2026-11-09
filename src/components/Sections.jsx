import { skillGroups, services, journey } from "../data.js";

function Heading({ children, sub }) {
  return (
    <div className="mb-10 max-w-xl">
      <h2 className="font-display text-5xl font-extrabold uppercase leading-none md:text-6xl">{children}</h2>
      {sub && <p className="mt-3 text-mute">{sub}</p>}
    </div>
  );
}
export const Wrap = ({ id, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-6 py-20">{children}</section>
);
export { Heading };

export function About() {
  return (
    <Wrap id="about">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <Heading>About me</Heading>
        <div className="space-y-5 text-lg leading-relaxed text-mute">
          <p>I'm Yash, a Computer Science Engineering student in Nagpur. I got into web development because I like seeing an idea turn into something a person can open, click and use.</p>
          <p>I care about how a page looks and how it feels to use, so I plan layouts in Figma, then build them with HTML, CSS, JavaScript and React. I'm also learning Python, MySQL and data analytics alongside my degree.</p>
          <p>I learn by building. Each project, from a hospital management system to a cafe website, teaches me something I carry into the next one. I want to make digital experiences that are useful, attractive and easy to use.</p>
        </div>
      </div>
    </Wrap>
  );
}

export function Skills() {
  return (
    <Wrap id="skills">
      <Heading sub="Grouped by what I use them for.">Skills & technologies</Heading>
      <div className="grid border-t border-line md:grid-cols-4">
        {skillGroups.map((g) => (
          <div key={g.title} className="border-b border-line py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
            <h3 className="mb-4 text-sm text-brass">{g.title}</h3>
            <ul className="space-y-2 font-display text-3xl font-bold uppercase leading-tight">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

export function Services() {
  return (
    <Wrap id="services">
      <Heading sub="What I can build for you right now.">My services</Heading>
      <ul className="grid gap-x-12 md:grid-cols-2">
        {services.map(([t, d]) => (
          <li key={t} className="border-t border-line py-6">
            <h3 className="text-xl font-semibold">{t}</h3>
            <p className="mt-2 max-w-md text-mute">{d}</p>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

export function Journey() {
  return (
    <Wrap id="journey">
      <Heading>My journey</Heading>
      <ol className="ml-2 border-l border-line">
        {journey.map(([t, d], i) => (
          <li key={t} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-silver" aria-hidden />
            <p className="text-sm text-mute">Step {i + 1}</p>
            <h3 className="text-xl font-semibold">{t}</h3>
            <p className="mt-1 max-w-lg text-mute">{d}</p>
          </li>
        ))}
      </ol>
    </Wrap>
  );
}
