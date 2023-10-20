import React, { ReactNode } from 'react';
import { useSidebar } from './SidebarContext';
interface IlayoutProps {
    children: ReactNode;
}

const Content = ({ children }: IlayoutProps) => {
    const { expanded } = useSidebar();
    const margin = expanded ? 'ml-48' : 'ml-16';
    const width = expanded ? 'w-10/12' : 'w-11/12';

    return (
        <div className={`flex min-h-screen`}>
            <div className={`${margin} bg-gray-200 h-screen fixed ${width} transition-all duration-200 ease-in-out overflow-auto`}>
                {children}
            </div>
        </div>
    );
}

export const CenterMain = ({ children }: IlayoutProps) => {

    return (
        <div className={`relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-200 mt-20`}>
            {children}
        </div>

    );
}

export default Content;
