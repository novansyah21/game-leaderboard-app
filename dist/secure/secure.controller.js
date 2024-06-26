"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var SecureController = /** @class */ (function () {
    function SecureController() {
    }
    SecureController.prototype.getProfile = function () {
        // This route is protected by JWT authentication
        // Handle request logic here
    };
    __decorate([
        (0, common_1.Get)('profile'),
        (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SecureController.prototype, "getProfile", null);
    SecureController = __decorate([
        (0, common_1.Controller)('secure')
    ], SecureController);
    return SecureController;
}());
exports.SecureController = SecureController;
