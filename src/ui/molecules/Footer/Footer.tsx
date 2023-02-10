import { DotsSvg } from "@/ui/atoms/svg"
import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <Box sx={{
            marginTop: 'auto'
        }}>
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
                        left: '0',
                        rotate: '4deg',
                        translate: '-88%'
                    }} rectStyle={{ color: 'var(--primary-color)' }}></DotsSvg>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        },
                        paddingLeft: '1rem',
                        gap: '1rem',
                        position: 'relative',
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
                            <Link to={'/terms#termsSection'}>
                                Terms
                            </Link>

                            <Link to={'/privacy#termsSection'}>
                                Privacy
                            </Link>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}
