const $ = (selector, element = document) => element.querySelector(selector);
const $$ = (selector, element = document) => element.querySelector(selector);

const Alert = {
  confirmAlert: (message) => confirm(message),
  promtAlert: (message, defaultMessage = "") => prompt(message, defaultMessage),
};

const checkClassList = (target, className) => {
  return target.classList.contains(className);
};

const bindEvent = (element, event, callback) => {
  return element.addEventListener(event, callback);
};

export default { $, $$, Alert, checkClassList, bindEvent };
