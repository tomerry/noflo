const baseConfig = require('./config');

let config = {
    cdnUrl: 'https://cdn.copytrack.io',
    assetVersion: new Date().getTime(),
    backendUrl: 'https://api.copytrack.io/',
    infuraUrl: 'https://mainnet.infura.io',
};

Object.keys(baseConfig).forEach((key) =>  {
    if (config[key] === undefined) {
        config[key] = baseConfig[key];
    }
});

module.exports = config;