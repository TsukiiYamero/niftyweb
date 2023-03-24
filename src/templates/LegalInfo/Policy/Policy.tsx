import { Footer } from "@/ui/molecules/Footer"
import { LayoutLegalInfo, policyInfoEN } from "@/ui/molecules/LayoutLegalInfo"
import { Box } from "@mui/material"

export const PolicyTemplate = () => {
    const { title, legalInfo } = policyInfoEN

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