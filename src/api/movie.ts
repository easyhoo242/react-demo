import axios from 'axios'
const BASE_URL = 'https://movie.querydata.org/'

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
})

export const requestMovieDetail = (id: number = 1302425) => {
  return request.get('api', {
    params: {
      id,
    },
  })
}
