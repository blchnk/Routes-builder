import { Table } from 'antd'
import type { RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import s from './app.module.scss'
import LeafletMap from '../LeafletMap'
import { increment } from '../../store/slices/coordinatesSlice'

function App() {
  const tableData = useSelector((state: RootState) => state.coordinates)
  const dispatch = useDispatch()

  return (
    <>
      <div className="container">
        <div className={s.mainContentWrapper}>
          <Table dataSource={tableData.data} columns={tableData.columns} size='small' bordered 
            style={{ flexBasis: '50%', cursor: 'pointer', height: 'fit-content' }}
            onRow={() => {
              return {
                onClick: (e) => {
                  const currentRow = e.currentTarget.getAttribute('data-row-key')
                  dispatch(increment(currentRow))
                }
              }
            }}
          />
          <LeafletMap coordinates={tableData.data} />
        </div>
      </div>
    </>
  )
}

export default App
