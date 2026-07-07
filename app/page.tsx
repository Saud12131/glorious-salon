import Image from "next/image";
import { salonData } from "../data/salon";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-amber-500 selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl tracking-wider text-amber-600 uppercase">
                {salonData.name}
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-base font-medium text-gray-700 hover:text-amber-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-base font-medium text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
              alt="Salon Interior"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mt-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
              {salonData.heroSubtitle}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-200 italic font-light drop-shadow-md">
              {salonData.heroDescription}
            </p>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-600/50 hover:-translate-y-0.5"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative h-96 lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Salon Services"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
              
              {/* Content */}
              <div className="mt-12 lg:mt-0">
                <h2 className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl mb-6">
                  About Our Salon
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {salonData.aboutText}
                </p>
                <ul className="space-y-5">
                  {salonData.features.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Custom Star/Badge Icon */}
                        <svg className="h-6 w-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-semibold text-gray-800">
                        {feature.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#1a202c] pt-20 pb-10 border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white tracking-wider mb-2">
                {salonData.name}
              </h3>
              <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-8">
                Official Business Identification
              </p>
              
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-amber-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-white font-medium mb-1">Address</p>
                    <p className="text-sm leading-relaxed">{salonData.fullAddress.door}, {salonData.fullAddress.building}</p>
                    <p className="text-sm leading-relaxed">{salonData.fullAddress.street}</p>
                    <p className="text-sm leading-relaxed">{salonData.fullAddress.city}, {salonData.fullAddress.state}</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-amber-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-white font-medium mb-1">Phone Number</p>
                    <p className="text-sm">{salonData.phone}</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-amber-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-white font-medium mb-1">Email Address</p>
                    <p className="text-sm">{salonData.email}</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-amber-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-white font-medium mb-1">Udyam Registration Number</p>
                    <p className="text-sm">{salonData.udyam}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Business Hours */}
            <div className="bg-[#222a38] p-8 rounded-xl border border-gray-700 shadow-xl self-start">
              <h4 className="text-xl font-semibold text-amber-500 mb-6 border-b border-gray-700 pb-4">
                Business Hours
              </h4>
              <div className="flex justify-between items-center text-gray-300 mb-6">
                <span className="font-medium">Monday - Sunday</span>
                <span className="bg-amber-600/20 text-amber-500 px-4 py-1.5 rounded-full text-sm font-semibold border border-amber-600/30">
                  {salonData.businessHours.mondayToSunday}
                </span>
              </div>
              <p className="text-sm text-gray-400 italic leading-relaxed">
                {salonData.businessHours.description}
              </p>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {salonData.name} | ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
