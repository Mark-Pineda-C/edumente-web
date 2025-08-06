import { Brain } from "lucide-react";
import * as React from 'react'

export function Header({ page, setPage }) {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setPage("home")}
          >
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">EduMente</span>
          </button>
          <nav className="flex items-center space-x-8">
            <button
              className={`${
                page === "cursos" ? "text-purple-600" : "text-gray-500"
              } hover:text-purple-600 transition-colors cursor-pointer`}
              onClick={() => setPage("cursos")}
            >
              Cursos
            </button>
            <button
              className={`${
                page === "categorias" ? "text-purple-600" : "text-gray-500"
              } hover:text-purple-600 transition-colors cursor-pointer`}
              onClick={() => setPage("categorias")}
            >
              Categorias
            </button>
            <button
              className={`${
                page === "instructores" ? "text-purple-600" : "text-gray-500"
              } hover:text-purple-600 transition-colors cursor-pointer`}
              onClick={() => setPage("instructores")}
            >
              Instructores
            </button>
            <button
              className={`${
                page === "sobre-nosotros" ? "text-purple-600" : "text-gray-500"
              } hover:text-purple-600 transition-colors cursor-pointer`}
              onClick={() => setPage("sobre-nosotros")}
            >
              Sobre Nosotros
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="flex cursor-pointer px-4 py-2 leading-none rounded-lg border-2 border-neutral-300 hover:border-neutral-400 transition-colors">
              Iniciar Sesión
            </button>
            <button className="flex cursor-pointer px-4 py-2 leading-none rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
