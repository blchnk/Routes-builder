import axios from "axios";

const profile = 'driving'

export const getPolylines = async (coord) => {
    console.log(coord)
    console.log('request is done')
    const url = `http://router.project-osrm.org/route/v1/${profile}/${coord.point1.lng},${coord.point1.lat};${coord.point2.lng},${coord.point2.lat};${coord.point3.lng},${coord.point3.lat}`
    const {data} = await axios.get(url)
    return data
}