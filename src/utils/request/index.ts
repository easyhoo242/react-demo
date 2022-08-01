import axios from 'axios'
const BASE_URL = 'https://movie.querydata.org/'

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
})

export { request }
