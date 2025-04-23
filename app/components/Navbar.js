// components/Navbar.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Samuli Lehtinen</h1>
        
        {/* Bouton menu burger mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Liens de navigation - desktop */}
        <ul className="hidden md:flex gap-6">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/formation">Formation</Link></li>
          <li><Link href="/projects">Projets</Link></li>
          <li><Link href="/cv">CV</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Liens de navigation - mobile */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 px-2">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><Link href="/formation" onClick={() => setIsOpen(false)}>Formation</Link></li>
          <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projets</Link></li>
          <li><Link href="/cv" onClick={() => setIsOpen(false)}>CV</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}
