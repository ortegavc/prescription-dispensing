import React, { useEffect, useState } from "react";
import { graphql } from "@msp/shared";
import { IRecetaElectronica } from "@infrastructure/adapters/recetaElectronica.Model";
import { useDispatch } from "react-redux";
import { casoUsoRecetaElectronica } from "@application/useCases";
import { IDespacho } from "@domain/models";
import { loadDesapacho } from "@presentation/actions";
import { SearchBar } from "./forms";
import { CustomAlert } from "./alerts";

function RecetaElectronica() {
    const [showAlert, setShowAlert] = useState({
        state: false,
        message: "",
    });
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
                    setShowAlert({
                        state: true,
                        message: error.message,
                    });
                    handleShowAlert();
                    return <p>Error: {error.message}</p>;
                }
                if (data) {
                    const receta: IRecetaElectronica = data?.Receta;
                    // Enviar preparar la información para el despacho
                    const objetoDespacho: IDespacho = await casoUsoRecetaElectronica(receta);

                    dispatch(
                        loadDesapacho({
                            objetoDespacho,
                        })
                    );
                }
            } catch (error) {
                console.error(error);
            }
        };

        console.log("query----------000000", data);
        fetchData();
    }, [loading, data, error]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    // Función para ejecutar la consulta GraphQL cuando se hace clic en el botón "Buscar"
    // 1.000912.00007543

    function handleSearch() {
        executeQuery({
            variables: {
                oid: query,
            },
        });
    }

    const handleShowAlert = () => {};

    const handleCloseAlert = () => {
        setShowAlert({
            state: false,
            message: error.message,
        });
    };

    return (
        <div className="w-full">
            <label htmlFor="search" className="block text-gray-700 font-bold">
                Buscar receta electrónica Ej: 1.000912.00007543
            </label>
            <div className="flex items-center mt-2">
                <SearchBar query={query} onChange={handleChange} placeholder="Digite el número de receta electrónica" />
                <div className="ml-2">
                    <button type="submit" className="px-2 py-1 text-white bg-blue-600 rounded" onClick={handleSearch}>
                        Buscar
                    </button>
                </div>
            </div>
            {searchResult && (
                // Aquí muestra los resultados de la búsqueda, puedes renderizarlos según tus necesidades
                <div>
                    <p>Resultado de la búsqueda:</p>
                    {/* Renderiza los resultados de búsqueda aquí */}
                </div>
            )}

            {showAlert.state && <CustomAlert message={showAlert.message} onClose={handleCloseAlert} />}
        </div>
    );
}

export default RecetaElectronica;
