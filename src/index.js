module.exports = (bundler) => {
    bundler.addAssetType('.css', require.resolve('./asset.js'));
};
