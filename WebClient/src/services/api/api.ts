import { ApiResult, ApiResultError } from './api-types/api-result'

const apiHostUrl = process.env.REACT_APP_BACKEND_API_URL
const defaultParams: RequestInit = {
  // credentials: 'include',
  headers: new Headers({
    accept: 'application/json',
    'content-type': 'application/json',
  }),
}

const objectToQueryString = (obj: any) => {
  const params = Object.keys(obj)
    .map((key) => key + '=' + obj[key])
    .join('&')

  return params ? '?' + params : ''
}

const get = async <T>(url: string, queryParams: any = {}): Promise<ApiResult<T>> => {
  try {
    const paramsString = objectToQueryString(queryParams)
    const params = {
      ...defaultParams,
      method: 'GET',
    }

    const response = await fetch(`${apiHostUrl}/${url}?${paramsString}`, params)

    const operationResult = (await response.json()) as ApiResult<T>
    return operationResult
  } catch (error) {
    return new ApiResultError<T>('FETCH')
  }
}

const post = async <T>(url: string, body: any): Promise<ApiResult<T>> => {
  try {
    const params = {
      ...defaultParams,
      method: 'POST',
      body: JSON.stringify(body),
    }

    const response: Response = await fetch(`${apiHostUrl}/${url}`, params)

    const operationResult = (await response.json()) as ApiResult<T>
    return operationResult
  } catch (error) {
    return new ApiResultError<T>('FETCH')
  }
}

export { get, post }
