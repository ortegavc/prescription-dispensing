import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface FilterableListProps {
    query: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export function SearchBar({ query, onChange, placeholder }: FilterableListProps) {
    return (
        <div className="relative my-2">
            <span className="pointer-events-auto absolute top-2 left-2 h-6 w-6">
                <MagnifyingGlassIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
            <input
                id="producto-nombre"
                name="producto-nombre"
                type="text"
                autoComplete="producto-nombre"
                className="block w-full rounded-md border-0 px-8 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder={placeholder}
                value={query}
                onChange={onChange}
            />
        </div>
    );
}
