import { RefObject, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTo = (divRef: RefObject<HTMLDivElement>) => {
    const location = useLocation();

    useEffect(() => {

        if (location.hash && divRef.current) {
            window.scrollTo({
                behavior: 'smooth',
                top: divRef.current.offsetTop
            })
        }

    }, [location])

}