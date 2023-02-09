import { DotsSvg } from "@/ui/atoms/svg"
import { Box, Link, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Box sx={{
            overflow: 'hidden',
            backgroundColor: '#ba68c8cc',
            paddingBlock: {
                xs: '2rem',
                md: '3rem'
            },
            marginTop: '5rem'
        }}>
            <Box sx={{
                position: 'relative',
                marginInline: 'auto',
                paddingInline: {
                    xs: '1rem',
                    sm: '1.5rem'
                },
                maxWidth: {
                    xs: '28rem',
                    sm: '48rem',
                    md: '80rem'
                },
            }}>

                <DotsSvg style={{
                    position: 'absolute',
                    right: '100%',
                    top: '0',
                    rotate: '4deg',
                    translate: '-93%'
                }} rectStyle={{ color: 'var(--primary-color)' }}></DotsSvg>

                <Box sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    gap: '1rem',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant='subtitle2' sx={{ fontSize: '1rem', color: 'var(--white)' }}>
                        © 2023 NiftyTab, All rights reserved.
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        gap: '1.25rem',
                        'a': {
                            fontSize: '1rem', color: 'var(--white)'
                        }
                    }}>
                        <Link href="#">
                            Terms
                        </Link>

                        <Link href="#">
                            Privacy
                        </Link>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}
