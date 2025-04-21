// components/Navbar.js
'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio de Lehtinen Samuli</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/formation_projects">Formation et projets</Link></li>
          <li><Link href="/cv">CV</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
  