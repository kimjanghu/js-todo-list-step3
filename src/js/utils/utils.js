const $ = (selector, el = document) => el.querySelector(selector);
const $$ = (selector, el = document) => el.querySelector(selector);

const Alert = {
  confirmAlert: (message) => confirm(message),
  promtAlert: (message, defaultMessage = "") => prompt(message, defaultMessage),
};

const checkClassList = (target, className) => {
  return target.classList.contains(className);
};

export { $, $$, Alert, checkClassList };
