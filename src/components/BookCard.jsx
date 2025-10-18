import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div
      className="card-hover bg-gray-950 rounded-lg overflow-hidden relative flex flex-col items-center mx-auto"
      style={{ width: "350px" }} // aumenta a largura do card
    >
      <div className="flex justify-center">
        <img
          src={book.cover}
          alt={book.title}
          className="w-82 h-auto object-cover rounded mb-1" // aumenta a largura da imagem
        />
      </div>
      <div className="p-3 w-full text-center">
        <h3 className="text-xl font-bold w-full">{book.title}</h3>
        <p className="text-base text-gray-300 break-words whitespace-normal w-full">
          {book.short}
        </p>
      </div>
      <Link
        to={`/book/${book.id}`}
        className="absolute inset-0"
        aria-label={`Ver ${book.title}`}
      ></Link>
    </div>
  );
}
