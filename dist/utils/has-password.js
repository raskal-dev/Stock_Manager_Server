"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPassword = hasPassword;
const bcrypt = require("bcrypt");
async function hasPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
//# sourceMappingURL=has-password.js.map