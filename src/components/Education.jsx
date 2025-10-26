import React from 'react'
import { education } from '../data'


export default function Education(){
return (
<section className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-semibold">Education</h3>
<ul className="mt-4 space-y-3 text-sm text-slate-700">
{education.map(e => (
<li key={e.id}>
<strong>{e.degree}</strong>
<div className="text-xs text-slate-500">{e.school} • {e.period}</div>
</li>
))}
</ul>
</section>
)
}