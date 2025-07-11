"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(err.statusCode).json({ message: "Internal Server Error" });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map