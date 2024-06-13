import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan'; // Use default import

import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Logging
  const logStream = fs.createWriteStream(path.join(__dirname, '../access.log'), { flags: 'a' });
  app.use(morgan('combined', { stream: logStream }));

  await app.listen(3000);
}
bootstrap();
