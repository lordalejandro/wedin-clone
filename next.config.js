module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          dns: false,
          tls: false,
          child_process: false,
          // Add other Node.js modules that you want to exclude here
        };
      }
      return config;
    },
  };
  