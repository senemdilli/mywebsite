'use client'

import Link from "next/link"

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
        <Link href="/" 
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-800 transition-colors mb-8"
              >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            🚧 Under Construction 🚧
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              About Me Page Coming Soon!
            </h2>
            <p className="text-gray-600 text-lg">
              I'm currently crafting something awesome to share with you.
              Check back soon to learn more about who I am and what I do!
            </p>
            
            <div className="animate-pulse flex justify-center pt-4">
              <div className="h-2 w-24 bg-stone-200 rounded-full"></div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Expected completion: Soon™ 😉
          </div>
        </div>
      </main>
    </div>
  )
}