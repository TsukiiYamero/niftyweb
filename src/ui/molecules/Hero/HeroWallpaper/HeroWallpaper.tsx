import { DotsSvg } from "@/ui/atoms/svg"
import { Box } from "@mui/material"
import HeroImg from '@/assets/svg/mesa-de-trabajo-1.svg';

export const HeroWallpaper = ({ mobile = true }) => {

    const mobileVars = {
        display: {
            md: 'none'
        },
        svgSize: {
            width: '62%',
            height: '280px'
        }
    }

    const desktopVars = {
        display: {
            xs: 'none',
            md: 'block'
        }
    }

    return (
        <>
            <Box sx={{
                position: 'relative',
                display: {
                    ...(mobile ? mobileVars.display : desktopVars.display)
                }
            }}>
                <Box sx={{
                    display: {
                        xs: 'none',
                        sm: 'block'
                    }
                }}>
                    <DotsSvg style={{
                        position: 'absolute',
                        zIndex: '1',
                        ...(mobile ? mobileVars.svgSize : {})
                    }}></DotsSvg>

                    <Box sx={{
                        backgroundColor: '#f9fafb',
                        borderTopLeftRadius: '1.5rem',
                        borderBottomLeftRadius: '1.5rem',
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        bottom: '0',
                        width: '100vw'
                    }}></Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: '2',
                }}>
                    <Box sx={{
                        width: '100%',
                        maxWidth: {
                            xs: '246px',
                            sm: '386px',
                            lg: '560px'
                        },
                        'img': {
                            maxWidth: '100%'
                        }
                    }}>
                        <img src={HeroImg} alt="NiftyTab Hero image" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}