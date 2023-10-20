import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSidebar } from './SidebarContext';
import { useEventDispatcher } from 'eventDispatcher';



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { toggleSidebar } = useSidebar();
    const [infoUser, setInfoUser] = useState<any>();
    const eventDispatcher = useEventDispatcher();

    useEffect(function () {
    
        eventDispatcher.subscribe("infoUserClicked", function (data) {
            setInfoUser(data)
          console.log('000000--p',data)
        });
        //Quitamos el mensaje de error
        
        setTimeout(function () {
         
        }, 2000);
      });

    return (

        <div className="w-full px-2 sm:px-6 lg:px-8 bg-blue-600 top-0 fixed z-10">
            <div className="relative flex h-16 items-center justify-end">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button id="menu-button" onClick={toggleSidebar}>
                        <i className="fas fa-bars text-white text-lg"></i>
                    </button>

                    <div className="flex flex-1 sm:items-center justify-center md:justify-center">
                        <div className='flex mx-7'>
                            <div className='md:flex text-gray-100 md:items-center' >Ministerio de Salud Pública</div>

                            <div className="flex flex-shrink-0 items-center px-3">
                                <img
                                    className="h-8 w-auto"
                                    src="http://dev-sni.msp.gob.ec/@msp/shared/1.0.0/20231bc1ffac3dcc134d.svg"
                                    alt="Ministerio Salud Publica"
                                />
                            </div>
                            <div className='md:flex text-gray-100 md:items-center' >República del Ecuador</div>
                        </div>
                        <div className='w-7'></div>
                        <div className="px-7 sm:ml-6 sm:block text-white">
                            <div className="flex space-x-3">
                            {infoUser?.nombre}  {infoUser?.bodega}  {infoUser?.nombreTerminal}  {infoUser?.numeroturno} 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                   

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>


                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Editar perfil
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Configurar
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Salir
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>



    )
}
