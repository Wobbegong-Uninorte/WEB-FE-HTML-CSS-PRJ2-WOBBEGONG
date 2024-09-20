import React, { useState } from 'react';
import { filters } from '../data/dataFilter';

const ProductFilter: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === 'overlay') {
      setShowFilters(false);
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
        onClick={toggleFilters}
      >
        Filtros
      </button>

      {showFilters && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-[#2d1d6b] text-white w-[90%] sm:w-[70%] md:w-[50%] lg:w-[350px] max-w-[350px] p-5 h-full absolute left-0 transition-all duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-3 text-[#7c92ff]">Filtros</h2>

            {filters.map((filter, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-base font-semibold mb-2 text-[#7c92ff]">{filter.categoria}</h3>
                <ul className="pl-1">
                  {filter.opciones.map((opcion, i) => (
                    <li key={i} className="flex items-center mb-1 text-sm">
                      <input
                        type="checkbox"
                        className="mr-2"
                        id={`${filter.categoria}-${opcion.nombre}`}
                      />
                      <label htmlFor={`${filter.categoria}-${opcion.nombre}`}>
                        {opcion.nombre} ({opcion.cantidad})
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-700 w-full text-sm mt-2">
              Filtrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
