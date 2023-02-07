import { Imagotipo } from '@/ui/atoms/Imagotipo';
import HeroImg from '@/assets/svg/mesa-de-trabajo-1.svg';
import { Box, Button, Typography } from '@mui/material';

export const Hero = () => {

    return (
        <Box
            sx={{
                paddingInline: '1rem'
            }}>
            <Imagotipo />

            <Box sx={{ marginTop: '2.6rem' }}>
                <Box sx={{
                    'h1, span': { fontWeight: '900', fontFamily: '-apple-system, system-ui, Roboto' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem'
                }}>
                    <Typography variant='h1' sx={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                        Increase productivity with NiftyTab
                        <span className='primary-color'>.</span>
                    </Typography>

                    <Box sx={{
                        maxWidth: '236px',
                    }}>
                        <img src={HeroImg} alt="NiftyTab Hero image" />
                    </Box>

                    <Typography variant='subtitle2' className='text-neutral-color' sx={{ fontSize: '1.2rem' }}>
                        Boost your workflow productivity with the NiftyTab Extension.
                    </Typography>

                    <Button variant='contained'>Start Now</Button>
                </Box>
            </Box>
        </Box>
    )
}
