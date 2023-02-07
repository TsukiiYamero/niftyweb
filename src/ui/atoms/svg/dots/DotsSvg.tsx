import { useId } from "react"

type Props = {
    SvgClassName?: string,
    width?: string,
    height?: string,
    style?: any
}

export const DotsSvg = ({ SvgClassName = '', width = '404', height = '392', style = {} }) => {
    const id = useId();

    return (
        <>
            <svg className={SvgClassName} width={width} height={height} fill="none" viewBox="0 0 404 392" style={style}>
                <defs>
                    <pattern id={id} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" style={{ color: '#e5e7eb' }} fill="currentColor"></rect>
                    </pattern>
                </defs>
                <rect width="404" height="392" fill={`url(#${id})`}></rect>
            </svg>
        </>)
}