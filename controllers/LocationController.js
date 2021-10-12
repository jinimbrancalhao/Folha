const { Location } = require('../models')

const GetLocations = async (req, res) => {
  try {
    const locations = await Location.findAll()
    res.send(locations)
  } catch (error) {
    throw error
  }
}
