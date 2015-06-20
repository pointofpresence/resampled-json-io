var fs = require("fs");

module.exports = {
    read: function (file, options) {
        try {
            return JSON.parse(fs.readFileSync(file, options))
        } catch (err) {
            return null;
        }
    },

    write: function (file, obj, options, spaces) {
        spaces = typeof spaces == "undefined" ? 2 : spaces;

        var str = JSON.stringify(obj, null, spaces) + '\n';

        return fs.writeFileSync(file, str, options);
    }
};