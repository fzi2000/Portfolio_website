import React from 'react'
import { projects } from '../data'


export default function Projects(){
return (
<section id="projects" className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-semibold">Selected Projects</h3>
<div className="mt-4 space-y-4">
{projects.map(p => (
<article key={p.id} className="p-4 rounded-lg border border-slate-100">
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
{p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm underline">Live</a> : <span className="text-xs text-slate-400">No demo</span>}
<a href={p.repo} target="_blank" rel="noreferrer" className="text-sm underline">Repo</a>
</div>
</div>
</article>
))}
</div>
</section>
)
}