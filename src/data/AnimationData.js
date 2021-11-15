export const AnimationData = {
    navBar: {
        logo: {
            hidden: {
                color: 'black',
                x: '4vw',
                y: 20,
                scale: 1.6,
                opacity: 1,
            },
            visable: {
                transition: {
                    delay: 1.5,
                    duration: 1,
                    type: 'tween',
                }
            },
            logoHover: {
                opacity: [1, 0.7, 1],
                scale: [1.6, 1.63, 1.6],
                transition: {
                    duration: 1.3,
                    repeat: Infinity,
                }
            }
        },
        logoPath: {
            hidden: {
                pathLength: 0
            },
            visable: {
                opacity: 1,
                pathLength: 1,
                transition: {
                    delay: .3,
                    duration: 1.3,
                    ease: 'easeIn'
                }
            },
            visableDelayed: {
                opacity: 1,
                pathLength: 1,
                transition: {
                    delay: 1.3,
                    duration: .5,
                    ease: 'easeIn'
                }
            }
        },
        menuIcon: {
            hidden: {
                x: '50vh',
                opacity: 0,
            },
            visable: {
                scale: 1,
                x: 0,
                opacity: 1,
                transition: {
                    delay: 1.5,
                    type: 'spring',
                    stiffness: 50,
                    mass: .6,
                    damping: 5
                }
            },
            menuHover: {
                opacity: [0.8, 0.9, 1, 0.9, 0.8],
                originZ: 0,
                rotateZ: [0, -5, -10, -5, 5, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                transition: {
                    repeat: Infinity,
                    duration: 1.2,
                }
            }
        },
        top: {
            closed: {
                originX: 0.5,
                originZ: 0
            },
            opened: {
                rotateZ: -45,

            }
        },
        center: {
            closed: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 90
                }
            },
            opened: {
                opacity: 0,
                y: '-100vh',
                transition: {
                    duration: 3.4,
                    ease: 'easeInOut'
                }
            }
        },
        bottom: {
            closed: {
                originX: 0.5,
                originZ: 0,
                y: 0
            },
            opened: {
                y: 12,
                rotateZ: 45,

            }
        }
    }

}