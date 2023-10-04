import { LatLngBoundsLiteral } from 'leaflet';
import { MapContainer, Rectangle, TileLayer } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css';
import LeafletMarker from './MyLeafletMarker';
import { CoordinatesData } from '../types/types';
import { useRef, useState } from 'react';
import { useEffect } from 'react'
import polyline from '@mapbox/polyline'
import { getPolylines } from '../api/OSRM';
import MyLeafletPolyline from './MyLeafletPolyline';
import SetBounds from './SetBounds';

type Props = {
    coordinates: CoordinatesData[]
}

const LeafletMap = (props: Props) => {
    const [polylines, setPolylines] = useState([])
    const isInitialRender = useRef(true)

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
            <MapContainer zoom={10} scrollWheelZoom={true}
                style={{ height: 'auto', width: '100%', flexBasis: '50%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LeafletMarker coordinates={props.coordinates} />
                <MyLeafletPolyline polylines={polylines} />
                <SetBounds />
            </MapContainer >
        </>
    )
}

export default LeafletMap