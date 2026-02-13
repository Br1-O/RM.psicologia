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

export const pageInfo: MainCardInfo = {
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