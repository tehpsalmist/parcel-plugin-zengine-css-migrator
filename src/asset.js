const CSSAsset = require('./CSSAsset')
const path = require('path')
const fs = require('fs')

class ZengineMigratorCSSAsset extends CSSAsset {
    async pretransform() {
        this.contents = this.interpolate(this.contents)
        return super.pretransform()
    }

    interpolate(code) {
        const replacement = fs.readFileSync(path.resolve(process.cwd(), 'plugin', 'plugin.css'))
        return code.replace(/\/\*\s*PLUGIN_CSS\s*\*\//, replacement)
    }
}

module.exports = ZengineMigratorCSSAsset
