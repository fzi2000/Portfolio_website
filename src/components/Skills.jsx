import React from 'react'
import { skills } from '../data'


export default function Skills(){
return (
<section id="skills" className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-semibold">Skills</h3>
<div className="mt-4 flex flex-wrap gap-3">
{skills.map(s => (
<span key={s} className="px-3 py-1 rounded-full border bg-slate-50 text-sm">{s}</span>
))}
</div>
</section>
)
}