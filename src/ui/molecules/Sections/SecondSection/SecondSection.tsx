import { Box, Typography } from "@mui/material"
import SecondSectionImg from '@/assets/svg/spreasheets_mesa-de-trabajo-3.svg';

export const SecondSection = () => {
    return (
        <Box component={'section'} sx={{
            display: 'grid',
            maxWidth: {
                md: '80rem'
            },
            gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, minmax(0, 1fr))'
            },
            gap: '1.5rem',
            paddingTop: '7rem',
            paddingInline: {
                xs: '0',
                sm: '1.5rem'
            },
            marginInline: 'auto'
        }}>
            <Box sx={{
                maxWidth: {
                    xs: '28rem',
                    sm: '36rem',
                    md: 'none'
                },
                gridColumnStart: {
                    xs: '1',
                    md: '1'
                },
                paddingInline: {
                    xs: '1rem',
                    sm: '1.5rem'
                },
                paddingBlock: {
                    xs: '0',
                    md: '8rem'
                },
                margin: '0 auto',
                'h1, h6': { fontFamily: '-apple-system, system-ui, Roboto' }
            }}>
                <Typography variant='h1' sx={{ fontSize: '2.25rem', fontWeight: '900' }}>
                    Improve browser performance
                    <span className='primary-color'>.</span>
                </Typography>

                <Typography variant='subtitle2' className='text-neutral-color-2'
                    sx={{ fontSize: '1.125rem', fontWeight: '100', marginTop: '1rem' }}>
                    Free up RAM and CPU usage on your computer and improve browser performance.
                </Typography>
            </Box>

            <Box sx={{
                width: '100%',
                position: 'relative',
                maxWidth: {
                    xs: '100%',
                    md: '36rem'
                },
                gridColumnStart: {
                    xs: '1',
                    md: '2'
                },
                gridRowStart: {
                    md: '1'
                },
                paddingRight: {
                    xs: '1.5rem',
                    md: '0'
                },
                marginTop: {
                    xs: '1rem',
                    md: '0'
                },

            }}>
                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    'img': {
                        maxWidth: {
                            xs: '100%',
                            md: '36rem',
                            lg: '42rem'
                        },
                        position: {
                            xs: 'relative',
                            md: 'absolute'
                        }
                    },
                }}
                >
                    <img src={SecondSectionImg} alt="estadisticas sobre mejora de rendimiento" />
                </Box>
            </Box>
        </Box >
    )
}
