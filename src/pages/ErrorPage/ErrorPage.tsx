import { Box, Link } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error: any = useRouteError();
    const navigateTo = useNavigate();
    console.error(error);

    const onClickRedirect = () => {
        navigateTo('/');
    };

    return (
        <Box

            sx={{
                padding: '29px',

            }}
        >
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <i>Page {error?.statusText || error?.message}</i>
            <Box
                sx={{
                    typography: 'body1',
                    '& > :not(style) + :not(style)': {
                        ml: 2,
                    },
                    paddingBottom: '20px'
                }}
                onClick={onClickRedirect}
            >
                <Link>Return Home</Link>
            </Box>

            <i>Design in construction</i>
        </Box>
    );
};
