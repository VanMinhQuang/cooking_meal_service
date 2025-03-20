"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token)
        return res.status(401).json({ message: "Unauthorized" });
    try {
        // Verify token logic (e.g., JWT verification)
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=Authenticate.js.map