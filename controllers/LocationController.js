const { Location } = require('../models')
const { Op } = require('sequelize')

const GetLocations = async (req, res) => {
  try {
    const locations = await Location.findAll()
    res.send(locations)
  } catch (error) {
    throw error
  }
}

const GetLocationByState = async (req, res) => {
  try {
    const locations = await Location.findAll({
      where: { state: { [Op.like]: `%${req.params.state}%` } }
    })
    res.send(locations)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetLocations,
  GetLocationByState
}
