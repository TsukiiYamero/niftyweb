import { Imagotipo } from '@/ui/atoms/Imagotipo';
import { Box, Button, Typography } from '@mui/material';
import { HeroWallpaper } from './HeroWallpaper';

export const Hero = () => {

    return (
        <Box
            sx={{
                paddingInline: {
                    xs: '1rem',
                    sm: '1.5rem'
                },
                margin: '0 auto',
                maxWidth: {
                    xs: '28rem',
                    sm: '48rem',
                    md: '80rem'
                },
            }}>

            <Box sx={{
                marginTop: {
                    xs: '2.6rem',
                    sm: '3.8rem'
                },
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    md: '1fr 1fr'
                }
            }}>
                <Box sx={{
                    'h1, span': { fontWeight: '900', fontFamily: '-apple-system, system-ui, Roboto' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: {
                        xs: '1.25rem',
                        sm: '1.75rem'
                    }
                }}>
                    <Imagotipo />

                    <Typography variant='h1' sx={{ fontSize: 'clamp(2.25rem, 9vw, 4.5rem)', lineHeight: 1 }}>
                        Increase productivity with NiftyTab
                        <span className='primary-color'>.</span>
                    </Typography>

                    <HeroWallpaper />

                    <Typography variant='subtitle2' className='text-neutral-color-2' sx={{ fontSize: '1.2rem' }}>
                        Boost your workflow productivity with the NiftyTab Extension.
                    </Typography>

                    <Button variant='contained' sx={{ maxWidth: '300px' }}>Start Now</Button>
                </Box>

                <HeroWallpaper mobile={false} />
            </Box>
        </Box>
    )
}
