import path from 'path';
import validatePeerDependencies from 'validate-peer-dependencies';

validatePeerDependencies(__dirname);

module.exports = function () {
  return {
    name: 'docusaurus-plugin-zooming',

    getClientModules() {
      return [path.resolve(__dirname, './zooming')];
    },
  };
};