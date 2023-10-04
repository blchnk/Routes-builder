import { LatLngBoundsLiteral } from "leaflet";
import { useMemo } from "react";
import { Rectangle, useMap } from "react-leaflet";

const SetBounds = () => {
    const bounds: LatLngBoundsLiteral = [
        [59.84660399, 30.29496392],
        [59.82934196, 30.42423701]
    ]
    const map = useMap()

    useMemo(() => {
        map.fitBounds(bounds)
    }, [map])

    return <>
        <Rectangle
            bounds={bounds}
            pathOptions={{ color: 'transparent' }}
        />
    </>
};

export default SetBounds;
