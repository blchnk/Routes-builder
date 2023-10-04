import { createSlice } from '@reduxjs/toolkit'
import { CoordinatesData, CoordinatesState } from '../../types/types'

const initialState: CoordinatesState = {
  data: [
    {
      key: '1',
      point1: { lat: 59.84660399, lng: 30.29496392 },
      point2: { lat: 59.82934196, lng: 30.42423701 },
      point3: { lat: 59.83567701, lng: 31.38064206 },
      opacity: 0,
    },
    {
      key: '2',
      point1: { lat: 59.82934196, lng: 30.42423701 },
      point2: { lat: 59.82761295, lng: 30.41705607 },
      point3: { lat: 59.84660399, lng: 31.29496392 },
      opacity: 0,
    },
    {
      key: '3',
      point1: { lat: 59.83567701, lng: 30.38064206 },
      point2: { lat: 59.84660399, lng: 30.29496392 },
      point3: { lat: 59.82761295, lng: 32.41705607 },
      opacity: 0,
    },
  ],
  columns: [
    {
      title: 'Маршрут',
      dataIndex: 'routeNumber',
      key: 'routeNumber',
      render: (_text: string, record: CoordinatesData) => `Маршрут №${record.key}`,
    },
    {
      title: 'Точка 1',
      dataIndex: 'point1',
      key: 'point1',
      render: (_text: string, record: CoordinatesData) => (
        `${record.point1.lat}, ${record.point1.lng}`
      ),
    },
    {
      title: 'Точка 2',
      dataIndex: 'point2',
      key: 'point2',
      render: (_text: string, record: CoordinatesData) => (
        `${record.point2.lat}, ${record.point2.lng}`
      ),
    },
    {
      title: 'Точка 3',
      dataIndex: 'point3',
      key: 'point3',
      render: (_text: string, record: CoordinatesData) => (
        `${record.point3.lat}, ${record.point3.lng}`
      ),
    },
  ],
}

export const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.data.map((item) => Number(item.key) == action.payload ? item.opacity = 1 : item.opacity = 0)
    },
    decrement: (state, action) => {
      state.data[action.payload].opacity = 0
    }
  },
})

export const { increment, decrement } = coordinatesSlice.actions
export default coordinatesSlice.reducer