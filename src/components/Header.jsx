import React from 'react'
import { profile } from '../data'


export default function Header() {
return (
<header className="max-w-4xl mx-auto p-6 md:p-12 flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold">{profile.name}</h1>
<p className="text-sm text-slate-600">{profile.title} • {profile.location}</p>
</div>
<nav className="space-x-4 text-sm">
<a href="#projects" className="hover:underline">Projects</a>
<a href="#skills" className="hover:underline">Skills</a>
<a href="#contact" className="hover:underline">Contact</a>
<a href={profile.resumeUrl} download className="ml-4 inline-block rounded-md border px-3 py-1 text-sm bg-white">Download CV</a>
</nav>
</header>
)
}