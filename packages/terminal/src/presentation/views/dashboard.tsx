import React, { useEffect, useState } from "react";
import { graphql } from "@msp/shared";
import { TerminalEstado } from "@presentation/views/components";
/**
 * Obtiene las terminales del usuario logeado y por entidad
 * @returns Terminales
 */
export function Dashboard() {
    const {
        useTerminalUsuarioListLazyQuery
    } = graphql;

    //const { useTerminalUsuarioListLazyQuery } = graphql;
    const [listarConsolas, { data, loading, error }] = useTerminalUsuarioListLazyQuery();

    const [state, setState] = useState({
        usuario: sessionStorage.getItem("usuarioNombre_terminal"),
        perfil: sessionStorage.getItem("perfilNombre_terminal"),
        consolas: []

    });

    const terminal = {
        heading: {
            title: "TERMINAL DE DESPACHO DE MEDICAMENTOS",
            subtitle: "Ministerio de Salud Pública del Eecuador",
            description:
                "Por favor , antes de continuar revise la siguiente información",
        }
    };


    useEffect(function () {
        if (sessionStorage.getItem("usuarioNombre_terminal")) {

            setState(prevState => ({
                ...prevState,
                usuario: sessionStorage.getItem("usuarioNombre_terminal"),
                perfil: sessionStorage.getItem("perfilNombre_terminal"),

            }));
        }

        listarConsolas(
            {
                variables: {
                    usuario_id: sessionStorage.getItem("usuarioId_terminal") + ''
                }, onCompleted: (data: any) => {
                    setState(prevState => ({
                        ...prevState,
                        consolas: data.terminalUsuarioList

                    }));
                }
            })

    }, [sessionStorage.getItem("usuarioNombre_terminal")])

    const handleIngresarClick = (idTerminal: number) => {
        // Agrega aquí el código que deseas ejecutar cuando se hace clic en el botón
        alert('Hiciste clic en el botón "Ingresar"');
    };

    return (

        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 p-4`}>
            {
                state.consolas ? (state.consolas?.map((row: any) => {
                    const { terminal } = row;


                    return (
                        <div className="bg-light-blue-200 p-4 rounded-lg border border-light-blue-300 shadow-md">
                            <div className="bg-gray-100 px-3">
                                <h2 className="text-2xl font-semibold text-uppercase mb-4">{terminal.nombre}</h2>
                            </div>
                            <hr></hr>
                            <h6 className="text-sm font-semibold mb-4">{terminal.bodega.nombre}</h6>

                            <div className="terminal-info">
                                <div className="chart-container position-relative" style={{ height: '200px', width: '200px' }}>
                                    <TerminalEstado name="Estado:" status={terminal.estado} />
                                    <TerminalEstado name="En Uso:" status={terminal.enuso} />
                                    <TerminalEstado name="Receta Electrónica:" status={terminal.recetaelectronica} />
                                </div>
                            </div>
                            <div className="flex justify-center w-full">

                                <button className="w-3/4 p-3 justify-center bg-blue-600 text-white rounded-md hover:bg-primary-dark focus:outline-none" onClick={() => handleIngresarClick(terminal.id)}>
                                    Ingresar
                                </button>
                            </div>
                        </div>


                    )
                })) : (
                    <h1>No existen consolas</h1>
                )
            }
        </div>


    );
}

