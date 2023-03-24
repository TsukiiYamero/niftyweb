import { Footer } from '@/ui/molecules/Footer';
import { LayoutLegalInfo, termsInfoEN } from '@/ui/molecules/LayoutLegalInfo';
import { Box } from '@mui/material';

export const TermsTemplate = () => {

    const { title, legalInfo } = termsInfoEN;

    return (
        <Box sx={{
            display: 'grid',
            height: '100vh',
            paddingTop: '2rem',
        }}>
            <LayoutLegalInfo title={title} legalInfo={legalInfo} />
            <Footer />
        </Box>
    )
}
