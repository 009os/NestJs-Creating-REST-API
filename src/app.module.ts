import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module'; // Correct path
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, PrismaModule,BookmarkModule,UserModule],
})
export class AppModule { }
