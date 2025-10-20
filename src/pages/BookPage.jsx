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
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-4">Livro não encontrado</h1>
        <p className="mb-6">Você não deveria estar aqui...</p>
        <img src="" alt="" />
        <Link to="/" className="text-blue-500 hover:underline">
          Voltar ao fluxo de tempo
        </Link>
      </div>
    );
  }

  const chars = book.characters || [];

  const prev = () => setCharIndex((i) => (i - 1 + chars.length) % chars.length);
  const next = () => setCharIndex((i) => (i + 1) % chars.length);

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto p-6 bg-gray-900 text-gray-100 overflow-x-hidden overflow-y-hidden">
      <Link
        to="/"
        className="text-sm bg-slate-950 p-2 rounded text-gray-300 hover:bg-slate-900"
      >
        ← Voltar
      </Link>

      {/* capa + sinopse */}
      <div className="mt-8 grid md:grid-cols-3 gap-6 items-start overflow-y-hidden">
        <div className="md:col-span-1 flex justify-center overflow-y-hidden">
          <img
            src={book.cover}
            alt={book.title}
            className="overflow-y-hidden w-full md:w-96 max-w-[420px] rounded-lg shadow-lg"
          />
        </div>

        <div className="md:col-span-2 overflow-y-hidden">
          <h1 className="mt-32 text-4xl items-end justify-left md:text-center font-extrabold">
            {book.title}
          </h1>
          <p className="mt-6 text-1xl items-end justify-left md:text-center font-normal">
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
                className="px-4 py-2 border-2 border-red-500 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-full"
              >
                Baixar Prólogo
              </a>
              <a
                href={book.links.ebook}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border-2 border-slate-500 text-slate-500 hover:bg-slate-900 hover:text-white hover:border-slate-900 rounded-full"
              >
                Comprar eBook
              </a>
              <a
                href={book.links.fisico}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border-2 border-zinc-700 text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 rounded-full"
              >
                Comprar Físico
              </a>
            </div>
          )}
        </div>
      </div>

      {/* personagens - carrossel */}

      {chars.length > 0 && (
        <div className="bg-gray-950 bg-gradient-to-t from-black to-transparent rounded-lg mt-10 w-full flex flex-col md:flex-row items-center gap-0 pt-0">
          {/* área do vídeo - esquerda (ocupa mais espaço) */}
          <div
            className="flex-0 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center relative p-0"
            style={{ minHeight: 320, maxHeight: 640 }}
          >
            {/* renderiza apenas o personagem ativo */}
            {chars[charIndex] &&
              (() => {
                const c = chars[charIndex];
                return (
                  <div className="w-full flex items-center justify-center">
                    {c.video ? (
                      <motion.video
                        src={c.video}
                        poster={c.poster}
                        className="w-full max-w-[380px] h-auto object-contain rounded"
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
                        className="w-full max-w-[560px] h-auto object-contain rounded"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                    {/* overlayes para borda esmaecida */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-lg"
                      style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.45)" }}
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 rounded-l-lg bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 rounded-r-lg bg-gradient-to-l from-black/60 to-transparent" />
                    <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent" />
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                );
              })()}

            {/* controls sobre o vídeo (centralizados verticalmente) */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
            >
              ›
            </button>
          </div>

          {/* descrição - direita */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-4 md:p-10 md:translate-y-3 md:translate-x-32">
            <div className="rounded-lg p-4 md:p-6 flex flex-col items-center justify-center h-full min-h-[320px]">
              <h3 className="font-bold text-2xl md:text-4xl leading-tight">
                {chars[charIndex].name}
              </h3>
              <p className="text-gray-300 mt-2 break-words text-justify md:text-xl leading-relaxed">
                {chars[charIndex].desc}
              </p>
            </div>

            {/* dots */}
            <div className="flex gap-2 justify-center md:justify-center mt-2">
              {chars.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCharIndex(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === charIndex
                      ? "bg-gray-200 w-8 h-2"
                      : "bg-gray-500/60 w-2 h-2 hover:bg-gray-800 hover:w-8"
                  }`}
                  aria-label={`Ir para ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
