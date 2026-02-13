import React from "react";
import { ReactNode } from "react";
import clsx from "clsx";

interface VTextCentralContainerProps {
    children: ReactNode;
    className?: string;
}

export function VTextCentralContainer({
                                            children,
                                            className
                                        }: VTextCentralContainerProps) {
    return (
        <div
            className={clsx(
                "relative flex items-center justify-center w-full h-full",
                className
            )}
        >
            {/* far layer */}
            <div className="absolute inset-0 rounded-2xl translate-x-6 translate-y-6 bg-(--primary)/25" />

            {/* mid layer */}
            <div className="absolute inset-0 rounded-2xl translate-x-4 translate-y-4 bg-(--primary)/40" />

            {/* near layer */}
            <div className="absolute inset-0 rounded-2xl translate-x-2 translate-y-2 bg-(--primary)/60" />

            {/* content wrapper – centered */}
            <div className="relative w-full h-full rounded-2xl flex items-center justify-center pt-8 pb-4 px-4">
                {children}
            </div>
        </div>
    );
}


export default VTextCentralContainer;
