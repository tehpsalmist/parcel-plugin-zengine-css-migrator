module.exports = parseInt(process.versions.node, 10) < 8
    ? require('parcel-bundler/lib/assets/CSSAsset.js')
    : require('parcel-bundler/src/assets/CSSAsset.js');
