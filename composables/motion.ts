export const navVariants = {
    initial: {
        opacity: 0,
        y: -50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    inView: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 1,
        },
    },
};

export const textVariant = {
    initial: {
        y: 50,
        opacity: 0,
    },
    inView: (delay: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay,
        },
    })
}

export const textVariant2 = {
    initial: {
        opacity: 0,
        y: 20,
    },
    inView: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeIn',
        },
    },
};

export const slideIn = {
    initial: (direction: 'left' | 'right' | 'up' | 'down') => ({
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    }),
    inView: (type: string, delay: number, duration: number) => ({
        x: 0,
        y: 0,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    }),
}

export const textContainer = {
    initial: {
        opacity: 0,
    },
    inView: (i = 1) => ({
        opacity: 1,
        transition: { delay: i * 0.1 },
    }),
};

export const fadeIn = {
    initial: (direction: 'left' | 'right' | 'up' | 'down') => ({
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    }),
    inView: (type: string, delay: number, duration: number) => ({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    }),
}


export const planetVariants = {
    initial: (direction: string) => ({
        x: direction === 'left' ? '-100%' : '100%',
        rotate: 120,
    }),
    inView: {
        x: 0,
        rotate: 0,
        transition: {
            type: 'spring',
            duration: 1.8,
            delay: 0.5,
        },
    },
}

export const zoomIn = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    inView: (delay: number, duration: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    }),
}

export const footerVariants = {
    initial: {
        opacity: 0,
        y: 50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    inView: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5,
        },
    },
};