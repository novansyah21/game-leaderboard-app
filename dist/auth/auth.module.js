"use strict";
// src/auth/auth.module.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var users_module_1 = require("../users/users.module"); // Adjust path based on your project structure
var auth_service_1 = require("./auth.service"); // Assuming AuthService is defined in auth module
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [
                users_module_1.UsersModule,
                // Other modules or providers you may want to import
            ],
            controllers: [], // List of controllers for the current module
            providers: [
                auth_service_1.AuthService, // Include AuthService or other providers/services specific to AuthModule
            ],
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
