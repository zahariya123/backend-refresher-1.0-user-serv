/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { User } from './submodules/backend-refresher-1.0-entities/src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'backend-socialmedia',
      entities: [ User ],
      synchronize: false,
      logging: true
    }),

    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
