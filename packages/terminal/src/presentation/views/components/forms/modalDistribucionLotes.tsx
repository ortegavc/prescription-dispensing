import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StockProductoBodegaListComponent } from "./stockProductoBodegaList";

interface ModalDistribucionLoteProps {
    isOpen: boolean;
    setIsOpen: (e: any) => void;
    producto: any | null;
    lotes: any[];
}

export function ModalDistribucionLote({ isOpen, setIsOpen, producto, lotes }: ModalDistribucionLoteProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Distribución Producto Lote {producto?.cantidaddespachada}
                                </Dialog.Title>
                                <div className="col-span-full mt-2 px-2 py-2 flex gap-1 justify-between text-sm font-medium leading-6 text-gray-900 bg-gray-400">
                                    <div className="flex-1 w-64">Producto</div>
                                    <div className="flex-initial w-20">Solicitado</div>
                                    <div className="flex-initial w-20">Despachado</div>
                                </div>
                                <div className="flex py-2 gap-1">
                                    <div className="flex-1 w-64 justify-between text-base font-medium text-gray-900">
                                        <h3>{producto?.nombre}</h3>
                                        <p className="text-gray-500">Stock: {producto?.stock}</p>
                                    </div>
                                    <div className="flex-initial w-20">
                                        <input
                                            type="number"
                                            id="cant-req"
                                            value={producto?.cantidadrequerida}
                                            className="w-full rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="flex-initial w-20">
                                        <input
                                            type="number"
                                            id="cant-des"
                                            value={producto?.cantidaddespachada}
                                            className="w-full rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <StockProductoBodegaListComponent lotes={lotes} />
                                <div className="mt-4 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={setIsOpen}
                                    >
                                        Aceptar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
