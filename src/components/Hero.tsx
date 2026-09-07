import { useState } from 'react'
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'
import { ArrowRight, Clock, Menu, X } from 'lucide-react'
import { useLondonTime } from '../hooks/useLondonTime'
import TextRollButton from './TextRollButton'
import CompassIcon from './CompassIcon'

const navLinks = ['Projects', 'Studio', 'Journal', 'Connect']

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const time = useLondonTime()

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#EFEFEF] flex flex-col">
      {/* Shader background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shader style={{ width: '100%', height: '100%' }}>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Navigation */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto p-2 sm:p-3">
        <nav className="flex items-center justify-between bg-white rounded-full p-[5px]">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full">
              <span className="text-white font-bold tracking-tight text-[10px] sm:text-[11px]">AX</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 pr-1">
            <span className="hidden lg:block text-[13px] text-gray-600">
              Taking on projects for Q1 2026
            </span>
            <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              <span>{time} in London</span>
            </div>
            <TextRollButton
              label="Book a strategy call"
              icon={<ArrowRight size={14} className="text-gray-900" />}
              className="bg-gray-900 pl-5 pr-2 py-2 rounded-full"
              textClassName="text-white text-[13px] font-medium"
              circleClassName="w-6 h-6 bg-white ml-3"
            />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-2.5 text-[13px] font-medium"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute inset-x-0 bottom-0 mx-3 mb-3 bg-white rounded-2xl p-6 sm:p-8 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 text-[13px] text-gray-600 border border-gray-200 rounded-full px-3 py-1.5 mb-8">
            <Clock size={14} />
            <span>{time} in London</span>
          </div>
          <nav className="flex flex-col gap-1 mb-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-[28px] sm:text-[32px] font-medium text-gray-900 py-2"
              >
                {link}
              </a>
            ))}
          </nav>
          <TextRollButton
            label="Start a project"
            icon={<ArrowRight size={14} className="text-[#F26522]" />}
            className="bg-[#F26522] pl-6 pr-2 py-2 rounded-full w-full justify-center"
            textClassName="text-white text-[14px] font-medium"
            circleClassName="w-8 h-8 bg-white ml-3"
          />
        </div>
      </div>

      <div className="flex-1" />

      {/* Hero content */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
          Axion Studio
        </p>
        <h1 className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          We craft digital experiences
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          for brands ready to dominate
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          their category online.
        </h1>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <TextRollButton
            label="Start a project"
            icon={<ArrowRight size={14} className="text-[#F26522] transition-transform" />}
            className="bg-[#F26522] hover:bg-[#e05a1a] pl-5 sm:pl-6 pr-2 py-2 rounded-full"
            textClassName="text-white text-[13px] sm:text-[14px] font-medium"
            circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white ml-3"
          />

          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-[4px] px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            <CompassIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]" />
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
              Certified Partner
            </span>
            <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded">
              Featured
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
