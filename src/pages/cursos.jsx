export function Cursos() {
  return (
    <>
      <section className="py-8 md:py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Todos los Cursos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Explora nuestra colección completa de 20 cursos diseñados por
            expertos
          </p>
          <div className="space-y-4">
            <div className="relative max-w-md"></div>
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}
