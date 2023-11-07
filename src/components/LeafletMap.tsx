import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import LeafletMarker from './MyLeafletMarker';
import {CoordinatesData} from '../types/types';
import {useEffect, useRef, useState} from 'react';
import polyline from '@mapbox/polyline'
import {getPolylines} from '../api/OSRM';
import MyLeafletPolyline from './MyLeafletPolyline';
import SetBounds from './SetBounds';
import {LatLngBoundsLiteral} from "leaflet";

type Props = {
    coordinates: CoordinatesData[]
}

const LeafletMap = (props: Props) => {
    const [polylines, setPolylines] = useState<Array<[number, number]>>([])
    const [bounds, setBounds] = useState<LatLngBoundsLiteral>([
        [59.83567701, 31.38064206],
        [59.82761295, 32.41705607]
    ]);
    const isInitialRender = useRef(true)

    useEffect(() => {
        const currentCoord = props.coordinates.find(item => item.opacity === 1)

        const newBounds = [
            [currentCoord?.point1.lat, currentCoord?.point1.lng],
            [currentCoord?.point2.lat, currentCoord?.point2.lng],
            [currentCoord?.point3.lat, currentCoord?.point3.lng],
        ];
        if (currentCoord !== undefined) setBounds(newBounds);
    }, [props.coordinates])

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false
            return
        }

        const polylinesForCurrentMarkers = props.coordinates.find(item => item.opacity == 1)
        setPolylines([])

        getPolylines(polylinesForCurrentMarkers).then(data => {
            const decodedData = polyline.decode(data.routes[0].geometry)
            decodedData.map((item) => {
                setPolylines(p => [...p, item])
            })
        })
    }, [props.coordinates[0].opacity, props.coordinates[1].opacity, props.coordinates[2].opacity])

    return (
        <>
            <MapContainer zoom={10}
                          scrollWheelZoom={true}
                          style={{height: 'auto', width: '100%', flexBasis: '50%'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LeafletMarker coordinates={props.coordinates}/>
                <MyLeafletPolyline polylines={polylines}/>
                {(bounds.length > 0) && <SetBounds bounds={bounds}/>}
            </MapContainer>
        </>
    )
}

export default LeafletMap