import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import books from "../data/books";

export default function BookPage() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => setCharIndex(0), [id]);

  if (!book) {
    return (
      <div className="p-8">
        Livro não encontrado. <Link to="/">Voltar</Link>
      </div>
    );
  }

  const chars = book.characters || [];

  // autoplay opcional (comentar se não quiser)
  /*useEffect(() => {
    if (!chars.length) return;
    const t = setInterval(() => {
      setCharIndex((i) => (i + 1) % chars.length);
    }, 6000);
    return () => clearInterval(t);
  }, [chars.length]);*/

  const prev = () => setCharIndex((i) => (i - 1 + chars.length) % chars.length);
  const next = () => setCharIndex((i) => (i + 1) % chars.length);

  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto p-6 bg-gray-90 text-gray-100 overflow-x-hidden">
      <Link
        to="/"
        className="text-sm bg-slate-950 p-2 rounded text-gray-300 hover:bg-slate-900"
      >
        ← Voltar
      </Link>

      {/* capa + sinopse */}
      <div className="mt-6 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1 flex justify-center">
          <img
            src={book.cover}
            alt={book.title}
            className="max-w-80 w-full md:w-96 rounded-lg shadow-lg"
          />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl text-center font-extrabold">{book.title}</h1>
          <p className="mt-4 text-center md:text-left text-gray-300">
            {book.full}
          </p>

          {book.aviso && (
            <p className="mt-6 text-5xl text-center text-red-500 font-bold">
              {book.aviso}
            </p>
          )}

          {/* botões */}
          {book.links && (
            <div className="justify-center mt-6 flex flex-wrap gap-3">
              <a
                href={book.links.prologo}
                download
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded"
              >
                Baixar Prólogo
              </a>
              <a
                href={book.links.ebook}
                target="_blank"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 rounded"
              >
                Comprar eBook
              </a>
              <a
                href={book.links.fisico}
                target="_blank"
                className="px-4 py-2 bg-zinc-700 hover:bg-zinc-900 rounded"
              >
                Comprar Físico
              </a>
            </div>
          )}
        </div>
      </div>

      {/* personagens - carrossel */}
      <h2 className="mt-10 text-xl font-bold text-center">Personagens</h2>

      {chars.length > 0 && (
        <div className="mt-6 flex flex-col items-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            {/* área do vídeo/imagem */}
            <div
              className="bg-gray-800 rounded-lg overflow-hidden flex items-end justify-center p-0"
              style={{ minHeight: 300 }}
            >
              {/* renderiza apenas o personagem ativo para evitar múltiplos vídeos rodando */}
              {chars[charIndex] &&
                (() => {
                  const c = chars[charIndex];
                  return (
                    <div className="flex flex-col items-center">
                      {/* personagem (vídeo ou img) */}
                      {c.video ? (
                        <motion.video
                          src={c.video}
                          poster={c.poster}
                          className="relative z-20 w-80 p-0 m-0 h-auto object-contain"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      ) : (
                        <motion.img
                          src={c.img}
                          alt={c.name}
                          className="relative z-20 w-44 h-auto object-contain"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </div>
                  );
                })()}
            </div>

            {/* controls */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
            >
              ›
            </button>
          </div>

          {/* descrição dinâmica */}
          <div className="mt-4 w-full max-w-xs sm:max-w-sm md:max-w-md text-center">
            <h3 className="font-semibold text-lg">{chars[charIndex].name}</h3>
            <p className="text-sm text-gray-300 mt-2 break-words">
              {chars[charIndex].desc}
            </p>
          </div>

          {/* dots */}
          <div className="mt-6 flex gap-2 ">
            {chars.map((_, i) => (
              <button
                key={i}
                onClick={() => setCharIndex(i)}
                className={` rounded-full  ${
                  i === charIndex ? "bg-gray-200 w-8 h-2" : "bg-gray-500/60 w-2 h-2 hover:bg-gray-800 hover:w-8 h-2"
                }`}
                aria-label={`Ir para ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
