import { Marker } from "react-leaflet";
import { CoordinatesData } from "../types/types";

type Props = {
    coordinates: CoordinatesData[];
};

const MyLeafletMarker = (props: Props) => {
    return props.coordinates.map((item, index) => (
        <div key={index}>
            <Marker
                position={{ lat: item.point1.lat, lng: item.point1.lng }}
                opacity={item.opacity}
            >
            </Marker>
            <Marker
                position={{ lat: item.point2.lat, lng: item.point2.lng }}
                opacity={item.opacity}
            >
            </Marker>
            <Marker
                position={{ lat: item.point3.lat, lng: item.point3.lng }}
                opacity={item.opacity}
            >
            </Marker>
        </div>
    ));
};

export default MyLeafletMarker;
