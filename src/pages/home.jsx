import { Search } from "lucide-react";

export function Home() {
  return (
    <>
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Aprende sin límites
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Descubre miles de cursos online impartidos por expertos. Desarrolla
            nuevas habilidades y avanza en tu carrera profesional.
          </p>
          <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-4 relative">
           <input type="text" placeholder="¿Qué quieres aprender hoy?" className="peer placeholder:text-gray-400 w-full pl-12 py-2 pr-4 rounded-full border-2 border-gray-300 focus:border-purple-600 focus:ring-purple-600 transition-colors" />
           <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 peer-focus:text-purple-600 transition-colors" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">50,000+</div>
              <div className="text-sm md:text-base text-gray-600">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">1,200+</div>
              <div className="text-sm md:text-base text-gray-600">Cursos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-sm md:text-base text-gray-600">Instructores</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
