import React, {ReactElement} from 'react';
import Image from "next/image";


interface TextCentralContainerProps {
    children:  ReactElement<{className?: string}>;
    showVines?: boolean;
    href?: string;
}

const TextCentralContainer = ({children, showVines = false, href = ''} : TextCentralContainerProps) => {
    return (
        <div className="relative max-w-90% md:max-w-[50dvh] lg:max-w-4xl mx-auto pt-5 lg:pt-0 px-2 md:px-0 lg:px-4">
            {/* Back rectangle */}
            <div
                className="
              absolute inset-0
              translate-x-[-2%] translate-y-[5%]
              rounded-2xl
              bg-[var(--primary)]
              opacity-50
            "
            />

            {/* Middle rectangle */}
            <div
                className="
              absolute inset-0
              translate-x-[-1%] translate-y-[5%]
              rounded-2xl
              bg-[var(--primary)]
              opacity-50
            "
            />

            <div
                className="
              absolute inset-0
              translate-x-[-5%] translate-y-[5%]
              rounded-2xl
              bg-[var(--primary)]
              opacity-50
            "
            />

            {/* Front rectangle (content) */}
            <div
                className="
              relative
              rounded-2xl
              text-white
              px-5
              py-8
              md:px-20
              md:py-5
              flex
              flex-row
            "
            >
                { showVines &&
                    /* Vine decoration - only visible on lg screens */
                    <div className="hidden lg:flex flex-col items-center justify-center self-stretch mr-10">
                        <div className="relative w-8 h-44 -mb-8 -mt-4">
                            <Image
                                src="/vines-small2.png"
                                alt=""
                                fill
                                className="object-fill opacity-70 invert brightness-0 rotate-180 -translate-y-[1%]"
                            />
                        </div>
                    </div>
                }

                <div className="flex flex-col items-center justify-center mt-2">

                    {children}

                    { href &&

                            <a
                                href= {href}
                                className="inline-block mt-4 underline underline-offset-4 text-sm md:text-base self-end"
                            >
                                Conocer más
                            </a>
                    }
                </div>

                { showVines &&
                    /* Vine decoration - only visible on lg screens */
                    <div className="hidden lg:flex flex-col items-center justify-center self-stretch ml-10">
                        <div className="relative w-8 h-44 -mb-8 -mt-4">
                            <Image
                                src="/vines-small2.png"
                                alt=""
                                fill
                                className="object-fill opacity-70 invert brightness-0 rotate-180 -translate-y-[1%]"
                            />
                        </div>
                    </div>
                }
            </div>
        </div>

    );
};

export default TextCentralContainer;