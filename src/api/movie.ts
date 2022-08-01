import { movieDetail } from './datadata'
import { request } from '~/utils'

export const requestMovieDetail = (id: number = 1302425) => {
  return request.get('api', {
    params: {
      id,
    },
  })
}

export const requestMovieDetailData = () =>
  new Promise((resolve) => resolve(movieDetail))
