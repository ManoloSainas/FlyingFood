const BASE_URL = import.meta.env.VITE_BASE_URL
const TOKEN = import.meta.env.VITE_TOKEN

export const apiClient = {
  get: (resource: string) => {
    return fetch(`${BASE_URL}/${resource}`, {
      headers: {
        'x-api-key': TOKEN
      }
    })
      .then((res) => res.json())
      .then((json) => json)
  },

  post: (resource: string, data: any) => {
    return fetch(`${BASE_URL}/${resource}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': TOKEN
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => json)
  },

  put: (resource: string, data: any) => {
    return fetch(`${BASE_URL}/${resource}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': TOKEN
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => json)
  },

  delete: (resource: string, data: any) => {
    return fetch(`${BASE_URL}/${resource}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': TOKEN
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => json)
  },

  patch: (resource: string, data: any) => {
    return fetch(`${BASE_URL}/${resource}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': TOKEN
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => json)
  }
}
