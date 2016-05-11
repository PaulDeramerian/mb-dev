'use strict'

const Joi = require('joi'); // JOI schema validation
const StubHelper = require('./../helpers/StubHelper'); // HELP ALL THE STUBS!!

const MerchantModel = function() {};

MerchantModel.schema = () => {
  return Joi.object().keys({
    id: Joi.number().default(StubHelper.randomIntFromInterval(0, 999), 'id for merchant'),
    channelid: Joi.number().default(StubHelper.randomIntFromInterval(0, 999), 'channel id for merchant'),
    name: Joi.string().default(StubHelper.getRandomName(), 'merchant name'),
    isactive: Joi.boolean().default(true, 'merchant is active'),
    address: Joi.string().default('742 Evergreen Terrace', 'merchant address'),
    propertybag: Joi.string().default(JSON.stringify({
      someKey: 'someValue'
    }), 'merchant property bag'),
    createdby: Joi.number().default(StubHelper.randomIntFromInterval(0, 999), 'record created by'),
    createddate: Joi.date().default(new Date(), 'date record was created'),
    modifiedby: Joi.number().default(StubHelper.randomIntFromInterval(0, 999), 'record modified by'),
    modifieddate: Joi.date().default(new Date(), 'date record was modified'),
    status: Joi.number().default(StubHelper.randomIntFromInterval(0, 999), 'merchant status'),
    approvedby: Joi.number().default(StubHelper.randomIntFromInterval(0, 999), 'merchant approved by'),
    approveddate: Joi.date().default(new Date(), 'date record was approved'),
    sender_name: Joi.string().default(StubHelper.getRandomName(), 'merchant sender name'),
    email: Joi.string().default('imAStarWars@example.com', 'merchant email'),
    logourl: Joi.string().default('http://weblolz.com/wp-content/uploads/2015/05/ralph-wiggum-waving.gif', 'merchant logo url'),
    dticerturl: Joi.string().default('http://weblolz.com/wp-content/uploads/2015/05/ralph-wiggum-waving.gif', 'merchant dticerturl')
  }).label('MerchantModel')
};

<<<<<<< HEAD
=======
MerchantModel.schema = Joi.object().keys({
  id: Joi.number().default(0, 'id for merchant'),
  channelid: Joi.number().default(null, 'channel id for merchant'),
  name: Joi.string().default(null, 'merchant name'),
  isactive: Joi.boolean().default(true, 'merchant is active'),
  address: Joi.string().default(null, 'merchant address'),
  propertybag: Joi.string().default(null, 'merchant property bag'),
  createdby: Joi.number().default(null, 'record created by'),
  createddate: Joi.date().default(new Date(), 'date record was created'),
  modifiedby: Joi.number().default(null, 'record modified by'),
  modifieddate: Joi.date().default(new Date(), 'date record was modified'),
  status: Joi.number().default(null, 'merchant status'),
  approvedby: Joi.number().default(null, 'merchant approved by'),
  approveddate: Joi.date().default(new Date(), 'date record was approved'),
  sender_name: Joi.string().default(null, 'merchant sender name'),
  email: Joi.string().default(null, 'merchant email'),
  logourl: Joi.string().default(null, 'merchant logo url'),
  dticerturl: Joi.string().default(null, 'merchant dticerturl')
}).label('MerchantModel');

>>>>>>> remotes/origin/awsdeploy
module.exports = MerchantModel;
