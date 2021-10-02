import { message } from 'antd'
import { BASE_API } from './config'

export const GET = async (url, params) => {
  const newUrl = new URL(`${BASE_API}/${url}`)

  if (params)
    Object.keys(params).forEach(key =>
      newUrl.searchParams.append(key, params[key])
    )
  return fetch(newUrl.toString(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  })
    .then(async res => {
      if (res.status === 401) return res
      else if (res.status === 404)
        message.error('Conexion con el servidor fallida')
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}

export const POST = async (url, body, header) => {
  return fetch(`${BASE_API}/${url}`, {
    method: 'POST',
    headers: header
      ? header
      : {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': 'https://javascript.info',
        },
    body: JSON.stringify(body),
  })
    .then(async res => {
      if (res.status === 401) return res
      else if (res.status === 404)
        message.error('Conexion con el servidor fallida')
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}

export const PUT = async (url, body, header) => {
  return fetch(`${BASE_API}/${url}`, {
    method: 'PUT',
    headers: header
      ? header
      : {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
    body: JSON.stringify(body),
  })
    .then(async res => {
      if (res.status === 401) return res
      else if (res.status === 404)
        message.error('Conexion con el servidor fallida')
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}

export const DELETE = async (url, body, header) => {
  return fetch(`${BASE_API}/${url}`, {
    method: 'DELETE',
    headers: header
      ? header
      : {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
    body: body ? JSON.stringify(body) : '',
  })
    .then(async res => {
      if (res.status === 401) return res
      else if (res.status === 404)
        message.error('Conexion con el servidor fallida')
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}
