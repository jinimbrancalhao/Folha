import Client from './api'

export const GetLocations = async () => {
  const res = await Client.get('/location')
  return res.data
}
