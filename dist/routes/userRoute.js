"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/:id', userController_1.getUser);
router.get('/', userController_1.getUsers);
router.post('/', userController_1.createUser);
router.put('/:id', userController_1.updateUser);
router.delete('/:id', userController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=userRoute.js.map