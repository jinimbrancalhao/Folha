'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('locations', [
      {
        address: '50 Water St',
        city: 'Worcester',
        state: 'Massachusetts',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '23 Anderson Ave',
        city: 'Boston',
        state: 'Massachusetts',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '122 Smith Dr',
        city: 'Austin',
        state: 'Texas',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '12 Urna St',
        city: 'Moscow',
        state: 'Kentucky',
        hours: 'Mon-Thur: 12pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '5 Plum St',
        city: 'Los Angeles',
        state: 'California',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 2pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '9 Reardon Ave',
        city: 'Houston',
        state: 'Texas',
        hours: 'Mon-Thur: 12pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '13 Open Rd',
        city: 'San Antonio',
        state: 'Texas',
        hours: 'Mon-Thur: 12pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '33 Shrewsbury St',
        city: 'Jacksonville',
        state: 'Florida',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 2pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '84 Rockwell Dr',
        city: 'Columbus',
        state: 'Ohio',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '34 West St',
        city: 'Indianapolis',
        state: 'Indiana',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '5 Ridgewood Ave',
        city: 'Portland',
        state: 'Oregon',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '74 Turnpike Rd',
        city: 'Fresno',
        state: 'California',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '22 Street Ave',
        city: 'Atlanta',
        state: 'Georgia',
        hours: 'Mon-Thur: 12pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '146 Essex St',
        city: 'New York',
        state: 'New York',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '45 Lindon Ave',
        city: 'Irvine',
        state: 'California',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 1pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '23 Chadbourne St',
        city: 'Des Moines',
        state: 'Iowa',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '12 Crestview Rd',
        city: 'Salt Lake City',
        state: 'Utah',
        hours: 'Mon-Thur: 12pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '83 Amherst Rd',
        city: 'Fort Lauderdale',
        state: 'Florida',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 2pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '92 Greendale Ave',
        city: 'Miramar',
        state: 'Florida',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 12pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '92 Solomon Ave',
        city: 'Seattle',
        state: 'Washington',
        hours: 'Mon-Thur: 1pm-12am. Fri-Sun: 2pm-1am',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {})
  }
}
