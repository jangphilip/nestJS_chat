import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatsModule } from './chats/chats.module';
import * as mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //isGlobal 을 true로 해주면 다른 모듈에서 ConfigModule을 가져올 필요가 없음
      // app.modules.ts에서 해당 부분을 설정해주면 다른 모듈에서도 동일한 환경변수를 사용할 수 있음
    }),
    MongooseModule.forRoot('개인 MongoDB 토큰', {}),
    ChatsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure() {
    const DEBUG = process.env.MODE === 'dev' ? true : false;
    mongoose.set('debug', DEBUG);
  }
}
