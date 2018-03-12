const template = require('lodash.template');
const { config } = require('../data/config');

// available values: originalMessage, availableOptions
const WRONG_ORDER_MESSAGES = [
  'Your order of "${originalMessage}" is not something we can serve. Here\'s our menu: ${availableOptions}. Write \'I need help\' to get an overview of other commands.'
];

// available values: product, orderNumber
const EXISTING_ORDER_MESSAGES = [
  "We are still working on your ${product}. Check order #${orderNumber} with the barista if you have not received any notification within 10 mins."
];

// available values: product, orderNumber
const ORDER_CREATED_MESSAGES = [
  "Thanks for ordering your ${product} via Twilio-powered SMS. Your order number is ${orderNumber}. You will receive a notification when your order is ready."
];

// available values: product, orderNumber
const ORDER_CANCELLED_MESSAGES = [
  'Your ${product} order has been cancelled. Please check with the barista if you think something is wrong. Your order number was #${orderNumber}.'
];

// available values: product, orderNumber
const ORDER_READY_MESSAGES = [
  'Your ${product} is ready! Come pick it up at 2/F Twilio coffee bar, ask for order #${orderNumber}. Click here to see how we built this coffee ordering app: ${repoUrl}'
];

// available values:
const SYSTEM_OFFLINE_MESSAGES = [
  'No more coffee 😱\nSeems like we are out of coffee for today. Have a great day!'
];

// available values: availableOptions
const HELP_MESSAGES = [
  'Simply message the coffee you would like. The available options are: ${availableOptions}. Alternatively write "cancel order" to cancel your existing order or "queue" to determine your position in the queue.'
];

// available values:
const NO_OPEN_ORDER_MESSAGES = [
  'Seems like you have no open order at the moment. Simply message us the name of the coffee you would like.'
];

// available values: queuePosition
const QUEUE_POSITION_MESSAGES = [
  'There are currently ${queuePosition} orders before yours.'
];

// available values: product, orderNumber
const CANCEL_ORDER_MESSAGES = [
  'Your order #${orderNumber} for ${product} has been successfully cancelled.'
];

// available values: error
const OOPS_MESSAGES = [
  'Oops something went wrong! Talk to someone from Twilio and see if they can help you.'
];

function pickRandom(arr) {
  const len = arr.length;
  const idx = Math.floor(Math.random() * len);
  return arr[idx];
}

function getWrongOrderMessage(originalMessage, availableOptions) {
  const tmpl = template(pickRandom(WRONG_ORDER_MESSAGES));
  return tmpl({
    originalMessage,
    availableOptions: availableOptions.join(', ')
  });
}

function getExistingOrderMessage(product, orderNumber) {
  const tmpl = template(pickRandom(EXISTING_ORDER_MESSAGES));
  return tmpl({ product, orderNumber });
}

function getOrderCreatedMessage(product, orderNumber) {
  const repoUrl = config().repoUrl;
  const tmpl = template(pickRandom(ORDER_CREATED_MESSAGES));
  return tmpl({ product, orderNumber, repoUrl });
}

function getOrderCancelledMessage(product, orderNumber) {
  const tmpl = template(pickRandom(ORDER_CANCELLED_MESSAGES));
  return tmpl({ product, orderNumber });
}

function getOrderReadyMessage(product, orderNumber) {
  const tmpl = template(pickRandom(ORDER_READY_MESSAGES));
  return tmpl({ product, orderNumber });
}

function getSystemOfflineMessage() {
  const customMessage = config().offlineMessage;
  if (typeof customMessage === 'string' && customMessage.trim().length > 0) {
    return customMessage;
  }
  const tmpl = template(pickRandom(SYSTEM_OFFLINE_MESSAGES));
  return tmpl();
}

function getHelpMessage(availableOptions) {
  const tmpl = template(pickRandom(HELP_MESSAGES));
  return tmpl({
    availableOptions: availableOptions.join(', ')
  });
}

function getNoOpenOrderMessage() {
  const tmpl = template(pickRandom(NO_OPEN_ORDER_MESSAGES));
  return tmpl();
}

function getQueuePositionMessage(queuePosition) {
  const tmpl = template(pickRandom(QUEUE_POSITION_MESSAGES));
  return tmpl({ queuePosition });
}

function getCancelOrderMessage(product, orderNumber) {
  const tmpl = template(pickRandom(CANCEL_ORDER_MESSAGES));
  return tmpl({ product, orderNumber });
}

function getOopsMessage(error) {
  const tmpl = template(pickRandom(OOPS_MESSAGES));
  return tmpl({ error });
}

module.exports = {
  getWrongOrderMessage,
  getExistingOrderMessage,
  getOrderCreatedMessage,
  getOrderCancelledMessage,
  getOrderReadyMessage,
  getSystemOfflineMessage,
  getHelpMessage,
  getNoOpenOrderMessage,
  getQueuePositionMessage,
  getCancelOrderMessage,
  getOopsMessage
};
