import { Footer } from "@/ui/molecules/Footer"
import { Hero } from "@/ui/molecules/Hero"
import { FirstSection, SecondSection } from "@/ui/molecules/Sections"
import { Box } from "@mui/material"

export const MainTemplate = () => {
    return (
        <Box sx={{
            paddingTop: '2rem',
            overflowX: 'hidden'
        }}>
            <Hero />
            <FirstSection />
            <SecondSection />
            <Footer />
        </Box>
    )
}

