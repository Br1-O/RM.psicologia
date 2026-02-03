import React from 'react';
import { LucideIcon } from "lucide-react";
import clsx from 'clsx';

type separatorStyle = 'primary' | 'secondary' | 'third';
interface TextSeparatorProps {
    Icon?: LucideIcon;
    title: string;
    bgColor?: separatorStyle;
}

//styles
const baseStyle = 'flex flex-row justify-center items-center w-full h-22 my-8'
const styles: Record<separatorStyle, string> = {
    primary: 'bg-[var(--primary)] text-white',
    secondary: 'bg-[var(--secondary)] text-[var(--primary)]',
    third: 'bg-[var(--third)] text-[var(--primary)]',
}

const TextSeparator = ({Icon, title, bgColor = 'primary'}:TextSeparatorProps) => {
    return (
        <div className={clsx(baseStyle, styles[bgColor])}>

            {Icon &&
                <div className={"p-2 border border-solid rounded-full"}>
                    <Icon size={32} strokeWidth={1.5} />
                </div>
            }

            <h2 className="text-xl sm:text-2xl md:text-4xl leading-tight ml-5 font-bold">
                {title}
            </h2>

        </div>
    );
};

export default TextSeparator;