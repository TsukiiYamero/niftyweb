
import { Logo } from '@/ui/atoms/Logo';
import { Box, Typography } from '@mui/material';

export const Imagotipo = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            'img': {
                width: '32px',
            }
        }}>
            <Logo />
            <Typography sx={{
                fontSize: '20px',
                color: 'var(--text-color-dark)',
                fontWeight: 'bold',
                fontFamily: '-apple-system, system-ui, Roboto'
            }}>
                NiftyTab
            </Typography>
        </Box>
    )
}