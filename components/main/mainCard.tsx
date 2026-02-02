import React from 'react'
import Badge from '../styleWrap/badge'
import Link from "next/link";
import Image from "next/image";

interface BadgeInfo {
    badgeText: string
    hrefBadge: string
}

interface MainCardInfo {
    imgSrc: string
    imgAlt: string
    h1: string
    h2: string
    badges: BadgeInfo[]
}

const pageInfo: MainCardInfo = {
    imgSrc: '/profile-picture.webp',
    imgAlt: 'Profile Picture',
    h1: 'Rocío A. Marchelli',
    h2: 'Psicologa Clinica - N° matricula 48820',
    badges:
        [
            {
                badgeText: 'Psicoterapia Integrativa',
                hrefBadge: '/mi-enfoque'
            },
            {
                badgeText: 'Terapia Psicoanalitica',
                hrefBadge: '/mi-enfoque'
            },
            {
                badgeText: 'Terapia Cognitivo-Conductual',
                hrefBadge: '/mi-enfoque'
            },
            {
                badgeText: 'Terapia de Aceptación y Compromiso',
                hrefBadge: '/mi-enfoque'
            }
        ]
}

const MainCard = () => {

    return (
        <div className="
      relative
      inline-flex
      w-auto
      max-w-[150dvh]
      bg-[var(--third)]
      my-5
      lg:my-20
      mx-auto
      p-5
      sm:p-8
      lg:p-10
      overflow-hidden
      transform
      lg:scale-[1.15]
      origin-center">

            {/* Content container - relative for the main rectangle */}
            <div className="relative p-4 sm:p-6 lg:p-8">
                {/* Main purple rectangle - wraps entire content */}
                <div className="
                absolute
                inset-0
                bg-[var(--primary)]
                opacity-40
                rounded-2xl
              " />

                <div className="
              flex
              flex-col
              lg:flex-row
              gap-6
              lg:gap-8
              items-center
              relative
              z-10
              ">

                    {/* Image section */}
                    <div className="relative w-[200px] sm:w-[240px] lg:w-[280px] aspect-square flex-shrink-0">
                        {/* Back purple rectangle*/}
                        <div className="
                        absolute
                        w-full
                        h-full
                        -top-3
                        -left-3
                        sm:-top-4
                        sm:-left-4
                        lg:-top-5
                        lg:-left-5
                        bg-[var(--primary)]
                        opacity-60
                        rounded-2xl
                        z-10
                      " />
                        {/* Front purple */}
                        <div className="
                        absolute
                        w-full
                        h-full
                        top-2
                        left-2
                        sm:top-3
                        sm:left-3
                        lg:top-4
                        lg:left-4
                        bg-[var(--primary)]
                        opacity-50
                        rounded-2xl
                        z-20
                      " />
                        {/* Profile image */}
                        <div className="relative w-full h-full z-30">
                            <Image
                                src={pageInfo.imgSrc}
                                alt={pageInfo.imgAlt}
                                fill
                                priority
                                className="object-cover drop-shadow-xl filter saturate-90 brightness-90 contrast-90"
                            />
                        </div>
                    </div>

                    {/* Vine decoration - only visible on lg screens */}
                    <div className="hidden lg:flex flex-col items-center justify-center self-stretch">
                        <div className="relative w-20 h-52 mt-[-2rem] mb-[-1rem]">
                            <Image
                                src="/vines-small2.png"
                                alt=""
                                fill
                                className="object-contain opacity-70 invert brightness-0 rotate-180"
                            />
                        </div>
                        <div className="relative w-20 h-52 mb-[-2rem] mt-[-1rem]">
                            <Image
                                src="/vines-small2.png"
                                alt=""
                                fill
                                className="object-contain opacity-70 invert brightness-0 rotate-360 -translate-x-[5%]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center lg:items-start gap-2">

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left text-balance">
                            {pageInfo.h1}
                        </h1>

                        <h2 className="text-base sm:text-lg lg:text-xl text-white italic mb-2 lg:mb-4 text-center lg:text-left text-balance">
                            {pageInfo.h2}
                        </h2>


                        <div className="flex flex-col justify-center items-center lg:items-start gap-2 w-full">
                            {pageInfo.badges.map((b, i) => (
                                <Badge type="primary" key={i}>
                                    <Link
                                        href={b.hrefBadge}
                                        className="w-full h-auto px-1 text-center"
                                    >
                                        {b.badgeText}
                                    </Link>
                                </Badge>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default MainCard
