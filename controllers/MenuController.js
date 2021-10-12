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
  } catch {
    throw error
  }
}
