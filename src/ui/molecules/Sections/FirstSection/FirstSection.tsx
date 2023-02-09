
import { Box, Typography } from '@mui/material';
import SectionImg from '@/assets/svg/tab_mesa-de-trabajo-2.svg';

export const FirstSection = () => {
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
                    md: '2'
                },
                paddingInline: {
                    xs: '1rem',
                    sm: '1.5rem'
                },
                paddingBlock: {
                    xs: '0',
                    sm: '8rem'
                },
                margin: '0 auto',
                'h1, h6': { fontFamily: '-apple-system, system-ui, Roboto' }
            }}>
                <Typography variant='h1' sx={{ fontSize: '2.25rem', fontWeight: '900' }}>
                    Streamline your tabs
                    <span className='primary-color'>.</span>
                </Typography>

                <Typography variant='subtitle2' className='text-neutral-color-2'
                    sx={{ fontSize: '1.125rem', fontWeight: '100', marginTop: '1rem' }}>
                    Easily manage and save your tabs, organize them into groups or sessions, and open them in other browsers.
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
                    md: '1'
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
                    <img src={SectionImg} alt="Mesa de trabajo" />
                </Box>
            </Box>
        </Box >
    )
}