import React from "react";

export default function Portfolio() {
  const profile = {
    name: "Zaineb Ismath",
    title: "Full‑Stack Developer",
    location: "Dubai, UAE",
    email: "zaineb@example.com",
    phone: "+971 5X XXX XXXX",
    summary:
      "I build clean, maintainable web apps with a focus on usability and performance. Experienced in React, Node.js, and data-driven frontends. Published author of a research paper on (replace with your paper title).",
    resumeUrl: "/resume.pdf", // put your resume PDF at public/resume.pdf
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/yourhandle"
  };

  const skills = [
    "JavaScript (ES6+)",
    "React / Hooks",
    "Node.js / Express",
    "TypeScript",
    "Tailwind CSS",
    "REST & GraphQL",
    "SQL & NoSQL",
    "Testing (Jest/RTL)",
    "CI / CD"
  ];

  const projects = [
    {
      title: "Co-Lab — Collaborative Brainstorming Tool",
      description:
        "Realtime brainstorming app with voting, topic clustering, and exportable idea lists.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      demo: "https://demo.example.com",
      repo: "https://github.com/your-username/co-lab"
    },
    {
      title: "Mail-O-Matic — AI Email Assistant",
      description:
        "Email summarizer and smart compose features integrated into a Gmail-like UI.",
      tech: ["React", "Python (FastAPI)", "OpenAI API"],
      demo: "",
      repo: "https://github.com/your-username/mail-o-matic"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="max-w-4xl mx-auto p-6 md:p-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">{profile.name}</h1>
            <p className="text-sm text-slate-600">{profile.title} • {profile.location}</p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a
              href={profile.resumeUrl}
              download
              className="ml-4 inline-block rounded-md border border-slate-200 px-3 py-1 text-sm bg-white shadow-sm hover:shadow"
            >
              Download CV
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 md:p-12 grid gap-10">
        {/* HERO / SUMMARY */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
          <div className="md:flex md:items-center md:gap-8">
            <div className="flex-shrink-0 w-28 h-28 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center text-xl font-medium text-slate-700">
              {profile.name.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="text-xl font-semibold">{profile.title}</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">{profile.summary}</p>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href={profile.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
                {profile.twitter && (
                  <a href={profile.twitter} target="_blank" rel="noreferrer" className="underline">Twitter</a>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-slate-500">Contact</h3>
              <p className="text-sm mt-2">{profile.email}</p>
              <p className="text-sm">{profile.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Location</h3>
              <p className="text-sm mt-2">{profile.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Paper</h3>
              <p className="text-sm mt-2">Published a research paper — add the title and link here.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1 rounded-full border bg-slate-50 text-sm">{skill}</span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Selected Projects</h3>
          <div className="mt-4 space-y-4">
            {projects.map(p => (
              <article key={p.title} className="p-4 rounded-lg border border-slate-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="text-sm mt-2 text-slate-600">{p.description}</p>
                    <div className="mt-3 text-xs flex flex-wrap gap-2">
                      {p.tech.map(t => (
                        <span key={t} className="px-2 py-1 rounded text-xs border">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex flex-col gap-2">
                    {p.demo ? (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>
                    ) : (
                      <span className="text-xs text-slate-400">No demo</span>
                    )}
                    <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm underline">Repo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE / EDUCATION (simple) */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Experience & Education</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>
              <strong>Software Engineer — ClickOut Media</strong>
              <div className="text-xs text-slate-500">Remote • Jan 2024 — Present</div>
              <div className="mt-1">Worked on full-stack features, improved CI pipelines, and shipped analytics dashboards.</div>
            </li>
            <li>
              <strong>MSc / BSc — University Name</strong>
              <div className="text-xs text-slate-500">2019 — 2023</div>
              <div className="mt-1">Relevant coursework: Data Structures, Web Development, Machine Learning.</div>
            </li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-slate-600">Prefer email? Click below to open a new email to me.</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={`mailto:${profile.email}?subject=Hi%20${encodeURIComponent(profile.name)}`}
              className="inline-block rounded-lg px-4 py-2 border bg-white text-sm hover:shadow"
            >
              Email me
            </a>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.name.value;
                const message = form.message.value;
                window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
                  "Portfolio contact from " + name
                )}&body=${encodeURIComponent(message)}`;
              }}
            >
              <div className="flex flex-col gap-2">
                <input name="name" placeholder="Your name" className="p-2 border rounded" required />
                <textarea name="message" rows={3} placeholder="Hello — let's work together" className="p-2 border rounded" required />
                <button type="submit" className="mt-2 inline-block rounded px-4 py-2 border bg-slate-50">Send</button>
              </div>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-sm text-slate-500 py-8">
          <div>© {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.</div>
        </footer>
      </main>
    </div>
  );
}

/*
Instructions:
1) Place this file as `src/Portfolio.jsx` (or `src/App.jsx`) in a React project.
2) Recommended starter: Vite + React. Or create-react-app works too.
   - Vite quick start: `npm create vite@latest my-portfolio -- --template react`
3) Tailwind CSS setup (recommended): follow Tailwind docs for React/Vite.
   - Install: npm install -D tailwindcss postcss autoprefixer
   - npx tailwindcss init -p
   - Add content paths and include tailwind directives in src/index.css: `@tailwind base; @tailwind components; @tailwind utilities;`
4) Put your `resume.pdf` in the `public/` folder so `/resume.pdf` works.
5) Replace the sample data (profile, projects, skills) with your own content.
6) Deploy to Vercel / Netlify / GitHub Pages.

Want a version with dark mode, animations (Framer Motion), or an interactive CV download button that tracks clicks? Ask me and I'll add it.
*/
