// components/Navbar.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo + Nom cliquables */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <h1 className="text-xl font-bold">Samuli Lehtinen</h1>
        </Link>

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
          <li><Link href="/formation">Formation</Link></li>
          <li><Link href="/projects">Projets</Link></li>
          <li><Link href="/about">À propos</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Liens de navigation - mobile */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 px-2">
          <li><Link href="/formation" onClick={() => setIsOpen(false)}>Formation</Link></li>
          <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projets</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>À propos</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}
