import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  precioNormal: number;
  precioDescuento: number;
  descuento: number;
  ruta: string;
}

const ProductosDestacados: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(
          "https://web-fe-prj2-api-wobbegong.onrender.com/datafhp"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        const data = await response.json();
        setProductos(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (isLoading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="grid grid-cols-1 gap-4 mx-11 my-8 font-montserrat sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productos.map((producto: Producto) => (
        <div
          key={producto.id}
          className="relative bg-custom-gradient p-4 rounded-lg text-center shadow-lg flex flex-col justify-between h-full overflow-hidden cursor-pointer"
        >
          <Link to="/" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-transparent z-10"></div>
          <div className="relative z-20 flex justify-center items-center mb-auto h-[300px]">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative z-30 flex flex-col justify-end text-center p-4">
            <h2 className="text-lg font-semibold text-black my-2">
              {producto.nombre}
            </h2>
            <p className="text-sm line-through text-purple-300">
              ${producto.precioNormal.toFixed(2)}
            </p>
            <p className="text-white font-bold mb-2">
              ${producto.precioDescuento.toFixed(2)}{" "}
              <span className="text-pink-500 text-sm">-{producto.descuento}%</span>
            </p>
            <Link to="/" className="w-full">
              <button className="bg-gray-800 text-indigo-200 py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition-colors mt-2 w-full">
                Agregar al Carrito
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductosDestacados;
