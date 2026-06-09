import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-8xl font-bold text-gray-800">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold text-gray-700">
        Página no encontrada
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        La página que buscas no existe o fue movida.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;