import React from 'react'
import { profile } from '../data'


export default function Footer(){
return (
<footer className="text-center text-sm text-slate-500 py-8">
<div>© {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.</div>
</footer>
)
}