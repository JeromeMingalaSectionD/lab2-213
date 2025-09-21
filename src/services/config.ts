import Config from 'react-native-config';

const AppConfig = {
  apiBaseUrl: Config.API_BASE_URL,
  appName: Config.APP_NAME,
  debugMode: Config.DEBUG_MODE === 'true',
  version: Config.VERSION,
};

export default AppConfig;
