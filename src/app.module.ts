import { Module } from '@nestjs/common';
import { SecureController } from './secure/secure.controller'; // Import SecureController
import { AuthModule } from './auth/auth.module'; // Import AuthModule and any other necessary modules

@Module({
  imports: [AuthModule], // Include AuthModule if SecureController uses authentication guards from there
  controllers: [SecureController], // Add SecureController to the list of controllers
  providers: [], // Add any necessary providers
})
export class AppModule {}
