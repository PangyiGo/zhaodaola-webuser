import utils from './utils';

const TokenKey = 'USER_TOKEN';

export function getToken() {
  return utils.getLocal(TokenKey);
}

export function setToken(token) {
  utils.saveLocal(TokenKey, token);
}

export function removeToken() {
  utils.saveLocal(TokenKey, '');
}
