"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var secure_controller_1 = require("./secure/secure.controller"); // Import SecureController
var auth_module_1 = require("./auth/auth.module"); // Import AuthModule and any other necessary modules
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [auth_module_1.AuthModule], // Include AuthModule if SecureController uses authentication guards from there
            controllers: [secure_controller_1.SecureController], // Add SecureController to the list of controllers
            providers: [], // Add any necessary providers
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
