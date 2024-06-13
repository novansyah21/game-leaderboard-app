// src/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module'; // Adjust path based on your project structure
import { AuthService } from './auth.service'; // Assuming AuthService is defined in auth module

@Module({
  imports: [
    UsersModule,
    // Other modules or providers you may want to import
  ],
  controllers: [], // List of controllers for the current module
  providers: [
    AuthService, // Include AuthService or other providers/services specific to AuthModule
  ],
})
export class AuthModule {}
