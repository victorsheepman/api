import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { BraceletsModule } from './bracelets/bracelets.module';
import { ModeloModule } from './modelo/modelo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/fogazziDB'),
    CatsModule,
    BraceletsModule,
    ModeloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
