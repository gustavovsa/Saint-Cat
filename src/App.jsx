import React from "react";
import books from "./data/books";
import BookCard from "./components/BookCard";
import logo from "/assets/Logodosite.png";
import ecos from "/assets/Ecos pro site.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/BookPage";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-neutral-900 p-6">
        <div className="max-w-5xl mx-auto flex items-center ">
            
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-100 text-left">
            Saint Cat Studios
          </h1>
          <img src={logo} alt="Saint Cat Studios" className="h-16" />
          <nav className="space-x-4 text-gray-200 text-right ml-auto">
            <a href="#books" className="hover:underline">
              Livros
            </a>
            <a href="#about" className="hover:underline">
              Sobre
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <section
          className="max-h-auto relative bg-gradient-to-b from-black/50 via-transparent to-transparent rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('${ecos}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",            
          }}
        >
          <div className="backdrop-brightness-50 p-6">
            <h2 className="text-4xl font-bold">Saint Cat Studios</h2>
            <p className="mt-1 text-white max-w-xl">
              Aqui, histórias atravessam mundos e realidades. Explore livros, jogos e
  experiências criativas únicas. Cada narrativa é um portal para aventuras
  que desafiam o tempo, a imaginação e os limites do possível. Mergulhe
  nesse universo e descubra novas dimensões do storytelling.
            </p>
          </div>
        </section>

        {/* Books */}
        <section id="books" className="mt-10">
          <h3 className="text-2xl font-bold">Nossos Livros</h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {books.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </section>

        <section id="about" className="mt-14 text-gray-300">
          <h3 className="text-2xl font-bold">Sobre</h3>
  <p className="mt-3 max-w-6xl text-justify">
    A <span className="text-violet-800">Saint Cat Studios</span> é o espaço
    criativo de Gusto — um estúdio dedicado a contar histórias que atravessam
    mundos, desafiam a realidade e mergulham no imaginário. Aqui, cada livro,
    jogo ou projeto audiovisual é pensado para transportar você para universos
    complexos, sombrios e envolventes.  
  </p>
  <p className="mt-2 max-w-6xl text-justify">
    Nosso objetivo é criar experiências únicas, onde narrativa, arte e
    inovação se encontram. Se você procura histórias que instigam, desafiam e
    fazem pensar, você está no lugar certo. Entre, explore e descubra novos
    mundos com a gente.
  </p>
        </section>
      </main>

      <footer className="mt-12 border-t border-black p-6 text-sm text-gray-400 text-center">
        <h3 className="font-bold">Entre em contato</h3>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/gustavovsa" target="_blank" className="hover:text-pink-400">Instagram</a>
          <a href="https://wa.me/+5595991637951" target="_blank" className="hover:text-green-400">WhatsApp</a>
          <a href="mailto:gusttavovsa@gmail.com" target="_blank" className="hover:text-blue-400">Email</a>
        </div>
        <div className="max-w-5xl mx-auto">© Saint Cat Studios</div>
      </footer>
    </div>
  );
  
}