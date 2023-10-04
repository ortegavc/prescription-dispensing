import React, { useEffect, useState } from "react";
import { graphql } from "@msp/shared";
import { IRecetaElectronica } from "@infrastructure/adapters/recetaElectronica.Model";
import { useDispatch } from "react-redux";
import { casoUsoRecetaElectronica } from "@application/useCases";
import { IDespacho } from "@domain/models";
import { addCabecera, addMedicamento } from "@presentation/actions";
import {SearchBar} from "./forms"

function RecetaElectronica() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");

  const { useRecetaQuery } = graphql;
  const { data, loading, error } = useRecetaQuery({
    variables: {
      oid: '1.000912.00007543',
    },
  });


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

  return (
    <div className="w-full">
      <label htmlFor="search" className="block text-gray-700 font-bold">Buscar receta electrónica</label>
      <div className="flex items-center mt-2">
      <SearchBar query={query} onChange={handleChange} placeholder="Digite el número de receta electrónica" />
        <div className="ml-2">
        <button type="submit" className="px-2 py-1 text-white bg-blue-600 rounded">Buscar</button>
        
        </div>
      </div>
    </div>
  );
}

export default RecetaElectronica;
