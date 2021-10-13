import Client from './api'

export const GetMenu = async () => {
  const res = await Client.get('/menu')
  return res.data
}
export const GetAppetizers = async () => {
  const res = await Client.get('/menu/appetizers')
  return res.data
}
export const GetEntrees = async () => {
  const res = await Client.get('/menu/entrees')
  return res.data
}
export const GetDesserts = async () => {
  const res = await Client.get('/menu/desserts')
  return res.data
}
export const GetDrinks = async () => {
  const res = await Client.get('/menu/drinks')
  return res.data
}
