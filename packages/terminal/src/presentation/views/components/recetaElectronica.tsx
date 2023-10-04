import React, { useEffect, useState } from "react";
import { graphql } from "@msp/shared";
import { IRecetaElectronica } from "@infrastructure/adapters/recetaElectronica.Model";
import { useDispatch } from "react-redux";
import { casoUsoRecetaElectronica } from "@application/useCases";
import { IDespacho } from "@domain/models";
import { addCabecera, addMedicamento } from "@presentation/actions";
import { SearchBar } from "./forms";

function RecetaElectronica() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<IRecetaElectronica | null>(null); // Estado para almacenar los resultados de búsqueda

  const { useRecetaLazyQuery } = graphql;

  const [executeQuery, { data, loading, error }] = useRecetaLazyQuery(); // Usar useLazyQuery para ejecutar consultas bajo demanda

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loading) {
          return <p>Cargando...</p>;
        }

        if (error) {
          return <p>Error: {error.message}</p>;
        }

        const receta: IRecetaElectronica = data?.Receta;
        // Enviar preparar la información para el despacho
        const objetoDespacho: IDespacho = await casoUsoRecetaElectronica(receta);

        dispatch(
          addCabecera({
            recetaCabecera: objetoDespacho,
          })
        );

        dispatch(
          addMedicamento({
            recetaDetalle: objetoDespacho.despachodetalle,
          })
        );

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  // Función para ejecutar la consulta GraphQL cuando se hace clic en el botón "Buscar"
  //1.000912.00007543',

  function handleSearch() {
    console.log('query',query)
    executeQuery({
      variables: {
        oid: query,
      },
    });
  }

  return (
    <div className="w-full">
      <label htmlFor="search" className="block text-gray-700 font-bold">Buscar receta electrónica</label>
      <div className="flex items-center mt-2">
        <SearchBar query={query} onChange={handleChange} placeholder="Digite el número de receta electrónica" />
        <div className="ml-2">
          <button type="submit" className="px-2 py-1 text-white bg-blue-600 rounded" onClick={handleSearch}>Buscar</button>
        </div>
      </div>
      {searchResult && (
        // Aquí muestra los resultados de la búsqueda, puedes renderizarlos según tus necesidades
        <div>
          <p>Resultado de la búsqueda:</p>
          {/* Renderiza los resultados de búsqueda aquí */}
        </div>
      )}
    </div>
  );
}

export default RecetaElectronica;


