import React,  { useEffect, useState } from 'react';
import * as graphql from '../graphql/__generated__/graphql-types';
import CardLayout from './cardLayout'

/**
 * Obtiene las terminales del usuario logeado y por entidad
 * @returns Terminales
 */
export  function Dashboard() {
     console.log('--Terminales----')

    const { useTerminalUsuarioListLazyQuery } = graphql;
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

        //cargar los datos


    }, [sessionStorage.getItem("usuarioNombre_terminal")])

    const { heading } = terminal;
    
    return (
        <div className="p-7">
            {/* <Header
        title="Tailwind CSS & React Cards - Material Tailwind PRO"
        description="A card is used to display content and actions about a single topic. See below our examples of Card Components built with Tailwind CSS and React."
      /> */}
            <h5>{heading.title}</h5>
            <label className='font-medium text-gray-500'>{heading.description}</label>
            <hr className="mt-5 "></hr>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {
                    state.consolas ? (state.consolas?.map((row: any) => {
                        const { terminal } = row;

                        return (

                            <CardLayout data={{
                                icon: null,
                                title: terminal.nombre || '',
                                description: terminal.nombre || '',
                                link: '/menu'
                              }} />

                        )
                    })) : (
                        <h1>No existen consolas</h1>
                    )
                }

            </div>
        </div>
    );
}

