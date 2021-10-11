'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'menus',
      [
        {
          name: 'Lobster Bisque',
          description: 'Lobster meat cognac',
          price: 13,
          course: 'Appetizer'
        },
        {
          name: 'Caesar Salad',
          description:
            'House made caesar dressing, grated Pecorino, and anchovies',
          price: 9,
          course: 'Appetizer'
        },
        {
          name: 'Mushroom Risotto',
          description: 'Pan seared mushroom and spinach',
          price: 17,
          course: 'Appetizer'
        },
        {
          name: 'Cream of Tomato Fennel',
          description: 'With aged cheddar croutons',
          price: 8,
          course: 'Appetizer'
        },
        {
          name: 'Oyster Tempura',
          description: 'Served with choice of sweet chili or cucumber aeoli',
          price: 12,
          course: 'Appetizer'
        },
        {
          name: 'Salmon Tartar',
          description: 'Sweet pepper relish, mango, plantain',
          price: 17,
          course: 'Appetizer'
        },
        {
          name: 'Pork Belly',
          description: 'Smoked garlic, chimichurri, and pickled cabbage',
          price: 15,
          course: 'Appetizer'
        },
        {
          name: 'Shrimp Cocktail',
          description:
            '7 jumbo cooked shrimp served with cocktail sauce and orange chili sauce',
          price: 11,
          course: 'Appetizer'
        },
        {
          name: 'Beef Tenderloin',
          description:
            'Roasted and topped with spicy chili infusion, served medium-rare',
          price: 26,
          course: 'Entree'
        },
        {
          name: 'Grilled Pork Chop',
          description:
            'Topped with butter-toasted Panko, served over a smoked pork belly',
          price: '29',
          course: 'Entree'
        },
        {
          name: 'Pan-Seared Scallops',
          description:
            'Presented with wild mushroom barley and pickled tri-color carrots',
          price: 28,
          course: 'Entree'
        },
        {
          name: 'Hand-Rolled Potato Gnocchi',
          description:
            'Topped with house made marinara, roasted garlic, asparags, and cherry tomatoes',
          price: 23,
          course: 'Entree'
        },
        {
          name: 'Prime Rib',
          description: 'Aged 8 oz prime rib, slow roasted in rock salt',
          price: 27,
          course: 'Entree'
        },
        {
          name: 'Lobster Ravioli',
          description: 'Poached in a light bisque with wood sorrel',
          price: 26,
          course: 'Entree'
        },
        {
          name: 'Seafood Risotto',
          description:
            'Jumbo shrimp, local seaa scallops, little neck clam, assorted mushrooms in a sherry cream sauce',
          price: 34,
          course: 'Entree'
        },
        {
          name: 'Peppered Shrimp and Crab Cake',
          description:
            'Jumbo lump crab cakes set over mashed potatoes and baby spinach topped with jumbo shrimp',
          price: 30,
          course: 'Entree'
        },
        {
          name: 'Bananas and berries foster',
          description: 'Bananas with fresh berries and cream',
          price: 9,
          course: 'Dessert'
        },
        {
          name: 'Croissant Bread Pudding',
          description: 'Flaky crust with bourbon bread pudding',
          price: 8,
          course: 'Dessert'
        },
        {
          name: 'Tiramisu',
          description:
            'ladyfingers dipped in a liqueur, then layered with a rich custard',
          price: 9,
          course: 'Dessert'
        },
        {
          name: 'Creme Brulee',
          description:
            'Traditional baked custard topped with caramelized sugar and fruit',
          price: 11,
          course: 'Dessert'
        },
        {
          name: 'Chocolate Mousse',
          description: 'Bitter sweet, caramel infused milk and white leche',
          price: 11,
          course: 'Dessert'
        },
        {
          name: 'Berry White Delight',
          description:
            'Absolut Elyx Vodka, Chambord, Godiva White Chocolate, pressed rasberry',
          price: 17,
          course: 'Drinks'
        },
        {
          name: 'Worthing Watermelon',
          description: 'Watermelon and cucumber infused Absolut Vodka',
          price: 16,
          course: 'Drinks'
        },
        {
          name: 'Dragon Mojito',
          description:
            'Bacardi Dragonberry Rum, pressed raspberrys, mint and lime',
          price: 15,
          course: 'Drinks'
        },
        {
          name: 'Loco Pina',
          description:
            'Avion Silver Tequila, Ancho Reyes Liquer, chipotle pinneaple puree',
          price: 14,
          course: 'Drinks'
        },
        {
          name: 'Spiced Old Fashioned',
          description:
            "Knob Creek Bourbon, Laird's Brandy, pear, vermouth, bitters",
          price: 8,
          course: 'Drinks'
        },
        {
          name: 'Whiskey Sour',
          description:
            'Jim Beam Black, Templeton Rye, Caffe Amaro, Sauternes, lemon, egg, salt',
          price: 13,
          course: 'Drinks'
        },
        {
          name: 'The Gentlemen',
          description:
            "Maker's Mark Bourbon, Kahlua, Frangelico, espresso, bitters",
          price: 14,
          course: 'Drinks'
        },
        {
          name: 'Strawberry Daiquiri',
          description:
            'White rum, fresh lime juice, sugar syrup, fresh chopped strawberries',
          price: 8,
          course: 'Drinks'
        },
        {
          name: 'Blue Lagoon',
          description: 'Vodka, blue curacao liqueur, lemonade, lemon',
          price: 8,
          course: 'Drinks'
        },
        {
          name: 'Lemon Drop Martini',
          description:
            'Lemon juice with simple syrup, shaken with ice and served with sugared rim',
          price: 11,
          course: 'Drinks'
        },
        {
          name: 'Amaretto Sour',
          description: 'Amaretto with sweet and sour served on crushed ice',
          price: 10,
          course: 'Drinks'
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menus', null, {})
  }
}
