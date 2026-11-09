import { useState } from "react";
import { Mail, Github, Linkedin, Loader2 } from "lucide-react";
import { site } from "../data.js";
import { Wrap, Heading } from "./Sections.jsx";

const empty = { name: "", email: "", subject: "", message: "", website: "" };

export default function Contact() {
  const [f, setF] = useState(empty);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({ status: "idle", msg: "" });

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  function validate() {
    const e = {};
    if (!f.name.trim()) e.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email address.";
    if (!f.subject.trim()) e.subject = "Enter a subject.";
    if (f.message.trim().length < 10) e.message = "Write at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setState({ status: "sending", msg: "" });
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || "The message could not be sent.");
      setState({ status: "sent", msg: "Message sent. I'll reply to the email you entered." });
      setF(empty);
    } catch (err) {
      setState({ status: "error", msg: err.message === "Failed to fetch" ? "Could not reach the server." : err.message });
    }
  }

  const mailto = site.email
    ? `mailto:${site.email}?subject=${encodeURIComponent(f.subject || "Hello from your portfolio")}&body=${encodeURIComponent(f.message)}`
    : "";

  const field = "w-full border border-line bg-panel px-4 py-3 text-silver placeholder:text-mute/60";
  const Err = ({ k }) => errors[k] ? <p id={`${k}-err`} className="mt-1 text-sm text-red-400">{errors[k]}</p> : null;

  return (
    <Wrap id="contact">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <Heading sub="Have a website idea or a project in mind? Send a message and I'll get back to you.">Let's connect</Heading>
          <ul className="space-y-4">
            <li>{mailto ? <a className="flex items-center gap-3 hover:text-brass" href={mailto}><Mail size={18} />{site.email}</a> : <span className="flex items-center gap-3 text-mute"><Mail size={18} />Email address not set yet</span>}</li>
            <li><a className="flex items-center gap-3 hover:text-brass" href={site.github} target="_blank" rel="noopener noreferrer"><Github size={18} />GitHub</a></li>
            <li><a className="flex items-center gap-3 hover:text-brass" href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} />LinkedIn</a></li>
          </ul>
        </div>

        <form onSubmit={submit} noValidate className="space-y-5">
          <div className="hidden" aria-hidden>
            <label>Website<input tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} /></label>
          </div>
          {[["name", "Name", "text"], ["email", "Email", "email"], ["subject", "Subject", "text"]].map(([k, l, t]) => (
            <div key={k}>
              <label htmlFor={k} className="mb-2 block text-sm text-mute">{l}</label>
              <input id={k} type={t} value={f[k]} onChange={set(k)} className={field} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
              <Err k={k} />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-mute">Message</label>
            <textarea id="message" rows={5} value={f.message} onChange={set("message")} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
            <Err k="message" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" disabled={state.status === "sending"} className="btn btn-solid disabled:opacity-60">
              {state.status === "sending" ? <><Loader2 size={16} className="animate-spin" />Sending</> : "Send message"}
            </button>
            {mailto && <a href={mailto} className="text-sm text-mute underline hover:text-silver">Or open in your email app</a>}
          </div>
          <div role="status" aria-live="polite">
            {state.status === "sent" && <p className="text-green-400">{state.msg}</p>}
            {state.status === "error" && (
              <p className="text-red-400">{state.msg} {mailto && <>Use <a className="underline" href={mailto}>your email app</a> instead.</>}</p>
            )}
          </div>
        </form>
      </div>
    </Wrap>
  );
}
