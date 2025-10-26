import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
return (
<div className="min-h-screen bg-slate-50 text-slate-900">
<Header />
<main className="max-w-4xl mx-auto p-6 md:p-12 space-y-8">
<Hero />
<Skills />
<Projects />
<Education />
<Contact />
</main>
<Footer />
</div>
)
}