import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { graphql, useEventDispatcher } from "@msp/shared";
import { TerminalEstado } from "@presentation/views/components";
import { addTerminal } from '@presentation/actions'
import { useDispatch } from "react-redux";
/**
 * Obtiene las terminales del usuario logeado y por entidad
 * @returns Terminales 
 */
export function Dashboard() {
    const [apiTerminal, setApiTerminal] = useState<any>();
    const dispatch = useDispatch();
    const {
        useTerminalUsuarioListLazyQuery,
        useTurnoOpenMutation,
        useTurnoCloseMutation
    } = graphql;
    const eventDispatcher = useEventDispatcher();
    const navigate = useNavigate();


    const [listarConsolas, { data, loading, error }] = useTerminalUsuarioListLazyQuery();
    /**
     * CREAR TURNO
     */
    const [createTurno] = useTurnoOpenMutation({

        onCompleted: (data: any) => {
            const { turnoOpen } = data;

            dispatch(
                addTerminal(
                    {
                        entidad: {
                            id: apiTerminal.entidad.id,
                            nombre: apiTerminal.entidad.nombre,
                            unicodigo: apiTerminal.entidad.id,
                            direccion:apiTerminal.entidad.direccion
                        },
                        bodega: {
                            id: apiTerminal.bodega.id,
                            codigo: apiTerminal.bodega.codigo,
                            nombre: apiTerminal.bodega.nombre
                        },
                        turno: {
                            id: turnoOpen.id,
                            numeroturno: turnoOpen.numeroturno,
                            numerodispensacion: turnoOpen.numerodispensacion,
                            estado: turnoOpen.estado,
                            fechainicio: turnoOpen.fechainicio,
                            usuario: sessionStorage.getItem("usuarioNombre_terminal"),
                            idUsuario: sessionStorage.getItem("usuarioId_terminal"),
                            rolUsuario: sessionStorage.getItem("rol_seleccionado")
                        },
                        id: turnoOpen.terminal_id,
                        nombre: apiTerminal.nombre,
                        recetaElectronica: apiTerminal.recetaelectronica ? true : false,



                    }
                )
            );
            eventDispatcher.dispatch("infoUserClicked", {
                type: "infoUserClicked",
                nombre: sessionStorage.getItem("usuarioNombre_terminal") + " / ",
                bodega: apiTerminal.bodega.nombre + " / ",
                nombreTerminal: apiTerminal.nombre + " / ",
                numeroturno: " No. turno: " + turnoOpen.numeroturno,
            });
            //Enviar a despachar en la terminal seleccionada
            navigate('/terminal/usuario');
        },
        onError: (error: any) => {


            console.log('MonError', error);
        },
    });



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



    const handleIngresarClick = (terminal: any) => {
        //Guardamos en una variable los datos de la terminal seleccionada
        setApiTerminal(terminal)

        createTurno({
            variables: {
                dataInput: {
                    terminal_id: terminal.id
                }
            }
        });


    };



    return (

        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 p-4`}>
            {
                state.consolas ? (state.consolas?.map((row: any) => {
                    const { terminal } = row;


                    return (
                        <div className="bg-light-blue-200 p-4 rounded-lg border border-light-blue-300 shadow-md">
                            <div className="bg-gray-100 px-3">
                            <h2 className="text-2xl font-semibold text-uppercase mb-4">{terminal.entidad.nombre}</h2>
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

                                <button className="w-3/4 p-3 justify-center bg-blue-600 text-white rounded-md hover:bg-primary-dark focus:outline-none" onClick={() => handleIngresarClick(terminal)}>
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



