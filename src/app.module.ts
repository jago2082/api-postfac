import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, ProductModule, UserModule,ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      throttlers:[{
        ttl: parseInt(process.env.RATE_LIMIT_TTL),
        limit:parseInt(process.env.RATE_LIMIT)
      }]
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
