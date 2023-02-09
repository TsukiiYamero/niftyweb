
import { Logo } from '@/ui/atoms/Logo';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Imagotipo = () => {

    const navigateTo = useNavigate();

    const navigateToHome = () => {
        navigateTo('/')
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            'img': {
                width: '32px',
            },
            cursor: 'pointer'
        }}
            onClick={navigateToHome}
        >
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