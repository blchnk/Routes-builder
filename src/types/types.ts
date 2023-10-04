
export type CoordinatesData = {
    key: string
    point1: {lat: number, lng: number}
    point2: {lat: number, lng: number}
    point3: {lat: number, lng: number}
    opacity: number
}

export type CoordinatesColumn = {
    title: string
    dataIndex: string
    key: string
    render?: (text: string, record: CoordinatesData) => React.ReactNode
}

export type CoordinatesState = {
    data: CoordinatesData[]
    columns: CoordinatesColumn[]
}
