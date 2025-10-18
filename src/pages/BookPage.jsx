import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import books from "../data/books";

export default function BookPage() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="p-8">
        Livro não encontrado. <Link to="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto p-6 bg-gray-90 text-gray-100 overflow-x-y-hidden">
      <Link
        to="/"
        className="text-sm bg-slate-950 p-2 rounded text-gray-300 hover:bg-slate-900"
      >
        ← Voltar
      </Link>

      {/* capa + sinopse */}
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 flex justify-center">
          <img
            src={book.cover}
            alt={book.title}
            className="max-w-full w-96 rounded-lg shadow-lg"
          />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl text-center font-extrabold">{book.title}</h1>
          <p className="mt-4 justify-center text-gray-300">{book.full}</p>

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

      {/* personagens */}
      <h2 className="mt-10 text-xl font-bold">Personagens</h2>
      <div className="w-full h-auto mt-4 grid sm:grid-cols-2 gap-6">
        {book.characters.map((c, i) => (
          <div
            key={i}
            className="relative bg-gray-800 rounded overflow-visible h-auto flex items-end p-2"
          >
            {/* Texto do personagem */}
            <div className="z-1 w-full max-w-md h-auto p-2">
              <h3 className="font-semibold text-left">{c.name}</h3>
              <p className="text-sm text-gray-300 mt-3 break-words max-w-[180px]">
                {c.desc}
              </p>
            </div>

            {/* Imagem do personagem */}
            {(c.img || c.video) && (
              <div
                className="absolute right-0 bottom-0 flex justify-center items-end"
                style={{ width: "160px", height: "220px" }}
              >
                {/* Aura: prioriza vídeo se existir */}
                {c.auraVideo ? (
                  <video
                    src={c.auraVideo}
                    alt={`${c.name} aura`}
                    className="absolute inset-0 m-auto z-0 w-40 h-52 object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : c.aura ? (
                  <img
                    src={c.aura}
                    alt={`${c.name} aura`}
                    className="absolute inset-0 m-auto z-0 w-40 h-52 animate-pulse"
                  />
                ) : null}

                {/* Personagem: vídeo (se existir) ou imagem */}
                {c.video ? (
                  <motion.video
                    src={c.video}
                    poster={c.poster}
                    className="relative z-10 w-40 h-56 object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <motion.img
                    src={c.img}
                    alt={c.name}
                    className="relative z-10 w-40 h-56 object-contain"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}

                {/* Partículas: prioriza vídeo se existir */}
                {c.particulasVideo ? (
                  <video
                    src={c.particulasVideo}
                    alt={`${c.name} partículas`}
                    className="absolute inset-0 m-auto z-20 w-36 h-56 object-contain animate-wiggle scale-y-[-1]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : c.particulas ? (
                  <img
                    src={c.particulas}
                    alt={`${c.name} partículas`}
                    className="absolute inset-0 m-auto z-20 w-36 h-56 animate-wiggle scale-y-[-1]"
                  />
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
