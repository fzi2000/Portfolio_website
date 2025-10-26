import React from 'react'
import { profile } from '../data'


export default function Contact(){
return (
<section id="contact" className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-semibold">Get in touch</h3>
<p className="mt-2 text-sm text-slate-600">Prefer email? Click the button to open a new email to me.</p>
<div className="mt-4 flex gap-4">
<a href={`mailto:${profile.email}?subject=Hi%20${encodeURIComponent(profile.name)}`} className="inline-block rounded-lg px-4 py-2 border bg-white">Email me</a>
<form onSubmit={(e)=>{e.preventDefault(); const form=e.target; const name=form.name.value; const message=form.message.value; window.location.href=`mailto:${profile.email}?subject=${encodeURIComponent('Portfolio contact from '+name)}&body=${encodeURIComponent(message)}`}} className="flex-1">
<div className="flex gap-2">
<input name="name" placeholder="Your name" className="p-2 border rounded w-1/3" required />
<input name="email" placeholder="Your email" className="p-2 border rounded w-1/3" required />
</div>
<textarea name="message" rows={3} placeholder="Hello — let's work together" className="mt-2 p-2 border rounded w-full" required />
<button type="submit" className="mt-2 rounded px-4 py-2 border bg-slate-50">Send</button>
</form>
</div>
</section>
)
}