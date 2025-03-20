const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_STAGING = process.env.APP_VARIANT === 'staging';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.betterwell.reset.dev';
  }

  if (IS_STAGING) {
    return 'com.betterwell.reset.staging';
  }

  return 'com.betterwell.reset';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'Reset (Dev)';
  }

  if (IS_STAGING) {
    return 'Reset (Staging)';
  }

  return 'Reset';
};

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
});
