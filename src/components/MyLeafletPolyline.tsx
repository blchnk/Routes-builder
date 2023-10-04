import { Polyline, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

type Props = {
    polylines: LatLngExpression[]
}

const MyLeafletPolyline = (props: Props) => {
    return <>
        <Polyline
            color={'red'}
            opacity={0.7}
            weight={4}
            positions={props.polylines}
        >
            <Popup>Polygon</Popup>
        </Polyline>
    </>
};

export default MyLeafletPolyline;
