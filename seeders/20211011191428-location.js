'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('locations', [
      {
        city: 'Worcester',
        state: 'Massachusetts',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am'
      },
      {
        city: 'Boston',
        state: 'Massachusetts',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am'
      }
      // {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
      //         {
      //   city:
      //   state:
      //   hours:
      // },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {})
  }
}
