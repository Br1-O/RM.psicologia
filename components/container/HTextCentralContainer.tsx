import React, { ReactElement } from "react";
import Image from "next/image";
import clsx from "clsx";

type decorationDirection = "vertical" | "horizontal";

interface HTextCentralContainerProps {
    children: ReactElement<{ className?: string }>;
    decorationImg?: string;
    showDecoration?: boolean;
    decorationDirection?: decorationDirection;
    href?: string;
}

const HTextCentralContainer = ({
                                   children,
                                   decorationImg = "",
                                   showDecoration = false,
                                   decorationDirection = "vertical",
                                   href = ""
                               }: HTextCentralContainerProps) => {
    return (
        <div
            className={clsx(
                "relative mx-auto pt-8 lg:pt-0 px-2 md:px-0 lg:px-4",
                // container is ALWAYS horizontal
                "max-w-[90%] md:max-w-[50dvh] lg:max-w-3xl lg:max-h-60"
            )}
        >
            {/* Back rectangle */}
            <div
                className={clsx(
                    "absolute inset-0 rounded-2xl bg-[var(--primary)] opacity-50",
                    "translate-x-[-2%] translate-y-[5%]"
                )}
            />

            {/* Middle rectangle */}
            <div
                className={clsx(
                    "absolute inset-0 rounded-2xl bg-[var(--primary)] opacity-50",
                    "translate-x-[1%] translate-y-[5%]"
                )}
            />

            {/* Front rectangle */}
            <div
                className={clsx(
                    "absolute inset-0 rounded-2xl bg-[var(--primary)] opacity-50",
                    "translate-x-[-5%] translate-y-[5%]"
                )}
            />

            {/* Front rectangle (content) */}
            <div
                className={clsx(
                    "relative rounded-2xl text-white flex w-full",
                    {
                        // original logic preserved
                        "flex-row px-5 py-8 md:px-20 md:py-5":
                            decorationDirection === "vertical",

                        "flex-col px-1 py-1 md:px-1 md:py-1":
                            decorationDirection === "horizontal"
                    }
                )}
            >
                {showDecoration && (
                    <div
                        className={clsx(
                            "hidden lg:flex shrink-0",
                            {
                                // ORIGINAL horizontal decoration positioning
                                "mr-10 h-28 w-20": decorationDirection === "vertical",
                                "p-0 self-end lg:translate-x-[10.5%] h-18 w-20":
                                    decorationDirection === "horizontal"
                            }
                        )}
                    >
                        <div className="flex-col items-center justify-center relative w-8 h-44">
                            <Image
                                src={decorationImg}
                                alt=""
                                width={500}
                                height={500}
                                className={clsx(
                                    "object-contain opacity-70 invert brightness-0",
                                    {
                                        "rotate-180 -translate-y-[5%] -translate-x-[50%]":
                                            decorationDirection === "vertical",

                                        // ORIGINAL horizontal decoration logic
                                        "rotate-270 -translate-y-[28%]":
                                            decorationDirection === "horizontal"
                                    }
                                )}
                            />
                        </div>
                    </div>
                )}

                <div
                    className={clsx(
                        "flex flex-col items-center justify-center flex-1 min-w-0",
                        {
                            "mt-2": decorationDirection === "vertical",
                            "px-14": decorationDirection === "horizontal"
                        }
                    )}
                >
                    {children}

                    {href && (
                        <a
                            href={href}
                            className="inline-block mt-4 underline underline-offset-4 text-sm md:text-base self-end"
                        >
                            Conocer más
                        </a>
                    )}
                </div>

                {showDecoration && (
                    <div
                        className={clsx(
                            "hidden lg:flex shrink-0",
                            {
                                // ORIGINAL horizontal decoration positioning (right side)
                                "mr-10 h-28 w-20": decorationDirection === "vertical",
                                "p-0 lg:translate-x-[10%] h-14 w-20":
                                    decorationDirection === "horizontal"
                            }
                        )}
                    >
                        <div className="flex flex-col items-center justify-center relative w-8 h-44">
                            <Image
                                src={decorationImg}
                                alt=""
                                width={500}
                                height={500}
                                className={clsx(
                                    "object-contain opacity-70 invert brightness-0",
                                    {
                                        "rotate-180 -translate-y-[8.5%] ml-15":
                                            decorationDirection === "vertical",

                                        // ORIGINAL horizontal decoration logic
                                        "rotate-450 -translate-y-[45%]":
                                            decorationDirection === "horizontal"
                                    }
                                )}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HTextCentralContainer;
