import React from 'react'
import { profile } from '../data'


export default function Hero(){
return (
<section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
<div className="md:flex md:items-center md:gap-8">
<div className="flex-shrink-0 w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-xl font-medium text-slate-700">
{profile.name.split(' ').map(n => n[0]).slice(0,2).join('')}
</div>
<div className="mt-4 md:mt-0">
<h2 className="text-xl font-semibold">{profile.title}</h2>
<p className="mt-3 text-slate-700 leading-relaxed">I build clean, maintainable web apps with a focus on usability and performance. Experienced in React and Node.js.</p>
<div className="mt-4 flex flex-wrap gap-3 text-sm">
<a href={profile.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
<a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
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
<p className="text-sm mt-2">{profile.paper}</p>
</div>
</div>
</section>
)
}