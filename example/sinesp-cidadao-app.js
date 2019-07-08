const { register, listen } = require('../src/index.js');

const appInfo = {
  senderId   : '905942954488',
  cert       : 'daf1d792d60867c52e39c238d9f178c42f35dd98',
  appPackage : 'br.gov.sinesp.cidadao.android',
};

(async () => {
  const credentials = await register(appInfo);
  const fcmToken = credentials.fcm.token;

  console.log('token', fcmToken);
  const persistentIds = [];
  await listen({ ...credentials, persistentIds }, onNotification);

  // Called on new notification
  function onNotification({ notification }) {
    console.log('notification', notification);
  }
})();
