// const uuidv4 = require('uuid/v4');
const { register: registerGCM } = require('../gcm');
const registerFCM = require('../fcm');

module.exports = register;

async function register(appInfo) {
  // Should be unique by app - One GCM registration/token by app/appId
  const subscription = await registerGCM(appInfo);
  const result = await registerFCM({
    token    : subscription.token,
    senderId : appInfo.senderId,
    appId    : appInfo.appId,
  });
  // Need to be saved by the client
  return Object.assign({}, result, { gcm : subscription });
}
