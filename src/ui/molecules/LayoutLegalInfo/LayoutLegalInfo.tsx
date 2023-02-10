import { useScrollTo } from "@/customHooks/useScrollTo";
import { Imagotipo } from "@/ui/atoms/Imagotipo"
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material"
import { useEffect, useRef } from "react"

type Props = {
    title: string,
    legalInfo: {
        key: string,
        text: string
    }[]
}

export const LayoutLegalInfo = ({ title = '', legalInfo = [] }: Props) => {
    const divStartRef = useRef<HTMLDivElement>(null);
    useScrollTo(divStartRef);

    return (
        <Box>
            <div ref={divStartRef} id="termsSection"></div>
            <Box sx={{
                paddingInline: {
                    xs: '1rem',
                    sm: '1.5rem'
                },
                paddingTop: '1.5rem',
                margin: '0 auto',
                maxWidth: {
                    xs: '28rem',
                    sm: '48rem',
                    md: '80rem'
                }
            }}>

                <Imagotipo />

                <Box sx={{ borderWidth: '1px', borderColor: 'var(--border-color-third)', borderStyle: 'solid', marginBlock: '1rem' }}></Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '1fr 1fr'
                    },
                    paddingTop: '1.5rem',
                }}>
                    <Typography variant="h4" sx={{
                        fontWeight: '900', fontFamily: '-apple-system, system-ui, Roboto'
                    }}>
                        {title}
                        <span className='primary-color'>.</span>
                    </Typography>

                    <List>
                        {
                            legalInfo.map(({ key, text }) =>
                                <ListItem key={key}>
                                    <ListItemText primary={`${text}`} />
                                </ListItem>
                            )
                        }
                    </List>
                </Box>
            </Box>

        </Box>
    )
}
