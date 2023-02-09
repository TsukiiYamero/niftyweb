import { Hero } from "@/ui/molecules/Hero"
import { FirstSection } from "@/ui/molecules/Sections"
import { Box } from "@mui/material"

export const MainTemplate = () => {
    return (
        <Box sx={{
            padding: '2rem 0',
            overflowX: 'hidden'
        }}>
            <Hero />
            <FirstSection />
        </Box>
    )
}

