import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // animações suaves (opcional)

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 text-gray-800 text-center px-4">
      {/* Personagem animada */}
      <motion.img
        src="/assets/ErrorNotFound.png" // coloca a imagem em /public
        alt="Personagem subindo"
        className="w-64 mb-8 select-none"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30 }}
      />

      <h1 className="text-6xl font-extrabold mb-3">Oops!</h1>
      <p className="text-xl mb-8">Parece que essa página se perdeu no espaço</p>

      <motion.button
        onClick={() => navigate("/")}
        className="px-6 py-3 text-purple-600 border-2 border-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Voltar ao início
      </motion.button>
    </div>
  );
}
