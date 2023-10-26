import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

interface RadioGroupProps {
    emiteRecetaElectronica: boolean;
    setTipoReceta: (e: any) => void;
}

const plans = [
    {
        name: "Eletrónica",
    },
    {
        name: "Manual",
    },
];

export function RadioGroupTipoReceta({ emiteRecetaElectronica, setTipoReceta }: RadioGroupProps) {
    const [selected, setSelected] = useState(plans[1]);

    useEffect(() => {
        setTipoReceta(selected.name.toLowerCase() !== "manual");
    }, [selected]);

    return (
        <div className="w-full">
            <div className="mx-auto">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Tipo Receta</RadioGroup.Label>
                    <div className="space-x-2 flex">
                        {plans.map((plan) => (
                            <RadioGroup.Option
                                disabled={!emiteRecetaElectronica}
                                key={plan.name}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${active ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300" : ""}
                  ${checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-3 py-1.5 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        {checked && (
                                            <div className="shrink-0 text-white">
                                                <CheckIcon className="h-5 w-5" />
                                            </div>
                                        )}
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${checked ? "text-white" : "text-gray-900"}`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
}

function CheckIcon(props: any) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
