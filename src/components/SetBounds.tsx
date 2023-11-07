import { LatLngBoundsLiteral } from "leaflet";
import {useMemo} from "react";
import { Rectangle, useMap } from "react-leaflet";

type Props = {
    bounds: LatLngBoundsLiteral
}
const SetBounds = (props: Props) => {
    const map = useMap()

    useMemo(() => {
        map.fitBounds(props.bounds)
    }, [map, props.bounds])

    return <>
        <Rectangle
            bounds={props.bounds}
            pathOptions={{ color: 'transparent' }}
        />
    </>
};

export default SetBounds;
