const { Menu } = require('../models')

const GetMenu = async (req, res) => {
  try {
    const menu = await Menu.findAll()
    res.send(menu)
  } catch (error) {
    throw error
  }
}

const GetAppetizers = async (req, res) => {
  try {
    const appetizers = await Menu.findAll({ where: { course: 'Appetizer' } })
    res.send(appetizers)
  } catch (error) {
    throw error
  }
}

const GetEntrees = async (req, res) => {
  try {
    const entrees = await Menu.findAll({ where: { course: 'Entree' } })
    res.send(entrees)
  } catch (error) {
    throw error
  }
}

const GetDesserts = async (req, res) => {
  try {
    const desserts = await Menu.findAll({ where: { course: 'Dessert' } })
    res.send(desserts)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetMenu,
  GetAppetizers,
  GetEntrees,
  GetDesserts
}
