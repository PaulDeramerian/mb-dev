'use strict'
const MerchantModel = require('./../models/merchantModel');

const stubHelper = () => {};

const randomNames = {
  firstNames: [
    'Ralph',
    'Stan',
    'Randy',
    'Hawkeye',
    'Carl',
    'Homer',
    'Marge',
    'Bart',
    'Lisa',
    'Maggie',
    'Abraham',
    'Ned',
    'Moe',
    'Otto',
    'Clancy',
    'Troy',
    'John',
    'Frank',
    'Margaret'
  ],
  lastNames: [
    'Wiggum',
    'Simpson',
    'Cartman',
    'Marsh',
    'Pierce',
    'McClure',
    'Mann',
    'Frink',
    'Flanders',
    'Hunnicutt',
    'McIntyre',
    'Potter',
    'Burns',
    'Houlihan',
    "O'Reilly",
    'Klinger'
  ]
};

stubHelper.randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

stubHelper.getRandomName = () => {
  let firstName = randomNames['firstNames'][stubHelper.randomIntFromInterval(0, (randomNames['firstNames'].length) - 1)];
  let lastName = randomNames['lastNames'][stubHelper.randomIntFromInterval(0, (randomNames['lastNames'].length - 1))];

  return [firstName, lastName].join(' ');
}

// TODO: next model/stub built out should refactor this to dynamically pass in model schema.
// method should be ignorant to the type, but should still iterate through and apply the defaults
// to generate a new object.
stubHelper.generateRandomMerchantModel = (id) => {
  let merchantSchema = MerchantModel.schema();
  let merchant = {};
  let _id = (!id) ? stubHelper.randomIntFromInterval(0, 999) : id;

  for (let key in merchantSchema._inner['children']) {
    let item = merchantSchema._inner['children'][key].schema;
    let defaultKey = merchantSchema._inner['children'][key]['key'];
    let defaultValue = item._flags['default'];
    if (defaultKey.toLowerCase() === 'id') {
      defaultValue = _id;
    }

    merchant[defaultKey] = defaultValue;
  }

  return merchant;
}


module.exports = stubHelper;
